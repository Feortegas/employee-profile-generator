const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Fernando', 9999, 'fernando@Tech.com');

    expect(employee.name).toBe('Fernando');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Fernando', 9999, 'fernando@Tech.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Fernando'));
});

test('gets employee id', () => {
    const employee = new Employee('Fernando', 9999, 'fernando@Tech.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Fernando', 9999, 'fernando@Tech.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('gets the employee role', () => {
    const employee = new Employee('Fernando', 9999, 'fernando@Tech.com');

    expect(employee.getRole()).toBe('Employee');
});