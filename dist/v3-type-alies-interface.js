//* type alias vs interface
//* Assining value to the type
const carYear = 2021;
const carType = "Toyota";
const carModel = "Corolla";
//* Print the data of customes Alias
console.log(`Car Year is: ${carYear}`);
console.log(`Car Year is : ${carYear}`);
console.log(`Car Model is : ${carModel}`);
const role = "Admin";
const user = {
    id: "001",
    userName: "Md.Shahidul Islam",
    role: "Member"
};
console.log(`<br>`);
console.log(`Id Of an user using intereface is : ${user.id}`);
console.log(`Name of and user using Interface is: ${user.userName}`);
console.log(`Role of an user using Interface is: ${user.role}`);
console.log(`<br>`);
//* Example of extends keyword for interface 
console.log("Example of extends keyword for interface ");
const cat = {
    breed: "Felix Catus",
    species: "Persian"
};
console.log(`Bree of a cat using interface is : ${cat.breed}`);
console.log(`Species of a cat is : ${cat.species}`);
console.log(`<br>`);
const colorRectangle = {
    color: "red",
    height: 20,
    width: 10
};
console.log(`Rectangle Color using interface is: ${colorRectangle.color}`);
console.log(`Rectangle height using interface is: ${colorRectangle.height}`);
console.log(`Rectangle width using interface is: ${colorRectangle.width}`);
console.log(`<br>`);
//* Example of extends keyword for type alias
console.log("Example of extends keyword for type alias ");
const bear = { animalName: "Cat", color: "white" };
console.log(`Example of extends using & sign in type alias is : ${bear.animalName}`);
console.log(`Example of extends using & sign in type alias is: ${bear.color}`);
console.log(`<br>`);
export {};
