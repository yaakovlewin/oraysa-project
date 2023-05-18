import hebDateConvert from './hebcal-API.js'

let countDaysPastFromStartingDate = (days, startingDate) => {
    // Set the date you want to start with
    const startDate = new Date(startingDate);

    // Define the number of days you want to add
    // const numberOfDaysToAdd = days;

    // Create a new Date object and add the number of days
    const endDate = new Date(startDate.getTime() + days * 24 * 60 * 60 * 1000);

    // Output the new date in ISO format (YYYY-MM-DD)
    console.log(`date: ${endDate} days ${days}`)
    return endDate.toISOString().slice(0, 10);
}


function addSumNonWorkingDays(totalWorkingDays, workingDaysOfWeek) {
    let nonWorkingDaysOfWeek = 7 - workingDaysOfWeek;
    let days = daysInFullWeeksOnly(totalWorkingDays, workingDaysOfWeek)
    let lastWeeksExtraWorkingDays = totalWorkingDays % workingDaysOfWeek
    days += addAndRemoveExtraNonWorkingDaysInLastWeek(totalWorkingDays, lastWeeksExtraWorkingDays)(days, nonWorkingDaysOfWeek)
    return days
}

function addAndRemoveExtraNonWorkingDaysInLastWeek(totalWorkingDays, workingDaysAmount) {
    let WorkingDaysOfLastWeek = totalWorkingDays % workingDaysAmount;
    if (WorkingDaysOfLastWeek !== 0) {
        return (daysInFullWeeksOnly, nonWorkingDaysOfWeek) => add(WorkingDaysOfLastWeek, nonWorkingDaysOfWeek)
    } else {
        //*  minus lastFullweeks non active days
        return (daysInFullWeeksOnly, nonWorkingDaysOfWeek) => minus(daysInFullWeeksOnly, nonWorkingDaysOfWeek)
    }

}

function daysInFullWeeksOnly(activeDaysSum, workingDaysOfWeek) {
    let numOfWeeks = Math.floor(activeDaysSum / workingDaysOfWeek)
    return numOfWeeks * 7;
}

function minus(num1, num2) {
    return num1 - num2;
}

function add(num1, num2) {
    return num1 + num2
}




export default async function calculateDate(activeDaysSum, startDate) {

    let WorkingDaysOfWeek = 5
    let daysPast = addSumNonWorkingDays(activeDaysSum, WorkingDaysOfWeek)
    let Date = countDaysPastFromStartingDate(daysPast, startDate)
    let hebDate = hebDateConvert(Date)
    console.log('dayes    :' + daysPast)
    return hebDate
}

