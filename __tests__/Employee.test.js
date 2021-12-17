const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Fernando Ortega');

    expect(employee.name).toBe('Fernando Ortega');
    expect(employee.id).toBe('');
    expect(employee.email).toBe('');
});

test('gets employee name', () => {
    const employee = new Employee('Fernando Ortega');

    expect(employee.getName()).toEqual(expect.stringContaining('Fernando Ortega'));
});

test('gets the employee role', () => {
    const employee = new Employee('Fernando Ortega');

    expect(employee.getRole()).toBe('Employee');
});