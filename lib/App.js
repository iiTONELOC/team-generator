const inquirer = require('inquirer')
const Manager = require('./Manager')
const Engineer = require('./Engineer')
const Intern = require('./Intern')

class App {
    constructor() {
        this.manager = [];
        this.engineer = [];
        this.intern = [];
    }
    initializeApp() {
        console.log("Welcome to The Team Profile Generator!")
    }
}

module.exports = App
