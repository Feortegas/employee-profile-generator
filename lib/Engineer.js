const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);

        this.gitHub = gitHub;
    }

    getGitHub = async () => {
        const response = await inquirer
            .prompt([
                {
                    // inquirer - ask for employee's github
                    type: 'input',
                    name: 'github',
                    message: `Enter the Employee's github:`
                }
            ])
            this.gitHub = await response.github;

            return `https://github.com/${this.gitHub}/`;
    };

}

module.exports = Engineer;