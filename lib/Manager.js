const Employee = require('./Employee');

/**
 * Constructor that creates an instance of a Manager which extends an employee
 */
class Manager extends Employee {
    /**
     * @param {String} name name of the Manager
     * @param {Number} id id for the manager
     * @param {String} email email for the manager
     * @param {String} officeNumber office number for the manager
     */
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber
    }
    /**
     * @returns {String} role of the employee
     */
    getRole() {
        return "Manager";
    }
    /**
     * @returns {String} office number for the manager
     */
    getOfficeNumber() {
        return this.officeNumber;
    }
};

module.exports = Manager;