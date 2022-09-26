/* 
The first class is an `Employee` parent class with the following properties and methods:

* `name`

* `id`

* `email`

* `getName()`

* `getId()`

* `getEmail()`

* `getRole()`&mdash;returns `'Employee'`
*/
/**
 * Generic class that will be extended
 */
class Employee {
    /**
     * @param {String} name Name of the employee
     * @param {Number} id  id of the employee
     * @param {String} email email of the employee
     */
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    /**
     * @returns {String} name of the employee
     */
    getName() {
        return this.name;
    }
    /**
     * @returns {Number} id of the employee
     */
    getId() {
        return this.id;
    }
    /**
     * @returns {String} email of the employee
     */
    getEmail() {
        return this.email;
    }
    /**
     * @returns {String} role of the employee
     */
    getRole() {
        return "Employee"
    }
}


module.exports = Employee;