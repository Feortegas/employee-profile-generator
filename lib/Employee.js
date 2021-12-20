const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    getName = async () => {
        const response = await inquirer
            .prompt([
                {
                    // inquirer - ask for employee's name
                    type: 'input',
                    name: 'name',
                    message: `Enter the Employee's name:`
                }
            ])
            this.name = await response.name;

            return this.name;
    };

    getId = async () => {
        let response = await inquirer
            .prompt([
                {
                    // inquirer - ask for employee's id
                    type: 'input',
                    name: 'id',
                    message: `Enter the Employee's id:`
                }
            ])
            this.id = await response.id;

            return this.id;
    };

    getEmail = async () => {
        let response = await inquirer
            .prompt([
                {
                    // inquirer - ask for employee's email
                    type: 'input',
                    name: 'email',
                    message: `Enter the Employee's email:`
                }
            ])
            this.email = await response.email;

            return this.email;
    };

    getRole() {
        return 'Employee';
    };
    
}

module.exports = Employee;