import masechtot from "./data.js";
export default function getAmudim(maseches, daf, amud) {
    const masechesIndex = masechtot.findIndex(element => element.name === maseches);
    // calculates the total amudim till the current amud by accumulating the amudim of the previous masechtot and the current maseches
    const totalAmudim = ((daf - 2) * 2) + amud + masechtot.slice(0, masechesIndex).reduce((total, { pages }) => total + ((pages - 1) * 2), 0);
    return totalAmudim;
}


