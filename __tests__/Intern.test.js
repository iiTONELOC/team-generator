
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern ('Dave', '4', 'test@email.com', 'schoolName');

    expect(intern.name).toBe('Dave');
    expect(intern.id).toBe('4');
    expect(intern.email).toBe('test@email.com');
    expect(intern.getSchool()).toBe('schoolName');
    expect(intern.getRole()).toBe('Intern');
})