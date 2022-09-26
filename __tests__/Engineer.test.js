const Engineer = require('./../lib/Engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        test("Can instantiate instance of Engineer", () => {
            const emp = new Engineer();
            expect(typeof(emp)).toBe("object");
            expect(emp instanceof Engineer).toBe(true)
        })
    })
    describe("Set Values", () => {
        test("Can set name via constructor arguments", () => {
            const name = "Paully";
            const emp = new Engineer(name);
            expect(emp.name).toBe(name);
        })
        test("Can set id via constructor arguments", () => {
            const name = "Paully";
            const id = 33;
            const emp = new Engineer(name, id);
            expect(emp.id).toBe(id);
        })
        test("Can set email via constructor arguments", () => {
            const name = "Paully";
            const id = 33;
            const email = "paully@wannaCracker.com"
            const emp = new Engineer(name, id, email);
            expect(emp.email).toBe(email);
        })
        test("Can set school via constructor arguments", () => {
            const name = "Paully";
            const id = 33;
            const email = "paully@wannaCracker.com";
            const github = "PCeeeZy"

            const emp = new Engineer(name, id, email, github);
            expect(emp.github).toBe(github);
        })
      
    })
    describe("Get Methods", () => {
        test("Can get the name via getName()", () => {
            const name = "Paully";
            const emp = new Engineer(name);
            expect(emp.getName()).toBe(name);
        })
        test("Can get the id via getId()", () => {
            const name = "Paully";
            const id = 33;
            const emp = new Engineer(name, id);
            expect(emp.getId()).toBe(id);
        })
        test("Can get email via getEmail()", () => {
            const name = "Paully";
            const id = 33;
            const email = "paully@wannaCracker.com"
            const emp = new Engineer(name, id, email);
            expect(emp.email).toBe(email);
        })
        test("Can get role via getRole()", () => {
            const name = "Paully";
            const id = 33;
            const email = "paully@wannaCracker.com"
            const emp = new Engineer(name, id, email);
            expect(emp.getRole()).toBe('Engineer');
        })
        test("Can get github via getGithub()", () => {
            const name = "Paully";
            const id = 33;
            const email = "paully@wannaCracker.com";
            const github = "PCeeeZy";
            const emp = new Engineer(name, id, email, github);
            expect(emp.getGithub()).toBe(github);
        })
      
    })
})