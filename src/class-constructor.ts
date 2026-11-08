class User{
    userName:string;
    age : number;

    constructor(conUserName:string, conAge:number){
        this.userName= conUserName;
        this.age= conAge;
    }


    display():void{
        console.log(`User Name: ${this.userName}, age ${this.age}`)
    }


}


console.log("\n<br>:OOP: 11-08-26 Properties and Constructor ")
let user1 = new User("Md. Shahidul Isalm",35)
user1.display()


const user2 = new User("Md. Wasenat Islam", 4.3)
user2.display()

const user3 = new User("Mst. Israt Jahan", 33)
user3.display()