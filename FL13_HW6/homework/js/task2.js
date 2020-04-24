const NUMBER_TWO = 2;

let word = prompt('Word: ');
if (typeof word === 'string') {
    word = word.trim();
}
if (word === null || word === '') {
    alert('Invalid value');
} else {
    let wordLength = word.length;
    let middle = Math.floor(wordLength / NUMBER_TWO);
    if (wordLength % NUMBER_TWO === 0) {
        alert('Middle: ' + word[middle - 1] + word[middle]);
    } else {
        alert('Middle: ' + word[middle]);
    }
}