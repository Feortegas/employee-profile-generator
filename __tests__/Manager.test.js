const { expect } = require('@jest/globals');
const { TestScheduler } = require('rxjs/testing');
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Fernando', 9999, 'fernando@Tech.com', 999123456);

    expect(manager.name).toBe('Fernando');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets manager name', () => {
    const manager = new Manager('Fernando', 9999, 'fernando@Tech.com', 999123456);

    expect(manager.getName()).toEqual(expect.stringContaining('Fernando'));
});

test('gets manager id', () => {
    const manager = new Manager('Fernando', 9999, 'fernando@Tech.com', 999123456);

    expect(manager.getId()).toEqual(expect.any(Number));
});

test('gets manager email', () => {
    const manager = new Manager('Fernando', 9999, 'fernando@Tech.com', 999123456);

    expect(manager.getEmail()).toEqual(expect.any(String));
});

test('gets manager office number', () => {
    const manager = new Manager('Fernando', 9999, 'fernando@Tech.com', 999123456);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

test('gets the manager role', () => {
    const manager = new Manager('Fernando', 9999, 'fernando@Tech.com', 999123456);

    expect(manager.getRole()).toBe('Manager');
});