import getDate from './getGeorgienDate.js';
import getAmudim from './calc-amudim-till-current.js';
import hebDateConvert from "./hebcal-API.js";

let firstDafStartDate = '2020-01-05'; // 5780-04-08



export default function getDates(maseches, daf, amud) {
    let { dateStr, day } = getDate(getAmudim(maseches, daf, amud), firstDafStartDate)
    let hebDate = hebDateConvert(dateStr)

    function getWeekDay(day) {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Shabbos']
        return days[day]
    }

    function getHebrewWeekDay(day) {
        let days = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת']
        return days[day]
    }

    let engDay = getWeekDay(day)
    let hebDay = getHebrewWeekDay(day)

    return { dateStr, hebDate, engDay, hebDay };
}