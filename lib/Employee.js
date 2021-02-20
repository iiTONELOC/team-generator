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
        let officeNumber = this.officeNumber
        if(!this.officeNumber){
            return 'Employee';
        }
        if(officeNumber){
            return 'Manager';
        }
        
    }
}

module.exports = Employee;