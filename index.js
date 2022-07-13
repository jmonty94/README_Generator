// TODO: Include packages needed for this application
// const fs = require("fs")
import fs from "node:fs"
import inquirer from "inquirer"
import { type } from "node:os";
// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is the name of your Project?",
        name: "projName",
        type: "input",
    },
    {
        message: "What was the motivation behind the project?",
        name: "motivation",
        type: "input",
    },
    {
        message: "Why did you build this project?",
        name: "why",
        type: "input",
    },
    {
        message: "What problem does it solve?",
        name: "problem",
        type: "input",
    },
    {
        message: "What is the command to install dependencies?",
        name: "install",
        type: "input",
        default: "npm i"
    },
    {
        message: "What is the command to run tests?",
        name: "test",
        type: "input",
        default: "npm test"
    },
    {
        message: "Would you like to provide screenshots",
        name: "screenshots",
        type: "confirm",
    },
    {
        message: "If yes please provide the file path of the screenshot within the repo",
        name: "screenPath",
        type: "input",
        default: "",
    },
    {
        message: "What does the user need to know regarding using the repo",
        name: "usage",
        type: "input",
    },
    {
        message: "What is needed to contribute to the repo",
        name: "contribution",
        type: "input",
    },
    {
        message: "What kind of License should your project have",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BDS 3", "None"],
        type: "list",
        default: "None"
    },
    {
        message: "What is your GitHub username",
        name: "github",
        type: "input",
    },
    {
        message: "What is the best email to contact you regarding the project?",
        name: "email",
        type: "input",
    },
    // {
    //     message: ,
    //     name: ,
    //     type: ,
    // },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("./output/README.md", data, () => {

    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log(inquirerResponses);
    })
}

// Function call to initialize app
init();