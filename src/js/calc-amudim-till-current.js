import masechtot from "./data.js";
export default function getAmudim(maseches, daf, amud) {
    console.log(`maseches: ${maseches}, daf: ${daf}, amud: ${amud}`);
    // finds the index of the current maseches in the masechtot array
    const masechesIndex = masechtot.findIndex(element => element.name === maseches);
    // calculates the total amudim till the current amud by accumulating the amudim of the previous masechtot and the current maseches minus 1 (so first page of berachos is set to be day 0)
    const currentMasechesAmudim = ((daf - 1) * 2) + amud - 1;
    const previousMasechesAmudim = masechtot.slice(0, masechesIndex).reduce((total, { pages }) => total + (pages * 2), 0) - 2;
    const totalAmudim = currentMasechesAmudim + masechesIndex > 0 ? previousMasechesAmudim : 0;
    console.log(`totalAmudim: ${totalAmudim}`);
    console.log(`Current Maseches dafim: ${(daf - 1) * 2 + amud}`);
    console.log(`Previous Maseches dafim: ${masechtot.slice(0, masechesIndex).reduce((total, { pages }) => total + (pages * 2), 0) - 2}`);
    return totalAmudim;
}


