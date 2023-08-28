import { isAfter, isSameDay } from "date-fns";
import { daysBetweenDates, isAfterDate, isSameDate } from "./checkDates";
import masechtot from "./masectot";
import getPageOfStudyDay from "./getPageOfStudyDay";
import studyEventsGenerator from "./studyEventGenarator";

export default function getStudyScheduleEvent(startDate, date) {
  const daysFromStart = daysBetweenDates(startDate, date);
  const studyDays = daysFromStart - Math.floor(daysFromStart / 7) * 2 + 1;
  const events = [];

  if (isAfter(date, startDate) && ![5, 6].includes(date.getDay())) {
    const reviewDay = studyDays - 1;
    events.push({ data: getPageOfStudyDay(studyDays, masechtot), isReview: false });
    events.push({ data: getPageOfStudyDay(reviewDay, masechtot), isReview: true });
  } else if (isAfter(date, startDate) && date.getDay() === 5) {
    // review from sunday and monday
    const reviewDays = [studyDays - 5, studyDays - 4];
    reviewDays.forEach(reviewDay => {
      events.push({ data: getPageOfStudyDay(reviewDay, masechtot), isReview: true });
    });
  } else if (isAfter(date, startDate) && date.getDay() === 6) {
    // review from tuesday till thursday
    const reviewDays = [studyDays - 4, studyDays - 3, studyDays - 2];
    reviewDays.forEach(reviewDay => {
      events.push({ data: getPageOfStudyDay(reviewDay, masechtot), isReview: true });
    });
  } else if (isSameDay(date, startDate) && ![5, 6].includes(date.getDay())) {
    events.push({ data: getPageOfStudyDay(studyDays, masechtot), isReview: false });
  }
  return events.length > 0 ? studyEventsGenerator(events, date) : null;
}
