import eventCreator from './eventCreator.js';

export default function studyEventsGenerator(events, date) {
    let studyEvents = [];
    events.forEach(event => {
        let name = `${event.data.masechet} ${event.data.daf} ${event.data.amud} ${event.isReview ? 'Review ' : ''}`;
        let start = date;
        let end = date;
        let allDay = true;
        let backgroundColor = '#f56954'; //red
        let borderColor = '#f56954'; //red
        let textColor = '#000000'; //black
        let display = 'background';
        let props = { masechet: event.data.masechet, daf: event.data.daf, amud: event.data.amud };

        studyEvents.push(eventCreator(name, start, end, allDay, backgroundColor, borderColor, textColor, display, props));
    });
    return studyEvents;
}