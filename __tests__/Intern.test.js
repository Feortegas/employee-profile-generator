const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Fernando', 9999, 'fernando@TestScheduler.com', 'Harvard');

    expect(intern.name).toBe('Fernando');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('gets intern name', () => {
    const intern = new Intern('Fernando', 9999, 'fernando@TestScheduler.com', 'Harvard');

    expect(intern.getName()).toEqual(expect.stringContaining('Fernando'));
});

test('gets intern id', () => {
    const intern = new Intern('Fernando', 9999, 'fernando@TestScheduler.com', 'Harvard');

    expect(intern.getId()).toEqual(expect.any(Number));
});

test('gets intern email', () => {
    const intern = new Intern('Fernando', 9999, 'fernando@TestScheduler.com', 'Harvard');

    expect(intern.getEmail()).toEqual(expect.any(String));
});

test('gets intern school', () => {
    const intern = new Intern('Fernando', 9999, 'fernando@TestScheduler.com', 'Harvard');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('gets the intern role', () => {
    const intern = new Intern('Fernando', 9999, 'fernando@TestScheduler.com', 'Harvard');

    expect(intern.getRole()).toBe('Intern');
});