import getDate from './getDate.js';
import getAmudin from './calc-amudim-till-current.js';

let firstDafStartDate = '2020-01-05'; // 5780-04-08

export default function calculateGeorgienDate(maseches, daf, amud) {
    return getDate(getAmudin(maseches, daf, amud), firstDafStartDate);
}