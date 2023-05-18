let letters = {
    set3: ["", "ק", "ר", "ש", "ת", "תק", "תר", "תש", "תת", "תתק"],
    set2: ["", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ"],
    set1: ["", "א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט"]
}


function gimatria(num) {
    num = Math.floor(num)

    var Gim = letters.set3[Math.floor(num / 100)] +
        letters.set2[Math.floor((num % 100) / 10)] +
        letters.set1[num % 10];
    return Gim
}

export default gimatria;

