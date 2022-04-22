# Node.js Homework: Professional README Generator

## Description

This app will generate an automated README.md file I will create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer), File system (FS), and Node.js. 

The application will be invoked by using the following command:

```bash
node index.js
```

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Installation
```
User must install Node.js. To run node, Visual Studio Code with Gitbash/Command line interface is required. Then, run the following commands to include 'package.json':
* npm init -y
* npm i inquirer
```

## Usage

```
To use the README generator, run the command 'node.js' in terminal and answer all the questions. After answering the prompts, 'Your README file has been generated' message will display and the README.md file is found under the same working directory. 

```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input

WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions  ✅


WHEN I enter my project title
THEN this is displayed as the title of the README  ✅


WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests  ✅


WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under  ✅


WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile


WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions  ✅


WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README  ✅
```

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://img.shields.io/badge/License-MIT-yellow.svg)


## Screenshot


---

#### Github: https://github.com/ryuandrew/read-me-generator



