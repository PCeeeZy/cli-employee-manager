const Employee = require('./../lib/Employee');
/**
 * Constructor that creates an instance of an Intern which extends an employee
 */
class Intern extends Employee{
    /**
     * @param {String} name name of the intern
     * @param {Number} id id of the intern
     * @param {String} email email of the intern
     * @param {String} school school name of the intern
     */
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;
    }
    /**
     * @returns {String} school name of the intern
     */
    getSchool(){
        return this.school;
    }
    /**
     * @returns {String} role of the employee
     */
    getRole() {
        return 'Intern'
    }
}

module.exports = Intern