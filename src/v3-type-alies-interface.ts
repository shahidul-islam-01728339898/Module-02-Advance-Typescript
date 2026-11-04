//* type alias vs interface

//? Interface is generallly connected to object
//? Type alias is more connected to literals, unions, tuples, primitives 

//! Type Alias
//*Creating Custom type using Alial
//  keyword Alias           priimitive type
    type    CarYear     =   number;
    type    CarType     =   string;
    type    CarModel    =   string;
    type    Car         =   {
            year : CarYear,
            type: CarType,
            model: CarModel
    }

//* Assining value to the type
const carYear: CarYear= 2021;
const carType: CarType= "Toyota";
const carModel: CarModel= "Corolla";

//* Print the data of customes Alias
console.log(`Car Year is: ${carYear}`);
console.log(`Car Year is : ${carYear}`);
console.log(`Car Model is : ${carModel}`)


type Role = "Admin" | "Member";
const role: Role="Admin";

interface User{
    id: string, 
    userName: string,
    role: Role,
}

const user:User={
    id: "001",
    userName: "Md.Shahidul Islam",
    role: "Member"
}
console.log(`<br>`)
console.log(`Id Of an user using intereface is : ${user.id}`)
console.log(`Name of and user using Interface is: ${user.userName}`)
console.log(`Role of an user using Interface is: ${user.role}`)
console.log(`<br>`)

//* Example of extends keyword for interface 
console.log("Example of extends keyword for interface ")
interface Animal{
    species: string;
}

interface Cat extends Animal{
    breed: string;
}

const cat: Cat={
    breed:"Felix Catus",
    species:"Persian"
}

console.log(`Bree of a cat using interface is : ${cat.breed}`);
console.log(`Species of a cat is : ${cat.species}`)

console.log(`<br>`)


interface Rectangle{
    height:number,
    width: Number
}

interface ColorRectangle extends Rectangle{
    color: string
}

const colorRectangle: ColorRectangle ={
    color:"red",
    height: 20,
    width:10
}

console.log(`Rectangle Color using interface is: ${colorRectangle.color}`)
console.log(`Rectangle height using interface is: ${colorRectangle.height}`)
console.log(`Rectangle width using interface is: ${colorRectangle.width}`)

console.log(`<br>`)


//* Example of extends keyword for type alias
console.log("Example of extends keyword for type alias ")

type AnotherAnimal ={ animalName: string};
type Bear = AnotherAnimal & {color:string};
const bear: Bear={animalName:"Cat", color:"white"}
console.log(`Example of extends using & sign in type alias is : ${bear.animalName}`)
console.log(`Example of extends using & sign in type alias is: ${bear.color}`)




console.log(`<br>`)