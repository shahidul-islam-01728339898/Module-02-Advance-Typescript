console.log("<br>");

console.log("Greetings from Union Types!: Start");

//* Basic Union Type Example
type Identity = string | number;
const id : Identity = 123;
console.log(`Basic Union Type Example: ${id}`);


//* Literal Union Type Example
type Role = "admin" | "user" | "manager";
const role : Role ="manager";
console.log(`Literal Union Type Example: ${role}`);


//* Object Union Type Example
type Admin = {id:number, role: "admin", privileges: string[]};
type Member = {id:number, role: "member",  plans: string[]};
type User = Admin | Member; 

const user: User ={ id: 123, role:"admin", privileges: ["create", "delete"] };

console.log(`Object Union Type Example": ${user.id}`);
console.log(`Object Union Type Example": ${user.role}`);
console.log(`Object Union Type Example": ${user.privileges}`);

console.log("Greetings from Union Types!: End : 04-11-26");
console.log("<br>");
