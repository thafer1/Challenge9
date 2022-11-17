// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
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
        choices: ["Apache", "GNU", "MIT", "BSD", "Boost"]
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

// Function to initialize app and to to write README file
function init() {
    inquirer.prompt(questions).then(function(userInput) {
        const compiledReadme = generateMarkdown(userInput)
        fs.writeFile('README.md', compiledReadme, function() {
            console.log('README.md has been updated')
        })
    })}

// Function call to initialize app
init();