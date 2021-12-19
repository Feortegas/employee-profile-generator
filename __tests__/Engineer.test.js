const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Fernando', 9999, 'fernando@TestScheduler.com', 'feortegas');

    expect(engineer.name).toBe('Fernando');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.gitHub).toEqual(expect.any(String));
});

test('gets engineer name', () => {
    const engineer = new Engineer('Fernando', 9999, 'fernando@TestScheduler.com', 'feortegas');

    expect(engineer.getName()).toEqual(expect.stringContaining('Fernando'));
});

test('gets engineer id', () => {
    const engineer = new Engineer('Fernando', 9999, 'fernando@TestScheduler.com', 'feortegas');

    expect(engineer.getId()).toEqual(expect.any(Number));
});

test('gets engineer email', () => {
    const engineer = new Engineer('Fernando', 9999, 'fernando@TestScheduler.com', 'feortegas');

    expect(engineer.getEmail()).toEqual(expect.any(String));
});

test('gets engineer github', () => {
    const engineer = new Engineer('Fernando', 9999, 'fernando@TestScheduler.com', 'feortegas');

    expect(engineer.getGitHub()).toEqual(expect.any(String));
});

test('gets the engineer role', () => {
    const engineer = new Engineer('Fernando', 9999, 'fernando@TestScheduler.com', 'feortegas');

    expect(engineer.getRole()).toBe('Engineer');
});