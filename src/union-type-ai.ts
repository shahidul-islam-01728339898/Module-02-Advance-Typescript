// let userId : string | number | boolean;
// userId = "Shahidul"
// userId= 101;
// userId= true; 

// console.log(userId)


//* Basic union type example

type Identity = string | number
const id: Identity= "stdId:001"
console.log("<br>: 08-11-26")
console.log(`Student Id is using Basic union type example: ${id}`)

type RequestType = "GET" | "POST"
let getRequest : RequestType;
getRequest = "GET"

console.log(getRequest)
