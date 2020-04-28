const LOGIN_LENGTH = 4;
const TIME_LIMIT = 20;

let login = prompt('Enter your login: ');
if (login === null || login === '') {
    alert('Canceled');
} else if (login.length < LOGIN_LENGTH) {
    alert(`I don't know any users having name length less than ${LOGIN_LENGTH} symbols`);
} else if (login !== 'User' && login !== 'Admin') {
    alert('I don’t know you');
} else {
    let password = prompt('Enter your password');
    if (password === null || password === '') {
        alert('Canceled');
    } else if (login === 'User' && password !== 'UserPass' || login === 'Admin' && password !== 'RootPass') {
        alert('Wrong password');
    } else if (new Date().getHours() < TIME_LIMIT) {
        if (login === 'User') {
            alert('Good day, dear User!');
        } else if (login === 'Admin') {
            alert('Good day, dear Admin!');
        }
    } else if (new Date().getHours() >= TIME_LIMIT) {
        if (login === 'User') {
            alert('Good evening, dear User!');
        } else if (login === 'Admin') {
            alert('Good evening, dear Admin!');
        }
    }
}