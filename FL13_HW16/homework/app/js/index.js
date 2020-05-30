const baseUrl = 'http://localhost:3000';
const appContainer = document.getElementById('app-container');

const STATUS_CREATE_USER = 201;
const STATUS_DELETE_USER = 204;

const heading = document.createElement('h1');
heading.className = 'heading';
heading.append('Manage User App');
appContainer.append(heading);

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
appContainer.append(wrapper)

const inputName = document.createElement('input');
inputName.className = 'input-name';
inputName.setAttribute('type', 'text');
inputName.setAttribute('required', '');
inputName.placeholder = 'Name';
wrapper.append(inputName);

const inputFullName = document.createElement('input');
inputFullName.className = 'input-full-name';
inputFullName.setAttribute('type', 'text');
inputFullName.setAttribute('required', '');
inputFullName.placeholder = 'Full Name';
wrapper.append(inputFullName);

const addUserButton = document.createElement('button');
addUserButton.className = 'add-user-button';
addUserButton.append('Add New User');
wrapper.append(addUserButton);

const createUser = ({ name, username }) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', baseUrl + '/users');
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onload = () => {
        addUserButton.disabled = false;
        if (xhr.status === STATUS_CREATE_USER) {
            returnListUsers((users) => {
                table.innerHTML = ''
                for (let i = 0; i < users.length; i++) {
                    table.append(generateTableRow(users[i]))
                }
            });
        } else {
            console.log(`Error: ${xhr.status} ${xhr.statusText}`);
        }
    }
    xhr.send(JSON.stringify({ name, username }));

}
const returnListUsers = (cb) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', baseUrl + '/users');
    xhr.responseType = 'json';
    xhr.onload = () => {
        cb(xhr.response);
    }
    xhr.send();
}

addUserButton.addEventListener('click', function () {
    createUser({ name: inputName.value, username: inputFullName.value })
    addUserButton.setAttribute('disabled', 'disabled');
});

const table = document.createElement('table');
table.className = 'hidden table';
appContainer.append(table);

const tableRow = document.createElement('tr');
tableRow.className = 'table-row';
table.append(tableRow);

const userID = document.createElement('th');
userID.className = 'table-header';
userID.append('User ID');
tableRow.append(userID);

const userName = document.createElement('th');
userName.className = 'table-header';
userName.append('User Name');
tableRow.append(userName);

const userNickName = document.createElement('th');
userNickName.className = 'table-header';
userNickName.append('User Nick Name');
tableRow.append(userNickName);

const actions = document.createElement('th');
actions.className = 'table-header';
actions.append('Actions');
tableRow.append(actions);

const loadingText = document.createElement('p')
loadingText.className = 'loading-text';
loadingText.append('Loading...');
appContainer.append(loadingText);


function generateTableRow(user) {
    const rowBody = document.createElement('tr');
    rowBody.className = 'table-row';
    table.append(rowBody);

    const td1 = document.createElement('td');
    td1.className = 'table-data';
    td1.innerHTML = user.id
    rowBody.append(td1);

    const td2 = document.createElement('td');
    td2.className = 'table-data';
    const userNameInput = document.createElement('input');
    userNameInput.className = 'table-user-name';
    userNameInput.value = user.name;
    td2.append(userNameInput);
    rowBody.append(td2);

    const td3 = document.createElement('td');
    td3.className = 'table-data';
    const userNickNameInput = document.createElement('input');
    userNickNameInput.className = 'table-nick-name';
    userNickNameInput.value = user.username;
    td3.append(userNickNameInput);
    rowBody.append(td3);

    const td4 = document.createElement('td');
    td4.className = 'table-data';
    const updateButton = document.createElement('button');
    updateButton.append('Update');
    updateButton.className = 'update-button';
    td4.append(updateButton);
    rowBody.append(td4);

    const td5 = document.createElement('td');
    td5.className = 'table-data';
    const deleteButton = document.createElement('button');
    deleteButton.append('Delete');
    deleteButton.className = 'delete-button';
    td4.append(deleteButton);
    rowBody.append(td4);

    const updateUser = ({ name, username }) => {
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', `${baseUrl}/users/${user.id}`);
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        xhr.onload = () => {
            updateButton.disabled = false;
        }
        xhr.send(JSON.stringify({ name, username }));

    }

    updateButton.addEventListener('click', function () {
        updateUser({ name: userNameInput.value, username: userNickNameInput.value })
        updateButton.setAttribute('disabled', 'disabled');
    });

    const deleteUser = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('DELETE', `${baseUrl}/users/${user.id}`);
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        xhr.setRequestHeader('Authorization', 'admin');
        xhr.onload = () => {
            deleteButton.disabled = false;
            if (xhr.status === STATUS_DELETE_USER) {
                table.deleteRow(rowBody.rowIndex);
            }
        }
        xhr.send();

    }
    deleteButton.addEventListener('click', function () {
        deleteUser();
        deleteButton.setAttribute('disabled', 'disabled');
    });

    return rowBody
}

returnListUsers((users) => {
    for (let i = 0; i < users.length; i++) {
        table.append(generateTableRow(users[i]))
    }
    table.classList.remove('hidden');
    loadingText.classList.add('hidden');
});