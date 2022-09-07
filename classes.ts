class Person {

    constructor(protected firstName: string, protected lastName: string, protected age?: number) {

    }

    setAge(age: number) {
        this.age = age;
    }

    toString(): string {
        return `${this.firstName} ${this.lastName} (${this.age})`;
    }

    greet(): string {
        return `Hello ${this.firstName} ${this.lastName}`
    }
}

enum Role {
    DEV = "Developer", TESTER = "Tester", QA = "Quality Assuarance Engineer"
}

class Programmer extends Person {

    constructor(protected firstName: string, protected lastName: string, readonly role: Role, protected age?: number) {
        super(firstName, lastName, age);
    }

    greet(): string {
        return `Congratulations ${this.firstName} ${this.lastName}! You're a ${this.role}`
    }

    greetLikeNormalPeople() {
        return super.greet();
    }
}

var p: Programmer = new Programmer("Debojyoti", "Mukherjee", Role.DEV);
p.setAge(25);
console.log(p.toString());
console.log(p.greet())
console.log(p.greetLikeNormalPeople())
