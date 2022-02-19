import {mainObj} from "./main.mjs";

let counter = 0;
const optionObj = {"activity": "Aktywność", "work": "Praca", "hobby": "Hobby", "sport": "Sport"}
const select = document.getElementById("category-select");
const tasksList = document.getElementById("tasks-list");

export const createTask = (event) => {
    event.preventDefault();

    const name = event.target[0].value;
    const category = optionObj[event.target[2].value];
    counter++;

    mainObj[counter] = {name, category};
    return displayTask()
}

export const createOptions = () => {

    for (const [key, value] of Object.entries(optionObj)) {
        const element = document.createElement("option");
        element.value = key;
        const text = document.createTextNode(`${value}`);
        element.appendChild(text);
        select.appendChild(element);
    }
}


export const displayTask = () => {
    const text = `${mainObj[counter].name} [${mainObj[counter].category}]`

    return tasksList.innerHTML += `<li id=${counter}> <text> ${text}</text>
        <button class='list-btn' type='button'><img src='img/edit.png' alt='Edit Button'/></button> 
        <button class='list-btn' type='button'><img src='img/delete.svg' alt='Delete Button'/></button>
        </li>`;
}