const inquirer = require('inquirer')
const Manager = require('./Manager')
const Engineer = require('./Engineer')
const Intern = require('./Intern')
const createPage = require('../utils/createPage')

class App {
    constructor() {
        this.manager = [];
        this.engineer = [];
        this.intern = [];
        this.data = [];
    }

    initializeApp() {
        console.log("Welcome to The Team Profile Generator!")
        inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'name',
                    message: "What is the team manager's name?"
                },
                {
                    type: 'text',
                    name: 'id',
                    message: "What is the manager's ID?"
                },
                {
                    type: 'text',
                    name: 'email',
                    message: "What is the manager's Email?"
                },
                {
                    type: 'text',
                    name: 'officeNumber',
                    message: "What is the manager's OfficeNumber?"
                },
            ])
            // destructure the prompt object
            .then(({ name, id, email, officeNumber }) => {
                this.manager.push(new Manager(name, id, email, officeNumber));
                console.log(this.manager[0].getRole());
                this.data.push(this.manager[0])
                //let role = getRole();
                //console.log(` This employee's role is: ${role}`)

                this.addEmployee();
            });
    }

    addEmployee() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'action',
                    message: 'Select an employee to add to your roster.',
                    choices: [
                        'Add Engineer',
                        'Add Intern',
                        'None of these. I am finished building my team.'
                    ],
                }
            ])
            //action
            .then(({ action }) => {
                this.action = action
                if (this.action === 'Add Engineer') {
                    console.log('You have selected to add an Engineer to your roster!')
                    return
                }
                if (this.action === 'Add Intern') {
                    console.log('You have selected to add an Intern to your roster!')
                    return
                }
                if (this.action === 'None of these. I am finished building my team.') {
                    createPage(this.data)
                }
            })
    }

    


}

module.exports = App
