import hebDateConvert from './hebcal-API.js'

let countFromStartingDate = (days, startingDate) => {
    // // Set the date you want to start with
    // const startDate = new Date(startingDate);

    // Define the number of days you want to add
    // const numberOfDaysToAdd = days;
    console.log(days)
    // Create a new Date object and add the number of days
    let endDate = new Date(startingDate.getTime() + (days * 86400000));
    console.log(endDate.getDate())

    // add if fallen on weekday
    switch (endDate.getDay()) {
        case 5:
            endDate = endDate.setDate(endDate.getTime() + (2 * 86400000))
            break;
        case 6:
            endDate = endDate.setDate(endDate.getTime() + (1 * 86400000))
            break;
        default:
            break;
    }
    // Output the new date in ISO format (YYYY-MM-DD)
    return endDate.toISOString().slice(0, 10);
}


function addNonWorkingDays(totalWorkingDays, workingDaysOfWeek) {
    let days = Math.floor(totalWorkingDays / workingDaysOfWeek) * 7
    return days += totalWorkingDays % workingDaysOfWeek;
}

export default async function calculateDate(activeDaysSum, startDate) {
    const startingDate = new Date(startDate);
    let workingDaysOfWeek = 5
    let daysPast = addNonWorkingDays(activeDaysSum, workingDaysOfWeek)
    let date = countFromStartingDate(daysPast, startingDate)
    let hebDate = hebDateConvert(date)
    return hebDate
}

