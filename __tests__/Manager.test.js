const Manager = require('../lib/Manager');
const employee = require('../lib/Employee')

test('creates manager object', () => {
    const manager = new Manager('Dave', '4', 'test@email.com', '1');

    expect(manager.name).toBe('Dave');
    expect(manager.id).toBe('4');
    expect(manager.email).toBe('test@email.com');
    expect(manager.officeNumber).toBe('1');
    expect(manager.getRole()).toBe('Manager');


})