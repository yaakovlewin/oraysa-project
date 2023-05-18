import hebDateConvert from './hebcal-API.js'

let countDaysPastFromStartingDate = (days, startingDate) => {
    // Set the date you want to start with
    const startDate = new Date(startingDate);

    // Define the number of days you want to add
    // const numberOfDaysToAdd = days;

    // Create a new Date object and add the number of days
    const endDate = new Date(startDate.getTime() + days * 24 * 60 * 60 * 1000);

    // Output the new date in ISO format (YYYY-MM-DD)
    return endDate.toISOString().slice(0, 10);
}


function addSumNonWorkingDays(totalWorkingDays, workingDaysOfWeek) {
    let nonWorkingDaysOfWeek, days, lastWeeksExtraWorkingDays;
    nonWorkingDaysOfWeek = 7 - workingDaysOfWeek;
    days = daysInFullWeeksOnly(totalWorkingDays, workingDaysOfWeek)
    days += lastWeeksExtraWorkingDays = totalWorkingDays % workingDaysOfWeek;
    if (lastWeeksExtraWorkingDays === 0) {
        days -= nonWorkingDaysOfWeek;
    }
    return days
}

function daysInFullWeeksOnly(activeDaysSum, workingDaysOfWeek) {
    let numOfWeeks = Math.floor(activeDaysSum / workingDaysOfWeek)
    return numOfWeeks * 7;
}

export default async function calculateDate(activeDaysSum, startDate) {
    console.log('dayes    :' + activeDaysSum)
    let WorkingDaysOfWeek = 5
    let daysPast = addSumNonWorkingDays(activeDaysSum, WorkingDaysOfWeek)
    let Date = countDaysPastFromStartingDate(daysPast, startDate)
    let hebDate = hebDateConvert(Date)

    return hebDate
}

