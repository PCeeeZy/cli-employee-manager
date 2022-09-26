const Employee = require('./../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        test("Can instantiate instance of Employee", () => {
            const emp = new Employee();
            expect(typeof(emp)).toBe("object");
            expect(emp instanceof Employee).toBe(true)
        })
    })
    describe("Set Values", () => {
        test("Can set name via constructor arguments", () => {
            const name = "Paully";
            const emp = new Employee(name);
            expect(emp.name).toBe(name);
        })
        test("Can set id via constructor arguments", () => {
            const name = "Paully";
            const id = 33;
            const emp = new Employee(name, id);
            expect(emp.id).toBe(id);
        })
        test("Can set email via constructor arguments", () => {
            const name = "Paully";
            const id = 33;
            const email = "paully@wannaCracker.com"
            const emp = new Employee(name, id, email);
            expect(emp.email).toBe(email);
        })
      
    })
    describe("Get Methods", () => {
        test("Can get the name via getName()", () => {
            const name = "Paully";
            const emp = new Employee(name);
            expect(emp.getName()).toBe(name);
        })
        test("Can get the id via getId()", () => {
            const name = "Paully";
            const id = 33;
            const emp = new Employee(name, id);
            expect(emp.getId()).toBe(id);
        })
        test("Can get email via getEmail()", () => {
            const name = "Paully";
            const id = 33;
            const email = "paully@wannaCracker.com"
            const emp = new Employee(name, id, email);
            expect(emp.email).toBe(email);
        })
        test("Can get role via getRole()", () => {
            const name = "Paully";
            const id = 33;
            const email = "paully@wannaCracker.com"
            const emp = new Employee(name, id, email);
            expect(emp.getRole()).toBe('Employee');
        })
      
    })
})