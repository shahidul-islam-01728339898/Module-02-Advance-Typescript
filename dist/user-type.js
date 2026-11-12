let user1;
user1 = {
    userId: "001",
    userName: "liton",
    userDesc: "This is about liton",
    userEmail: "liton@gmail.com",
};
console.log(user1);
class Person {
    pName;
    pAge;
    constructor(pName, pAge) {
        this.pName = pName;
        this.pAge = pAge;
    }
    display() {
        console.log("Wtie the Biodata");
        console.log("Person Name: ", this.pName);
        console.log("Person Age is:", this.pAge);
    }
}
const person = new Person("Liton", 36);
person.display();
export {};
