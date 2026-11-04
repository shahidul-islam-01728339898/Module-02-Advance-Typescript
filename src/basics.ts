console.log("Hello, World!");

const myName:string = "Shahidul Islam";
console.log(`My Name is: ${myName}`);

const number1: number = 10;
const number2: number = 20;
const result: number = number1 + number2;
console.log(`The sum of ${number1} and ${number2} is: ${result}`);

const greetings: string= "Welcome to Typescript!";
console.log(greetings);

// Create an object with properties
let user1 ={
    userName: "John",
    userId: 1,
}
console.log(user1.userName)


let user2 :{ userName:string, userId: number, userEmail: string, userPhone: number}
user2={
    userName: "Shahidul Islam",
    userId: 2,
    userEmail:"shahidul@example.com",
    userPhone: 1234567890       
}

console.log(user2) 
console.log()