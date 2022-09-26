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
    renderSelf() {
        return `
<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${this.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${this.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${this.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
            <li class="list-group-item">School: ${this.getSchool()}</li>
        </ul>
    </div>
</div>
        `
    }
}

module.exports = Intern