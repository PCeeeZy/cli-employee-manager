const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const questions = require('./util/questions');

/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
*/
const fullTeam = [];
const init = async () => {
    console.log('Welcome to the employee manager cli')
    const answers = await inquirer.prompt(questions.createManager);
    fullTeam.push(new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber));
    addNext();
    
}
const addNext = async () => {
    const nextEmployee = await inquirer.prompt(questions.addMember);
    if (nextEmployee === "Engineer") {
        addEngineer();
    } else if (nextEmployee === "Intern") {
        addIntern();
    } else {
        console.log(`Thanks for using the CLI Employee Manager`)
        process.exit();
    }
}

const addEngineer = async () => {
    const engineer = await inquirer.prompt(questions.addEngineer);
    // TODO: ADD ARGUMENTS TO INSTANCE
    fullTeam.push(new Engineer())
}
const addIntern = async () => {
    const intern = await inquirer.prompt(questions.addIntern);
    // TODO: ADD ARGUMENTS TO INSTANCE
    fullTeam.push(new Intern())
}

init()