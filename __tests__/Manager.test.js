const Manager = require('./../lib/Manager');

describe("Manager", () => {
    describe("Initialization", () => {
        test("Can instantiate instance of Manager", () => {
            const emp = new Manager();
            expect(typeof(emp)).toBe("object");
            expect(emp instanceof Manager).toBe(true)
        })
    })
    describe("Set Values", () => {
        test("Can set name via constructor arguments", () => {
            const name = "Paully";
            const emp = new Manager(name);
            expect(emp.name).toBe(name);
        })
        test("Can set id via constructor arguments", () => {
            const name = "Paully";
            const id = 33;
            const emp = new Manager(name, id);
            expect(emp.id).toBe(id);
        })
        test("Can set email via constructor arguments", () => {
            const name = "Paully";
            const id = 33;
            const email = "paully@wannaCracker.com"
            const emp = new Manager(name, id, email);
            expect(emp.email).toBe(email);
        })
        test("Can set office number via constructor arguments", () => {
            const name = "Paully";
            const id = 33;
            const email = "paully@wannaCracker.com";
            const officeNumber = "A113"

            const emp = new Manager(name, id, email, officeNumber);
            expect(emp.officeNumber).toBe(officeNumber);
        })
      
    })
    describe("Get Methods", () => {
        test("Can get the name via getName()", () => {
            const name = "Paully";
            const emp = new Manager(name);
            expect(emp.getName()).toBe(name);
        })
        test("Can get the id via getId()", () => {
            const name = "Paully";
            const id = 33;
            const emp = new Manager(name, id);
            expect(emp.getId()).toBe(id);
        })
        test("Can get email via getEmail()", () => {
            const name = "Paully";
            const id = 33;
            const email = "paully@wannaCracker.com"
            const emp = new Manager(name, id, email);
            expect(emp.email).toBe(email);
        })
        test("Can get role via getRole()", () => {
            const name = "Paully";
            const id = 33;
            const email = "paully@wannaCracker.com"
            const emp = new Manager(name, id, email);
            expect(emp.getRole()).toBe('Manager');
        })
        test("Can get office number via getOfficeNumber()", () => {
            const name = "Paully";
            const id = 33;
            const email = "paully@wannaCracker.com";
            const officeNumber = "A113";
            const emp = new Manager(name, id, email, officeNumber);
            expect(emp.getOfficeNumber()).toBe(officeNumber);
        })
      
    })
})