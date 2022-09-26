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
    renderSelf() {
        return `
<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${this.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${this.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${this.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${this.getOfficeNumber()}</li>
        </ul>
    </div>
</div>
`
    }
};

module.exports = Manager;