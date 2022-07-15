const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What languages do you know?',
            name: 'languages',
        },
        {
            type: 'input',
            message: 'What is your preferred method of communication?',
            name: 'method'
        },
    ])
    .then((response) => {
        console.log(response)
        var jsonResponse = JSON.stringify(response)
        console.log(jsonResponse)
        fs.appendFile('newFile.txt', (jsonResponse.name, jsonResponse.languages, jsonResponse.method), function (err) {
            if (err) throw err;
        })
    })