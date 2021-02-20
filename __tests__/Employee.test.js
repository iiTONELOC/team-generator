
const Employee = require('../lib/Employee.js');

test('Creates a new employee object', () => {
    const employee = new Employee('Dave');


    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.stringContaining(employee.id.toString()));
    expect(employee.email).toEqual(expect.stringContaining(employee.email.toString()));

})

test('gets employee name', () => {
    const employee = new Employee('Dave');

    expect(employee.getName()).toBe('Dave');
})

test('gets employee ID', () => {
    const employee = new Employee('Dave', '4', 'test@email.com');

    expect(employee.getID()).toBe('4');
})

test('gets employee email', () => {
    const employee = new Employee('Dave', '4', 'test@email.com');

    expect(employee.getEmail()).toBe('test@email.com');
})

test('gets role', () => {
    const employee = new Employee('Dave', '4', 'test@email.com');

    expect(employee.getRole()).toBe('Employee')

})