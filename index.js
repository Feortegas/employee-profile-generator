// const questions = require('./src/questions');
const Questions = require('./src/questions');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { async } = require('rxjs');
const inquirer = require('inquirer');


// New Manager function
newManager = async () => {
    const manager = new Manager();
    manager.name = await manager.getName();
    manager.id = await manager.getId();
    manager.email = await manager.getEmail();
    manager.officeNumber = await manager.getOfficeNumber();
    manager.role = 'Manager';
    
    return await choseNewEmployee();
};

const choseNewEmployee = async () => {
    const getRole = await inquirer.prompt({
        // inquirer - ask for employee role - Engineer or Intern
        type: 'list',
        name: 'role',
        message: `Chose to create an Engineer or an Intern or exit the app`,
        choices: ['Engineer', 'Intern', 'exit app']
    })
    const role = await getRole.role;
    
    if (role === 'Engineer') {
        await newEngineer();
    } else if (role === 'Intern') {
        await newIntern();
    } else if (role === 'exit app') {
        await createPage();
    }
};

// New Engineer function
const newEngineer = async () => {
    const engineer = new Engineer();
    engineer.name = await engineer.getName();
    engineer.id = await engineer.getId();
    engineer.email = await engineer.getEmail();
    engineer.gitHub = await engineer.getGitHub();
    engineer.role = 'Engineer';

    return await choseNewEmployee();
};


// New Intern function
const newIntern = async () => {
    const intern = new Intern();
    intern.name = await intern.getName();
    intern.id = await intern.getId();
    intern.email = await intern.getEmail();
    intern.school = await intern.getSchool();
    intern.role = 'Intern';

    return await choseNewEmployee();
};

// Create HTML file
const createPage = async () => {
    console.log('create page');
};

function init() {
    console.log('Welcome to Tech.com Employee management app.');

    // create new manager
    newManager();
   

    // create Manager Employee
    // const nextEmployee = newManager();

    // // check what employee role to create next
    // if (employeeData.role === 'Engineer') {
    //     // prompt Engineer questions
    //     return new Questions().promptUserEngineer();
    // } else if (employeeData.role === 'Intern') {
    //     // prompt Intern questions
    //     return new Questions().promptUserIntern();
    // } else if (employeeData.role === 'exit app') {
    //     return employeeData;
    // }
}

init();