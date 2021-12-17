class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = '';
        this.email = '';
    }

    getName() {
        return `This is the employee called ${this.name}`;
    };

    getRole() {
        return 'Employee';
    };
}

module.exports = Employee;