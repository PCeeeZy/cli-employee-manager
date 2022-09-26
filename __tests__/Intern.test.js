const Intern = require('./../lib/Intern');

describe("Intern", () => {
    describe("Initialization", () => {
        test("Can instantiate instance of Intern", () => {
            const emp = new Intern();
            expect(typeof(emp)).toBe("object");
            expect(emp instanceof Intern).toBe(true)
        })
    })
    describe("Set Values", () => {
        test("Can set name via constructor arguments", () => {
            const name = "Paully";
            const emp = new Intern(name);
            expect(emp.name).toBe(name);
        })
        test("Can set id via constructor arguments", () => {
            const name = "Paully";
            const id = 33;
            const emp = new Intern(name, id);
            expect(emp.id).toBe(id);
        })
        test("Can set email via constructor arguments", () => {
            const name = "Paully";
            const id = 33;
            const email = "paully@wannaCracker.com"
            const emp = new Intern(name, id, email);
            expect(emp.email).toBe(email);
        })
        test("Can set school via constructor arguments", () => {
            const name = "Paully";
            const id = 33;
            const email = "paully@wannaCracker.com";
            const school = "Northwestern"

            const emp = new Intern(name, id, email, school);
            expect(emp.school).toBe(school);
        })
      
    })
    describe("Get Methods", () => {
        test("Can get the name via getName()", () => {
            const name = "Paully";
            const emp = new Intern(name);
            expect(emp.getName()).toBe(name);
        })
        test("Can get the id via getId()", () => {
            const name = "Paully";
            const id = 33;
            const emp = new Intern(name, id);
            expect(emp.getId()).toBe(id);
        })
        test("Can get email via getEmail()", () => {
            const name = "Paully";
            const id = 33;
            const email = "paully@wannaCracker.com"
            const emp = new Intern(name, id, email);
            expect(emp.email).toBe(email);
        })
        test("Can get role via getRole()", () => {
            const name = "Paully";
            const id = 33;
            const email = "paully@wannaCracker.com"
            const emp = new Intern(name, id, email);
            expect(emp.getRole()).toBe('Intern');
        })
        test("Can get school via getOfficeNumber()", () => {
            const name = "Paully";
            const id = 33;
            const email = "paully@wannaCracker.com";
            const school = "Northwestern";
            const emp = new Intern(name, id, email, school);
            expect(emp.getSchool()).toBe(school);
        })
      
    })
})