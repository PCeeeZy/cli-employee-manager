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
    renderSelf() {
        return `
<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${this.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${this.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${this.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${this.getGithub()}" target="_blank" rel="noopener noreferrer">${this.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `
    }
}

module.exports = Engineer;