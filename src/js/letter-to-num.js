const numbers = {
    '': 0,
    'א': 1,
    'ב': 2,
    'ג': 3,
    'ד': 4,
    'ה': 5,
    'ו': 6,
    'ז': 7,
    'ח': 8,
    'ט': 9,
    'י': 10,
    'כ': 20,
    'ל': 30,
    'מ': 40,
    'נ': 50,
    'ס': 60,
    'ע': 70,
    'פ': 80,
    'צ': 90,
    'ק': 100,
    'ר': 200,
    'ש': 300,
    'ת': 400,
    'תק': 500,
    'תר': 600,
    'תש': 700,
    'תת': 800,
    'תתק': 900,
    'תתר': 1000
};

function numerize(letter) {
    let letterNum = 0;
    for (let i = 0; i < letter.length; i++) {
        letterNum += numbers[letter.charAt(i)] || 0;
    }
    return letterNum;
}

export default numerize;
