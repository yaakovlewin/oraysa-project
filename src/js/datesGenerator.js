import hebcal from './hebcal-API-range';
import getMonthDisplayRange from './getMonthDisplayRange';
import { isToday, isFriday, isSaturday } from 'date-fns'; // Import necessary date-fns functions
import { DateTime } from 'luxon'; // Import DateTime from Luxon

import getStudyScheduleEvent from './getStudyScheduleEvent';


const generateDates = async (month, year) => {
    const dates = [];

    const { firstDayToDisplay, lastDayToDisplay } = getMonthDisplayRange(year, month, 0);

    const formattedFirstDayToDisplay = DateTime.fromJSDate(firstDayToDisplay);
    const formattedLastDayToDisplay = DateTime.fromJSDate(lastDayToDisplay);

    const hebDates = await hebcal(
        formattedFirstDayToDisplay.toISO(),
        formattedLastDayToDisplay.toISO()
    );
    const hebDatesObj = hebDates.hdates;


    let currentDatePointer = formattedFirstDayToDisplay;

    while (currentDatePointer <= formattedLastDayToDisplay) {
        const formattedDate = currentDatePointer.startOf('day');

        const isTodayFlag = isToday(formattedDate.toJSDate());
        const hebDate = hebDatesObj[formattedDate.toISODate()];
        const isHoliday = isFriday(formattedDate.toJSDate()) || isSaturday(formattedDate.toJSDate()) || hebDate?.events?.length > 0;
        const isCurrentMonth = currentDatePointer.month === month + 1;
        const hebDateEvents = hebDate?.events?.length > 0 ? [...hebDate.events] : [];
        const events = [];
        hebDateEvents.forEach(event => {
            if (!event.includes('ערב יום כיפור') || !event.includes('ערב ראש השנה') || !event.includes('ערב פסח') || !event.includes('ערב שבועות') || !event.includes('ערב סוכות') || !event.includes('ערב חג השבועות') || !event.includes('ערב חג הסוכות') || !event.includes('ערב חג הפסח') || !event.includes('ערב חג הראש השנה') || !event.includes('ערב חג הכיפורים')) {
                if (!isSaturday(formattedDate.toJSDate()) && event.includes('פָּרָשַׁת')) {
                    return;
                } else {
                    events.push(event);
                }
            }
        });


        dates.push({
            date: formattedDate.toISODate(),
            isToday: isTodayFlag,
            events: [...getStudyScheduleEvent(new Date(2020, 0, 5), currentDatePointer.toJSDate()), ...events] || [...events],
            isHoliday,
            isCurrentMonth,
            hebDate,
        });

        currentDatePointer = currentDatePointer.plus({ days: 1 });
    }
    return dates;
};

export default generateDates;

