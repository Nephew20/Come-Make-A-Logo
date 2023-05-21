//Packages
const inquirer = require('inquirer');
const fs = require('fs');

const generateSVG = require('./lib/svg')


//generate a logo.svg file
function generateFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log('Generated logo.svg!!'))
}

//Setting up user input 
function MakeLogo() {
    inquirer.prompt ([
        {
            type: 'input',
            message: 'What is the brand name of the company? Give up to three letters:',
            validate: function (input) {
                if (input.length > 3) {
                    return "Please use up to three letters"
                }
                return true
            },
            name: 'text'
        },
        {
            type: 'input',
            message: 'What color will you like this text to be?',
            name: 'textColor'
        },
        {
            type: 'list',
            message: 'What shape will you like to use?',
            name: 'shape',
            choices: ['Triangle', 'Circle', 'Square']
        },
        {
            type: 'input',
            message: "What's the color of the shape?",
            name: 'shapeColor'
        }
    ]).then((answers) => {
        generateFile('logo.svg', generateSVG(answers))
    })
}  


//call to generate the logo
MakeLogo()