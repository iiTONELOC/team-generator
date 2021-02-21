const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer ('Dave', '4', 'test@email.com', 'githubUserName');

    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toBe('4');
    expect(engineer.email).toBe('test@email.com');
    expect(engineer.getGitHub()).toBe('githubUserName');
    expect(engineer.getRole()).toBe('Engineer');
})