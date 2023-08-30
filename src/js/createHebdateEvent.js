import eventCreator from "./eventCreator";
import { isSaturday } from 'date-fns';

export default function createHebdateEvent(date, hebDateEvents) {
    let events = [];
    hebDateEvents.forEach(event => {
        if (!event.includes('סיגד') && !event.includes('עֶרֶב') && !event.includes('יוֹם כִּפּוּר קָטָן') && !event.includes('חַג') && (!event.includes('יוֹם') || event.includes('יוֹם כִּפּוּר') || event.includes('חֲנוּכָּה'))) {
            if (!isSaturday(date.toJSDate()) && event.includes('פָּרָשַׁת')) {
                return;
            } else {
                events.push(event);
            }
        }
    });
    events = events.map(event => {
        let name = event;
        let start = date;
        let end = date;
        let allDay = true;
        let backgroundColor = 'bg-orange-400';
        let borderColor = '#f56954'; //red
        let textColor = 'text-white';
        let display = 'background';
        let props = { hebDate: event };

        return eventCreator(name, start, end, allDay, backgroundColor, borderColor, textColor, display, props);
    });
    return events;
}
