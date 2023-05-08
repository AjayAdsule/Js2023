// this is arraw function
const arrow=(a,b)=> a+b
console.log(arrow(12,45))

// I am practice callback function
function Greet(callback){
    console.log("i am practicing callback function")
    callback()
}
const Checking=()=>{
    console.log("successfully checked callback function")
}
Greet(Checking)


const Addition=(a,b)=> a+b
function Calls(callback){
    callback()
}
console.log(Calls(Addition))

// const ChangeHeading=()=>{
//     let heading=document.getElementsByClassName('header')
//     heading[0].style.color="red"
//     heading[0].innerHTML="hello Ajay"
   
// }

