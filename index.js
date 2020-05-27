const inquirer = require('inquirer');

const questions = [ 
    {
    type: "input",
    message: "Enter a project Title",
    name: "projectTitle"
    }
];

function writeToFile(fileName, data) {
}

function init() {



    inquirer.prompt( questions ).then( ( response ) => {

        console.log( response );

    })

}

init();
