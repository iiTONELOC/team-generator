const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const createPage = require('../utils/createPage');


class App {
    constructor() {
        this.data = [];
    }

    initializeApp() {
        this.welcomeAlert();
        inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'name',
                    message: "What is the team manager's name?",
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            this.managerInputAlert();
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'id',
                    message: "What is the manager's ID?",
                    validate: idInput => {
                        if (idInput) {
                            return true;
                        } else {
                            this.idAlert();
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'email',
                    message: "What is the manager's Email?",
                    validate: emailInput => {
                        if (emailInput) {
                            let data = /\S+@\S+\.\S+/.test(emailInput)
                            if (data === true) {
                                return true
                            } else {
                                return this.emailAlert();
                            }
                        } else {
                            this.emailAlert()
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'officeNumber',
                    message: "What is the manager's Office Number?",
                    validate: officeInput => {
                        if (officeInput) {
                            return true;
                        } else {
                            this.officeAlert();
                        }
                    }
                },
            ])
            // destructure the prompt object
            .then(({ name, id, email, officeNumber }) => {
                this.data.push(new Manager(name, id, email, officeNumber));
                this.addEmployee();
            });
    }

    addEmployee() {
        this.employeeAlert();
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
                    this.engineerAlert();
                    inquirer
                        .prompt([
                            {
                                type: 'text',
                                name: 'name',
                                message: "What is the Engineer's Name?",
                                validate: nameInput => {
                                    if (nameInput) {
                                        return true;
                                    } else {
                                        this.engineerInputAlert();
                                    }
                                }
                            },
                            {
                                type: 'text',
                                name: 'id',
                                message: "What is the Engineer's ID?",
                                validate: idInput => {
                                    if (idInput) {
                                        return true;
                                    } else {
                                        this.idAlert();
                                    }
                                }
                            },
                            {
                                type: 'text',
                                name: 'email',
                                message: "What is the engineer's Email?",
                                validate: emailInput => {
                                    if (emailInput) {
                                        let data = /\S+@\S+\.\S+/.test(emailInput)
                                        if (data === true) {
                                            return true
                                        } else {
                                            return this.emailAlert();
                                        }
                                    } else {
                                        this.emailAlert()
                                    }
                                }
                            },
                            {
                                type: 'text',
                                name: 'gitHub',
                                message: "What is the Engineer's GitHub Username?",
                                validate: gitHubInput => {
                                    if (gitHubInput) {
                                        return true;
                                    } else {
                                        this.gitHubAlert();
                                    }
                                }
                            },
                        ])
                        // destructure the prompt object
                        .then(({ name, id, email, gitHub }) => {
                            this.data.push(new Engineer(name, id, email, gitHub));
                            this.displayBreak();
                            this.addEmployee();
                            this.displayDblBreak();
                        });
                }
                if (this.action === 'Add Intern') {
                    this.internAlert()
                    inquirer
                        .prompt([
                            {
                                type: 'text',
                                name: 'name',
                                message: "What is the Intern's Name?",
                                validate: nameInput => {
                                    if (nameInput) {
                                        return true;
                                    } else {
                                        this.internInputAlert();
                                    }
                                }
                            },
                            {
                                type: 'text',
                                name: 'id',
                                message: "What is the Intern's ID?",
                                validate: idInput => {
                                    if (idInput) {
                                        return true;
                                    } else {
                                        this.idAlert();
                                    }
                                }
                            },
                            {
                                type: 'text',
                                name: 'email',
                                message: "What is the Intern's Email?",
                                validate: emailInput => {
                                    if (emailInput) {
                                        let data = /\S+@\S+\.\S+/.test(emailInput)
                                        if (data === true) {
                                            return true
                                        } else {
                                            return this.emailAlert();
                                        }
                                    } else {
                                        this.emailAlert()
                                    }
                                }
                            },
                            {
                                type: 'text',
                                name: 'school',
                                message: "What school did/does your Intern attend?",
                                validate: schoolInput => {
                                    if (schoolInput) {
                                        return true;
                                    } else {
                                        this.schoolAlert();
                                    }
                                }
                            },
                        ])
                        // destructure the prompt object
                        .then(({ name, id, email, school }) => {
                            this.data.push(new Intern(name, id, email, school));
                            this.displayBreak();
                            this.addEmployee();
                            this.displayDblBreak();
                        });
                }
                if (this.action === 'None of these. I am finished building my team.') {
                    this.endAlert();
                    createPage(this.data)
                }
            })
    }

    //UI DISPLAY
    welcomeAlert() {
        console.log(`
    *********************************************************
            Welcome to The Team Profile Generator!
    *********************************************************
    _________________________________________________________
    |                                                       |                                                      
    | Follow the prompts and enter the required information |
    |_______________________________________________________|



`)
    }
    endAlert() {
        console.log(`
    _________________________________________________________
                                            
        Thank you for using Team Profile Generator!

    Your personalized roster is being created. Please check 
    the contents of your 'dist' folder for the output.
                                        
    _________________________________________________________
                                            `)
    }


    employeeAlert() {
        console.log(`
    _________________________________________________________
    |                                                       |                                                      
    |   Select an employee to add to your roster from the   |
    |   list below. If you are finished adding employee's   |
    |   select 'None' to generate your team profile !       |
    |_______________________________________________________|

`)
    }

    engineerAlert() {
        console.log(`
    _________________________________________________________

    You have selected to add a new Engineer to your roster!

    _________________________________________________________
                    `)
    }

    internAlert() {
        console.log(`
    _________________________________________________________
                        
    You have selected to add a new Intern to your roster!
                    
    _________________________________________________________
                    `)
    }

    managerInputAlert() {
        console.log(`
    __________________________________________________________
    |                                                        |
    |         Please enter a name for your manager!          |
    |________________________________________________________|

                    `)

    }

    engineerInputAlert() {
        console.log(`
    __________________________________________________________
    |                                                        |
    |        Please enter a name for your engineer!          |
    |________________________________________________________|

                    `)

    }

    internInputAlert() {
        console.log(`
    __________________________________________________________
    |                                                        |
    |         Please enter a name for your intern!           |
    |________________________________________________________|

                    `)

    }

    idAlert() {
        console.log(`
    __________________________________________________________
    |                                                        |
    |                  Please enter an ID!                   |
    |________________________________________________________|

                    `)
    }

    emailAlert() {
        console.log(`
    __________________________________________________________
    |                                                        |
    |              Please enter a valid email!               |
    |________________________________________________________|

                    `)
    }

    officeAlert() {
        console.log(`
    __________________________________________________________
    |                                                        |
    |             Please enter an office number!             |
    |________________________________________________________|

                    `)
    }

    gitHubAlert() {
        console.log(`
    __________________________________________________________
    |                                                        |
    |             Please enter a gitHub username!            |
    |________________________________________________________|

                    `)
    }

    schoolAlert() {
        console.log(`
    __________________________________________________________
    |                                                        |
    |     Please enter the school your intern attended!      |
    |________________________________________________________|

                    `)
    }

    displayBreak() {
        console.log(`
    _________________________________________________________                
    _________________________________________________________
                    `)
    }

    displayDblBreak() {
        console.log(`

    _________________________________________________________                
    _________________________________________________________
                    `)
    }



}

module.exports = App
