let countFromStartingDate = (days, startingDate) => {

    // Create a new Date object and add the number of days
    let endDate = new Date(startingDate.getTime() + (days * 86400000));
    return endDate
}


function addNonWorkingDays(totalWorkingDays, workingDaysOfWeek, startingDate) {
    let days = Math.floor(totalWorkingDays / workingDaysOfWeek) * 7
    let oddDaysOfweeks = totalWorkingDays % workingDaysOfWeek;


    // if odd days of full weeks roll over to a new week add 2 days.
    if ((startingDate.getDay() + (oddDaysOfweeks)) > 4) {
        days += 2
    }
    return days += oddDaysOfweeks
}

export default function calculateDate(activeDaysSum, startDate) {
    const startingDate = new Date(startDate);
    let workingDaysOfWeek = 5
    let daysPast = addNonWorkingDays(activeDaysSum, workingDaysOfWeek, startingDate)
    let date = countFromStartingDate(daysPast, startingDate)
    let dateStr = date.toISOString().slice(0, 10);
    let day = date.getDay()
    return { dateStr, day }
}

