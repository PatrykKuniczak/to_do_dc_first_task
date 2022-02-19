const mainObj = {};
let globalId = 0;
const optionObj = {"activity": "Aktywność", "work": "Praca", "hobby": "Hobby", "sport": "Sport"}
const submitBtn = document.getElementById("input-form");
const select = document.getElementById("category-select");


const createTask = (event) => {
    const tasksList = document.getElementById("tasks-list");
    const input = document.getElementById("input-bar");

    event.preventDefault();

    const name = event.target[0].value;
    const category = optionObj[event.target[2].value];
    globalId++;

    mainObj[globalId] = {name, category};
    tasksList.innerHTML += `<li id=${globalId}> <text> ${name} [${category}]</text>
    <button class='list-btn' type='button' onclick="deleteTask(this.parentNode.id)"><img src='img/delete.svg' alt='Delete Button'/></button>
    </li>`;

    return input.outerHTML = "<input id='input-bar' name='input-bar' type='text' placeholder='Dodaj zadanie: ' autocomplete='off' autofocus required>";
}

const createOptions = () => {
    for (const [key, value] of Object.entries(optionObj)) {
        const element = `<option value=${key}> ${value}</option>`
        select.innerHTML += element;
    }
}

const deleteTask = (identifier) => {
    const {id} = document.getElementById(identifier);
    delete mainObj[id];
    return displayTasks()
}

const displayTasks = () => {
    const tasksListBefore = document.getElementById("tasks-list");
    tasksListBefore.outerHTML = "<ul id='tasks-list'></ul>";
    const tasksListAfter = document.getElementById("tasks-list");

    if (Object.keys(mainObj).length > 0)
        for (const [key, value] of Object.entries(mainObj)) {
            tasksListAfter.innerHTML += `<li id=${key}> <text> ${value.name} [${value.category}]</text>
                <button class='list-btn' type='button' onclick="deleteTask(this.parentNode.id)"><img src='img/delete.svg' alt='Delete Button'/></button>
            </li>`;
        }
}

createOptions()

submitBtn.addEventListener("submit", createTask);
