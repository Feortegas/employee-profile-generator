const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber = async () => {
        // return this.name;
        let response = await inquirer
            .prompt([
                {
                    // inquirer - ask for employee's office number
                    type: 'input',
                    name: 'officeNumber',
                    message: `Enter the Employee's office number:`
                }
            ])
            this.officeNumber = await response.officeNumber;

            return this.officeNumber;
    };

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;