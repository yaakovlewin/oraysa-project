const MILISECONDS_IN_DAY = 86400000;

function daysBetweenDates(date1, date2) {
    const date1Obj = new Date(date1);
    const date2Obj = new Date(date2);

    const date1Time = date1Obj.getTime();
    const date2Time = date2Obj.getTime();

    const timeDiff = Math.abs(date2Time - date1Time);

    const daysDiff = Math.ceil(timeDiff / MILISECONDS_IN_DAY);

    return daysDiff;
}

function isAfterDate(date1, date2) {
    const date1Obj = new Date(date1);
    const date2Obj = new Date(date2);

    if (date1Obj.getFullYear() > date2Obj.getFullYear()) { // date1 is after date2
        return true;
    } else if (date1Obj.getFullYear() < date2Obj.getFullYear()) { // date1 is before date2
        return false;
    } else { // same year
        if (date1Obj.getMonth() > date2Obj.getMonth()) { // date1 is after date2
            return true;
        } else if (date1Obj.getMonth() < date2Obj.getMonth()) { // date1 is before date2
            return false;
        } else { // same month
            if (date1Obj.getDate() > date2Obj.getDate()) { // date1 is after date2
                return true;
            } else if (date1Obj.getDate() < date2Obj.getDate()) { // date1 is before date2
                return false;
            } else { // same day
                return false;
            }
        }
    }
}

function isBeforeDate(date1, date2) {
    const date1Obj = new Date(date1);
    const date2Obj = new Date(date2);

    if (date1Obj.getFullYear() > date2Obj.getFullYear()) { // date1 is after date2
        return false;
    } else if (date1Obj.getFullYear() < date2Obj.getFullYear()) { // date1 is before date2
        return true;
    } else { // same year
        if (date1Obj.getMonth() > date2Obj.getMonth()) { // date1 is after date2
            return false;
        } else if (date1Obj.getMonth() < date2Obj.getMonth()) { // date1 is before date2
            return true;
        } else { // same month
            if (date1Obj.getDate() > date2Obj.getDate()) { // date1 is after date2
                return false;
            } else if (date1Obj.getDate() < date2Obj.getDate()) { // date1 is before date2
                return true;
            } else { // same day
                return false;
            }
        }
    }
}

function isSameDate(date1, date2) {
    const date1Obj = new Date(date1);
    const date2Obj = new Date(date2);

    if (date1Obj.getFullYear() === date2Obj.getFullYear() &&
        date1Obj.getMonth() === date2Obj.getMonth() &&
        date1Obj.getDate() === date2Obj.getDate()) {
        return true;
    } else {
        return false;
    }
}

function isToday(date) {
    const today = new Date();
    return isSameDate(date, today);
}

function isBetweenDates(date, startDate, endDate) {
    return isAfterDate(date, startDate) && isBeforeDate(date, endDate);
}

export { daysBetweenDates, isAfterDate, isBeforeDate, isSameDate, isToday, isBetweenDates };