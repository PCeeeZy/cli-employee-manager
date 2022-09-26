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
let fullTeam;
const init = async () => {
    fullTeam = [];
    console.log('Welcome to the employee manager cli')
    const answers = await inquirer.prompt(questions.createManager);
    fullTeam.push(new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber));
    addNext();
    
}
const addNext = async () => {
    const {addWhom } = await inquirer.prompt(questions.addMember);
    if (addWhom === "Engineer") {
        addEngineer();
    } else if (addWhom === "Intern") {
        addIntern();
    } else {
        console.log(`Thanks for using the CLI Employee Manager`)
        // TODO: Turn console.log into fs.writeFile
        console.log(renderHTML());
        process.exit();
    }
}

const addEngineer = async () => {
    const engineer = await inquirer.prompt(questions.addEngineer);
    fullTeam.push(new Engineer(engineer.engineerName, engineer.engineerId, engineer.engineerEmail, engineer.engineerGithub))
    addNext()
}
const addIntern = async () => {
    const intern = await inquirer.prompt(questions.addIntern);
    fullTeam.push(new Intern(intern.internName, intern.internId, intern.internEmail, intern.internSchool))
    addNext()
}

const renderHTML = () => {
    // TODO: ADD HTML HEADING
    let html = ``
    for (let employee of fullTeam) {
        html += employee.renderSelf()
    }
    // TODO: ADD HTML FOOTING
    html += ``
    return html;
}

init()