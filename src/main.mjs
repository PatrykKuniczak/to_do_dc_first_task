import {createOptions, createTask} from "./func.mjs";


export const mainObj = {};
const submitBtn = document.getElementById("input-form");


createOptions()

submitBtn.addEventListener("submit", createTask);