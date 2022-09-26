const Employee = require('./../lib/Employee');
/**
 * Constructor that creates an instance of an Engineer which extends an employee
 */
class Engineer extends Employee {
    /**
     * @param {String} name name of the engineer
     * @param {Number} id id of the engineer
     * @param {String} email email of the engineer
     * @param {String} github github username of the engineer
     */
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github;
    }
    /**
     * @returns {String} github username of the engineer
     */
    getGithub() {
        return this.github;
    }
    /**
     * @returns {String} role of the employee
     */
    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;