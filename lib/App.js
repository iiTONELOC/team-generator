const inquirer = require('inquirer')
const Manager = require('./Manager')
const Engineer = require('./Engineer')
const Intern = require('./Intern')
const createPage = require('../utils/createPage')

class App {
    constructor() {
        this.data = [];
    }

    initializeApp() {
        console.log(`
*********************************************************
        Welcome to The Team Profile  Generator!
*********************************************************
_________________________________________________________
|                                                       |                                                      
| Follow the prompts and enter the required information |
|_______________________________________________________|



`)
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
                this.data.push(new Manager(name, id, email, officeNumber));
                this.addEmployee();
            });
    }
    
    addEmployee() {
        console.log(`
_________________________________________________________
|                                                       |                                                      
|   Select an employee to add to your roster from the   |
|   list below. If you are finished adding employee's   |
|   select 'None' to generate your team profile !       |
|_______________________________________________________|

`)
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
                    console.log(`
=========================================================

 You have selected to add a new Engineer to your roster!

=========================================================
                    `)
                    inquirer
                        .prompt([
                            {
                                type: 'text',
                                name: 'name',
                                message: "What is the Engineer's Name?"
                            },
                            {
                                type: 'text',
                                name: 'id',
                                message: "What is the Engineer's ID?"
                            },
                            {
                                type: 'text',
                                name: 'email',
                                message: "What is the engineer's Email?"
                            },
                            {
                                type: 'text',
                                name: 'gitHub',
                                message: "What is the Engineer's GitHub Username?"
                            },
                        ])
                        // destructure the prompt object
                        .then(({ name, id, email, gitHub }) => {
                            this.data.push(new Engineer(name, id, email, gitHub));
                            console.log(`
=========================================================                
=========================================================
                    `)
                            this.addEmployee();
                            console.log(`

=========================================================                
=========================================================
                    `)
                        });
                }
                if (this.action === 'Add Intern') {
                    console.log(`
=========================================================
                    
  You have selected to add a new Intern to your roster!
                
=========================================================
                    `)
                    inquirer
                        .prompt([
                            {
                                type: 'text',
                                name: 'name',
                                message: "What is the Intern's Name?"
                            },
                            {
                                type: 'text',
                                name: 'id',
                                message: "What is the Intern's ID?"
                            },
                            {
                                type: 'text',
                                name: 'email',
                                message: "What is the Intern's Email?"
                            },
                            {
                                type: 'text',
                                name: 'school',
                                message: "What school did/does your Intern attend?"
                            },
                        ])
                        // destructure the prompt object
                        .then(({ name, id, email, school }) => {
                            this.data.push(new Intern(name, id, email, school));
                            console.log(`
=========================================================                
=========================================================
                    `)
                            this.addEmployee();
                            console.log(`
                            
=========================================================                
=========================================================
                    `)
                        });
                }
                if (this.action === 'None of these. I am finished building my team.') {
                    console.log(`
=========================================================
                                        
       Thank you for using Team Profile Generator!

 Your personalized roster is being created. Please check 
 the contents of your 'dist' folder for the output.
                                    
=========================================================
                                        `)
                    createPage(this.data)
                }
            })
    }




}

module.exports = App
