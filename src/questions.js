const inquirer = require('inquirer');

const promptUser = employeeData => {
    return inquirer.prompt([
        {
            // inquirer - ask for employee's name
            type: 'text',
            name: 'name',
            message: `Enter the Employee's name:`
        },
        {
            // inquirer - ask for employee id
            type: 'text',
            name: 'id',
            message: `Enter the Employee's id:`
        },
        {
            // inquirer - ask for employee email
            type: 'text',
            name: 'email',
            message: `Enter the Employee's email:`
        },
        {
            // inquirer - ask for employee office number
            type: 'text',
            name: 'officeNumber',
            message: `Enter the Employee's office number:`
        }
    ]);
};

module.exports = { promptUser };

// {
//     // inquirer - ask for employee role - Engineer or Intern
//     type: 'text',
//     name: 'name',
//     message: `Enter the Employee's office number:`,
//     choices: ['Engineer', 'Intern']
// }