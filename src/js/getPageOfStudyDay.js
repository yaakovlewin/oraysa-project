import gimatriaToLetter from "./gematria2letter";
export default function getPageOfStudyDay(studyDay, masechtot) {

    let pages = 0;
    var masechet = "";
    var page = 0;
    for (let masechetInfo of masechtot) {
        pages += masechetInfo.pages * 2;
        if (pages >= studyDay) {
            page = (masechetInfo.pages * 2) - (pages - studyDay);
            masechet = masechetInfo.name;
            break;
        }
    }
    var daf = gimatriaToLetter(Math.ceil(page / 2) + 1);
    var amud = page % 2 === 0 ? `ע"ב` : `ע"א`;
    return { masechet, daf, amud }
}