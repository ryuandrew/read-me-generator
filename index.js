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
    message: "What are your installation commands?",
    name: "installation"
    },
    {type: "input",
    message: "How do you use your app?",
    name: "usage"
    },
    {type: "checkbox",
    message: "Choose a license for your application",
    name: "license",
    choices: [
        "MIT",
        "Apache",
        "GPL v2",
        "GPL v3",
        "N/A"]
    },
    {type: "input",
    message: "How can a user contribute to your project?",
    name: "contributing"
    },
    {type: "input",
    message: "Test instructions",
    name: "test"
    },
    {type: "input",
    message: "What is your GitHub username?",
    name: "userName"
    },
    {type: "input",
    message: "What is your email?",
    name: "email"
    },
  ])
  .then((answers) => {
    var badge = " "
    if (answers.license[0] === "MIT") {
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://img.shields.io/badge/License-MIT-yellow.svg)"
    } else if (answers.license[0] === "Apache") {
      badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
    } else if (answers.license[0] === "GPL v2") {
      badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://img.shields.io/badge/License-GPL%20v2-blue.svg)"
    } else {
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://img.shields.io/badge/License-GPLv3-blue.svg)"
    }

    const content = `# ${answers.title}
## Description
${answers.description}

---
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributin](#contributing)
* [Tests](#test)
* [Questions](#questions)

---
## Installation
To install the necessary dependencies, follow the instructions:

${answers.installation}

---
## Usage
${answers.usage}

---
## License <a name = "license"></a>
This project is licensed under:  
${badge}

---
## Contributing
To contribute to this app, 
* Fork the repo
* Clone the repo to your computer \`\`\`git clone URL\`\`\`
* Create a new branch \`\`\`git checkout -b NAME-TASK\`\`\`
* Commit changes \`\`\`git commit -m "OVERVIEWOFACTION"\`\`\`
* Push your branch \`\`\`git push\`\`\`
* Create a pull request

---
## Test
Update tests when appropriate.
${answers.test}

---
## Questions
If you have any questions feel free to contact me at:
* GithHub: https://github.com/${answers.userName}
* E-mail: ${answers.email}
    `
    fs.writeFile(`./${answers.title}README.md`, content, err => {
        if(err) {
            console.error(err)
            return
        } console.log("Your README file has been generated")
    })
  })