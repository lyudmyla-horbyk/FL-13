//Task1
function convert(...args) {
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] === 'string') {
            args[i] = +args[i];
        } else if (typeof args[i] === 'number') {
            args[i] = args[i].toString();
        }
    }
    return args;
}

//Task2
function executeforEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

//Task3
function mapArray(arr, callback) {
    let roots = [];
    executeforEach(arr, function (el) {
        roots.push(callback(+el))
    })
    return roots;
}

//Task4
function filterArray(arr, callback) {
    let roots = [];
    executeforEach(arr, function (el) {
        if (callback(el)) {
            roots.push(el);
        }
    })
    return roots;
}

//Task5
function containsValue(arr, number) {
    return arr.includes(number);
}

//Task6
function flipOver(str) {
    return str.split('').reverse().join('');
}

//Task7
function makeListFromRange([start, end]) {
    let newArr = [];
    for (let i = start; i <= end; i++) {
        newArr.push(i);
    }
    return newArr;
}

//Task8
function getArrayOfKeys(arr, key) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let obj = arr[i];
        newArr.push(obj[key]);
    }
    return newArr;
}

//Task9
function substitute(arr) {
    const moreLimit = 20;
    const lessLimit = 10;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < moreLimit && arr[i] > lessLimit) {
            arr[i] = '*';
        }
        newArr.push(arr[i]);
    }
    return newArr;
}

//Task10
function getPastDay(date, diff) {
    let newDate = new Date(date);
    newDate.setDate(date.getDate() - diff);
    return newDate.getDate();
}

//Task11
function formatDate(date) {
    const moreLimit = 10;
    function padZero(number) {
        if (number < moreLimit) {
            return '0' + number;
        } else {
            return number;
        }
    }
    const year = date.getFullYear();
    const month = padZero(date.getMonth() + 1);
    const day = padZero(date.getDate());
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    return `${year}/${month}/${day} ${hours}:${minutes}`;
}
