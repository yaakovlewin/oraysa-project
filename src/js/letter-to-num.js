let letters = {
    set3: ["", "ק", "ר", "ש", "ת", "תק", "תר", "תש", "תת", "תתק"],
    set2: ["", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ"],
    set1: ["", "א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט"]
}


function numerize(letter) {
    let letterNum = 0;
    for (let i = 1; i < letter.length + 1; i++) {
        let arr = 'set' + i;
        for (let j = 0; j < letters[arr].length; j++) {
            if (letter.charAt(letter.length - i) === letters[arr][j]) {
                let temp = j;
                switch (i) {
                    case 2:
                        temp = temp * 10;
                        break;
                    case 3:
                        temp = temp * 100;
                        break;
                    default:
                        break;
                }
                letterNum += temp
            }

        }

    }
    return letterNum;
}
export default numerize;