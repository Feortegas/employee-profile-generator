const questions = require('./src/questions');
const Employee = require('./lib/Employee');


function init() {
    console.log('Welcome to the Employee Management System at Tech.com');
    newEmployee();
};

const newEmployee = function() {
    questions.promptUser()
        .then(employeeData => {
            return employeeData;
        });
    
    
    console.log(newEmployee);

}

init();