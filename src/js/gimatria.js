let letters = {
    hundreds: ["", "ק", "ר", "ש", "ת", "תק", "תר", "תש", "תת", "תתק"],
    tens: ["", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ"],
    unites: ["", "א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט"]
}


function gimatria(num) {
    num = Math.floor(num)

    var gimLetter =
        letters.hundreds[Math.floor(num / 100)] +
        letters.tens[Math.floor((num % 100) / 10)] +
        letters.unites[num % 10];

    gimLetter = String(gimLetter).replace(/יה/g, 'טו').replace(/יו/g, 'טז');
    return gimLetter
}

export default gimatria;

