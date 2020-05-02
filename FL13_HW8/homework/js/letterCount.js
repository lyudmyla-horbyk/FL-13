function letterCount(str, letter) {
    let strLowerCase = str.toLowerCase();
    let letterCount = 0;
    for (let position = 0; position < strLowerCase.length; position++) {
        if (strLowerCase.charAt(position) === letter) {
            letterCount += 1;
        }
    }
    return letterCount;
}
letterCount("Maggy", "g");
letterCount("Barry", "b");
letterCount("", "z");