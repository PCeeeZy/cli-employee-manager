// DEPENDENCIES
const inquirer = require('inquirer');
const fs = require('fs')

// CLASS LIBRARY
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

// UTILITIES
const questions = require('./questions');
const renderHTML = require('./renderHTML');


const addNext = async (currTeam) => {
    const {addWhom} = await inquirer.prompt(questions.addMember);
    if (addWhom === "Engineer") {
        addEngineer(currTeam);
    } else if (addWhom === "Intern") {
        addIntern(currTeam);
    } else {
        console.log(`Thanks for using the CLI Employee Manager`)
        fs.writeFile("./dist/output.html", renderHTML(currTeam), (err)=> {
            if (err) throw err;
            else {
                console.log(`HTML generated`);
                process.exit();
            }
        })
    }
}

const addManager = async (currTeam) => {
    const answers = await inquirer.prompt(questions.createManager);
    currTeam.push(new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber));
    addNext(currTeam);
}

const addEngineer = async (currTeam) => {
    const engineer = await inquirer.prompt(questions.addEngineer);
    currTeam.push(new Engineer(engineer.engineerName, engineer.engineerId, engineer.engineerEmail, engineer.engineerGithub))
    addNext(currTeam)
}
const addIntern = async (currTeam) => {
    const intern = await inquirer.prompt(questions.addIntern);
    currTeam.push(new Intern(intern.internName, intern.internId, intern.internEmail, intern.internSchool))
    addNext(currTeam)
}

module.exports = {
    addManager
}