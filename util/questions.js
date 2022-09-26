module.exports = {
    createManager: [
        {
            type: 'input',
            name: "managerName",
            message: "What is the name of the manager?",
            validate: (answer) => {
                if (answer !== '') {
                    return true
                } else {
                    return "Please enter at least one character for the Manager's name"
                }
            }
        },
        {
            type: 'input',
            name: "managerId",
            message: "What is the manager's id?",
            validate: (answer) => {
                const validId = answer.match(/^[1-9]\d*$/);
                if (validId) {
                    return true
                } else {
                    return `Please enter a positive number`
                }
            }
        },
            {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's email?",
            validate: (answer) => {
                const validEmail = answer.match(/\S+@\S+\.\S+/);
                if (validEmail) {
                    return true;
                }
                return `Please enter a valid email address.`;
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is the team manager's office number?",
            validate: (answer) => {
                if (answer !== '') {
                    return true;
                }
                return 'Please enter an office number';
            }
        },
    ],
    addMember: [
        {
            type: 'list',
            name: "addWhom",
            message: "Which type of employee would you like to add?",
            choices: [
                'Engineer',
                'Intern',
                `All employees have been added`
            ]
        }
    ],
    addEngineer: [
        {
            type: 'input',
            name: "engineerName",
            message: "What is the name of the engineer?",
            validate: (answer) => {
                if (answer !== '') {
                    return true
                } else {
                    return "Please enter at least one character for the engineer's name"
                }
            }
        },
        {
            type: 'input',
            name: "engineerId",
            message: "What is the engineer's id?",
            validate: (answer) => {
                const validId = answer.match(/^[1-9]\d*$/);
                if (validId) {
                    return true
                } else {
                    return `Please enter a positive number`
                }
            }
        },
            {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's email?",
            validate: (answer) => {
                const validEmail = answer.match(/\S+@\S+\.\S+/);
                if (validEmail) {
                    return true;
                }
                return `Please enter a valid email address.`;
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is the engineer's github username?",
            validate: (answer) => {
                if (answer !== '') {
                    return true;
                }
                return 'Please enter the username';
            }
        },
    ],
    addIntern: [
        {
            type: 'input',
            name: "internName",
            message: "What is the name of the intern?",
            validate: (answer) => {
                if (answer !== '') {
                    return true
                } else {
                    return "Please enter at least one character for the intern's name"
                }
            }
        },
        {
            type: 'input',
            name: "internId",
            message: "What is the intern's id?",
            validate: (answer) => {
                const validId = answer.match(/^[1-9]\d*$/);
                if (validId) {
                    return true
                } else {
                    return `Please enter a positive number`
                }
            }
        },
            {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's email?",
            validate: (answer) => {
                const validEmail = answer.match(/\S+@\S+\.\S+/);
                if (validEmail) {
                    return true;
                }
                return `Please enter a valid email address.`;
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What is the intern's school?",
            validate: (answer) => {
                if (answer !== '') {
                    return true;
                }
                return 'Please enter a school';
            }
        },
    ]
}