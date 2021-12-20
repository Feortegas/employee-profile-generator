const inquirer = require('inquirer');
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    getSchool = async () => {
        const response = await inquirer
            .prompt([
                {
                    // inquirer - ask for employee's school
                    type: 'input',
                    name: 'school',
                    message: `Enter the Employee's school:`
                }
            ])
            this.school = await response.school;

            return this.school;
    };
}

module.exports = Intern;