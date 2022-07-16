// TODO: Include packages needed for this application
const fs = require("node:fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is the name of your Project?",
        name: "projName",
        type: "input",
    },
    {
        message: "Please describe your project including the motivation behind creating it and what problem it solves?",
        name: "motivation",
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./output/README.md", data, () => {

    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log(inquirerResponses);
        console.log("Generating README please wait.");
        writeToFile('README.md', generateMarkdown({...inquirerResponses }));
    })
}

// Function call to initialize app
init();