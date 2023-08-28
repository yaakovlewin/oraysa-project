const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;

function addDaysToStartDate(date, days) {
    return new Date(date.getTime() + days * MILLISECONDS_PER_DAY);
}

function addNonWorkingDays(totalWorkingDays, workingDaysOfWeek, startingDate) {
    let fullWeeks = Math.floor(totalWorkingDays / workingDaysOfWeek) * 7
    let remainingDays = totalWorkingDays % workingDaysOfWeek;

    // if odd days of full weeks roll over to a new week add 2 days.
    if ((startingDate.getDay() + (remainingDays)) > 4) {
        remainingDays += 2
    }
    return fullWeeks += remainingDays
}

export default function calculateDate(activeDaysSum, startDate) {
    const startingDate = new Date(startDate);
    let workingDaysOfWeek = 5
    let daysToAdd = addNonWorkingDays(activeDaysSum, workingDaysOfWeek, startingDate)
    let date = addDaysToStartDate(startingDate, daysToAdd)
    let day = date.getDay()
    return { date, day }
}

