// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter application title"
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description of your application"
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage instructions"
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter name(s) of contributor(s)"
    },
    {
        type: "input",
        name: "tests",
        message: "Enter how this application tested"
    },
    {
        type: "list",
        message: "Choose a license",
        name: "license",
        choices: ["AAL", "ISC", "MIT", "NTP", "W3C"]
    },
    {
        type: "input",
        name: "github",
        message: "Enter Github username"
    },
    {
        type: "input",
        name: "email",
        message: "Enter email address"
    }
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(userInput) {
        const compiledReadme = generateMarkdown(userInput)

// TODO: Create a function to write README file
        fs.writeFile('README.md', compiledReadme, function() {})
    })}

// Function call to initialize app
init();