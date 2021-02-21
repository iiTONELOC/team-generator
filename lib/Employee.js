class Employee {
    constructor(name = '', id = '', email = '') {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return `${this.name}`
    }
    getID(){
        return `${this.id}`
    }
    getEmail(){
        return `${this.email}`
    }
    getRole(){
        const employee = !this.officeNumber & !this.github &!this.school
        const manager = this.officeNumber
        const engineer = this.github
        const intern = this.school
        
        if(employee){
            return 'Employee';
        }
        if(manager){
            return 'Manager';
        }        
        if(engineer){
            return 'Engineer'
        }
        if(intern){
            return 'Intern'
        }
        
    }
}

module.exports = Employee;