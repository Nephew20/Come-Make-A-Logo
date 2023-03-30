//Setting up user input 
const inquirer = require('inquirer');

function MakeLogo() {
    inquirer.prompt ([
        {
            type: 'input',
            message: 'What is the brand name of the company? Give up to three letters:',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What color will you like this text to be?',
            name: 'nameColor'
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
        console.log(answers)
    })
}  


//call to generate the logo
MakeLogo()