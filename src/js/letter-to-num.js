let numbers = [
    { letter: '', num: 0 },
    { letter: 'א', num: 1 },
    { letter: 'ב', num: 2 },
    { letter: 'ג', num: 3 },
    { letter: 'ד', num: 4 },
    { letter: 'ה', num: 5 },
    { letter: 'ו', num: 6 },
    { letter: 'ז', num: 7 },
    { letter: 'ח', num: 8 },
    { letter: 'ט', num: 9 },
    { letter: 'י', num: 10 },
    { letter: 'כ', num: 20 },
    { letter: 'ל', num: 30 },
    { letter: 'מ', num: 40 },
    { letter: 'נ', num: 50 },
    { letter: 'ס', num: 60 },
    { letter: 'ע', num: 70 },
    { letter: 'פ', num: 80 },
    { letter: 'צ', num: 90 },
    { letter: 'ק', num: 100 },
    { letter: 'ר', num: 200 },
    { letter: 'ש', num: 300 },
    { letter: 'ת', num: 400 },
    { letter: 'תק', num: 500 },
    { letter: 'תר', num: 600 },
    { letter: 'תש', num: 700 },
    { letter: 'תת', num: 800 },
    { letter: 'תתק', num: 900 },
    { letter: 'תתר', num: 1000 },
]


function numerize(letter) {
    let letterNum = 0;
    for (let i = 0; i < letter.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (letter.charAt(i) === numbers[j].letter) {
                letterNum += numbers[j].num;
            }
        }
    }
    return letterNum;
}
export default numerize;