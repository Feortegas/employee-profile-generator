const inquirer = require('inquirer');

class Questions {
    constructor() {

    };

    promptUserManager(employeeData) {
        return inquirer.prompt([
            {
                // inquirer - ask for employee's name
                type: 'input',
                name: 'name',
                message: `Enter the Employee's name:`
            },
            {
                // inquirer - ask for employee id
                type: 'input',
                name: 'id',
                message: `Enter the Employee's id:`
            },
            {
                // inquirer - ask for employee email
                type: 'input',
                name: 'email',
                message: `Enter the Employee's email:`
            },
            {
                // inquirer - ask for employee office number
                type: 'input',
                name: 'officeNumber',
                message: `Enter the Employee's office number:`
            },
            {
                // inquirer - ask for employee role - Engineer or Intern
                type: 'list',
                name: 'role',
                message: `Chose to create an Engineer or an Intern or exit the app`,
                choices: ['Engineer', 'Intern', 'exit app']
            }
        ]);
    }

    promptUserEngineer(employeeData) {
        return inquirer.prompt([
            {
                // inquirer - ask for employee's name
                type: 'input',
                name: 'name',
                message: `Enter the Employee's name:`
            },
            {
                // inquirer - ask for employee id
                type: 'input',
                name: 'id',
                message: `Enter the Employee's id:`
            },
            {
                // inquirer - ask for employee email
                type: 'input',
                name: 'email',
                message: `Enter the Employee's email:`
            },
            {
                // inquirer - ask for employee GitHub User Name
                type: 'input',
                name: 'github',
                message: `Enter the Employee's GitHub User Name:`
            },
            {
                // inquirer - ask for employee role - Engineer or Intern
                type: 'list',
                name: 'role',
                message: `Chose to create an Engineer or an Intern or exit the app`,
                choices: ['Engineer', 'Intern', 'exit app']
            }
        ]);
    };

    promptUserIntern(employeeData) {
        return inquirer.prompt([
            {
                // inquirer - ask for employee's name
                type: 'input',
                name: 'name',
                message: `Enter the Employee's name:`
            },
            {
                // inquirer - ask for employee id
                type: 'input',
                name: 'id',
                message: `Enter the Employee's id:`
            },
            {
                // inquirer - ask for employee email
                type: 'input',
                name: 'email',
                message: `Enter the Employee's email:`
            },
            {
                // inquirer - ask for employee School
                type: 'input',
                name: 'school',
                message: `Enter the Employee's School:`
            },
            {
                // inquirer - ask for employee role - Engineer or Intern
                type: 'list',
                name: 'role',
                message: `Chose to create an Engineer or an Intern or exit the app`,
                choices: ['Engineer', 'Intern', 'exit app']
            }
        ]);
    };


}



// const promptUserManager = employeeData => {
//     return inquirer.prompt([
//         {
//             // inquirer - ask for employee's name
//             type: 'input',
//             name: 'name',
//             message: `Enter the Employee's name:`
//         },
//         {
//             // inquirer - ask for employee id
//             type: 'input',
//             name: 'id',
//             message: `Enter the Employee's id:`
//         },
//         {
//             // inquirer - ask for employee email
//             type: 'input',
//             name: 'email',
//             message: `Enter the Employee's email:`
//         },
//         {
//             // inquirer - ask for employee office number
//             type: 'input',
//             name: 'officeNumber',
//             message: `Enter the Employee's office number:`
//         },
//         {
//             // inquirer - ask for employee role - Engineer or Intern
//             type: 'list',
//             name: 'role',
//             message: `Chose to create an Engineer or an Intern or exit the app`,
//             choices: ['Engineer', 'Intern', 'exit app']
//         }
//     ]);
// };

// const promptUserEngineer = employeeData => {
//     return inquirer.prompt([
//         {
//             // inquirer - ask for employee's name
//             type: 'input',
//             name: 'name',
//             message: `Enter the Employee's name:`
//         },
//         {
//             // inquirer - ask for employee id
//             type: 'input',
//             name: 'id',
//             message: `Enter the Employee's id:`
//         },
//         {
//             // inquirer - ask for employee email
//             type: 'input',
//             name: 'email',
//             message: `Enter the Employee's email:`
//         },
//         {
//             // inquirer - ask for employee GitHub User Name
//             type: 'input',
//             name: 'github',
//             message: `Enter the Employee's GitHub User Name:`
//         }
//     ]);
// };

// const promptUserIntern = employeeData => {
//     return inquirer.prompt([
//         {
//             // inquirer - ask for employee's name
//             type: 'input',
//             name: 'name',
//             message: `Enter the Employee's name:`
//         },
//         {
//             // inquirer - ask for employee id
//             type: 'input',
//             name: 'id',
//             message: `Enter the Employee's id:`
//         },
//         {
//             // inquirer - ask for employee email
//             type: 'input',
//             name: 'email',
//             message: `Enter the Employee's email:`
//         },
//         {
//             // inquirer - ask for employee School
//             type: 'input',
//             name: 'school',
//             message: `Enter the Employee's School:`
//         }
//     ]);
// };

// module.exports = { promptUserEngineer };
// module.exports = { promptUserIntern };
// module.exports = { promptUserManager };

module.exports = Questions;
