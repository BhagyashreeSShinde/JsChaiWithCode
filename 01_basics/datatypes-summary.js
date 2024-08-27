// ******************************************Primitives************************************** 
//7 types- String,Number,Boolean,null,undefined,Symbol,BigInt

//JavaScript is a dynamic language not static ,which means that variables can hold values of different types during runtime. 

const score=100;
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;

//***********************************Non-primitive/reference type**********************************
//Array,Objects,Functions
// const heros=["shaktiman","nagraj","doga"]//Array

// let myObje={
// name : "bhagya",
// age: 22,
// }

// const myFunction=function()
// {
//  console.log("Hello word");
 
// }


//console.log(typeof null);

//*******************************************MEMORY********************************************************* 
//stack(primitive),heap memory(NON-PRIMITIVE)
let myyoutubename="bhagya@123gmail.com"
let anothername= myyoutubename//here we give copy of myyoutubename that why we change anothername value doesnot effect myyoutubename
anothername="chaiaurcode"
console.log(myyoutubename);
console.log(anothername);
//object it is going to heap memory userone variable declare in stack but referenced give from heap
let userone={
  email:"user123@goggle.com",
  UPI: "user123@yml"
}
let userTwo= userone
//when it is change both value are changed bcoz it pointing to same reference
userTwo.email="bhagya@gmail.com"

console.log(userone.email);
console.log(userTwo.email);



