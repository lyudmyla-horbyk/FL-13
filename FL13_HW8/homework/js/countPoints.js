function pointForMatch(a) {
    let x = Number(a.split(':')[0]);
    let y = Number(a.split(':')[1]);
    if (x > y) {
        return 3;
    } else if (x < y) {
        return 0;
    } else {
        return 1;
    }
}
function countPoints(strings) {
    let sum = 0;
    for (let string of strings) {
        sum = sum + pointForMatch(string);
    }
    return sum;
}
countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']);
countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']);