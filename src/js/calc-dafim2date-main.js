import masechtot from "./data";
import getDate from './getDate'

let firstDafStartDate = '2020-01-05';

function totalDafim(maseches, daf, amud) {
    let totalAmudim = (daf * 2) + amud - 1;
    let masechesIndex = masechtot.findIndex((e) => e.name === maseches)
    totalAmudim += totalPrevDafim(masechesIndex)
    return totalAmudim;
}



function totalPrevDafim(num) {
    let total = 0;
    for (let i = 0; i < num; i++) {
        total += masechtot[i].pages * 2
    }
    return total
}



export default function calcDate(maseches, daf, amud = 1) {
    let dafim = totalDafim(maseches, daf, amud)
    return getDate(dafim, firstDafStartDate)
}

