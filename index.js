const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js")
const questions = [ 
    {
    type: "input",
    message: "Enter a project Title",
    name: "title"
    },
    {
        type: "input",
        message: "Enter project description.",
        name: "description"
    },
    {
        type: "input",
        message: "Enter installation instructions.",
        name: "install"
    },
    {
        type: "input",
        message: "Enter usage information.",
        name: "usage"
    },
    {
        type: "list",
        message: "Select a Licence",
        choices: ["MIT", "GPLv3", "GPL", "Creative Commons", "Open Source"],
        name: "licence"
    },
    {
        type: "input",
        message: "Who were the contributers?",
        name: "contributers"
    },
    {
        type: "input",
        message: "Describe the testing involved in this project.",
        name: "tests"
    },
    {
        type: "input",
        message: "enter your GitHub user name ",
        name: "picLink"
    },
    {
        type: "input",
        message: "What is the Email associated with your Github?",
        name: "email"
    }
];

function writeToFile(fileName, data) {

    fs.writeFile( fileName, generateMarkdown(data), function(error) {
        if( error ) console.log( error );
        else console.log( 'Success!' );
    });


}




function init() {

    inquirer
        .prompt( questions )
        .then( ( response ) => {

            writeToFile( 'README.md', response );
        
        
       
    } );
    
}

init();
