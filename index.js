const inquirer = require('inquirer');
const fs = require("fs");
const { cpuUsage } = require('process');

inquirer
  .prompt([{
    /* Pass your questions in here */
    type: "input",
    message: "What is the title of your project?",
    name: "title"
    },
    {type: "input",
    message: "Write a description of your project",
    name: "description"
    },
    {type: "input",
    message: "?",
    name: "installation"
    },
    {type: "input",
    message: "?",
    name: "usage"
    },
    {type: "input",
    message: "?",
    name: "lincense"
    },
    {type: "input",
    message: "?",
    name: "contributor"
    },
    {type: "input",
    message: "?",
    name: ""
    },
    {type: "input",
    message: "?",
    name: ""
    },
    {type: "input",
    message: "?",
    name: ""
    },
    {type: "input",
    message: "?",
    name: ""
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const content = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Group Project</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <main>
            <h1>My name</h1>
            <p>${answers.yourName}</p>
            <h1>My location</h1>
            <p>${answers.location}</p>
            <h1>My bio</h1>
            <p>${answers.yourBio}</p>
            <h1>My LinkedIn Profile</h1>
            <a href="${answers.linkedIn}">${answers.linkedIn}</a>
            <h1>My GitHub Profile</h1>
            <a href="${answers.gitHub}">${answers.gitHub}</a>
        </main>
    </body>
    </html>`
    fs.writeFile(`./${answers.yourName}.html`, content, err => {
        if(err) {
            console.error(err)
            return
        }
    })
  })

//   table of content
//   installation
//   usage
//   licenste
//   contributing
//   test 
//   questions
