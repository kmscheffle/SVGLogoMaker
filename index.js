// Include packages needed for this application
const inquirer = require('inquirer');

const questions= [
    {
        type:'input',
        name: 'text',
        message: 'Enter up to 3 characters to appear as the text on your logo:',
    },

    {
        type: 'input',
        name: 'text color',
        message: 'Enter the color of your text:',    
    },

    {
        type: 'list',
        name: 'shape',
        message: 'Select the shape of your logo:',
        choices:['circle', 'triange', 'square'],
    },

    {
        type: 'input',
        name: 'shape color',
        message: 'Enter the color of your shape:',    
    },

]