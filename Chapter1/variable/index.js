var a= 'ajay'
{
    var a="vijay"
    console.log(a)
}

console.log(a)
// var is global scope variable you can change anywhere
var b=10
var b=50
console.log(b)  //50

let name="Ajay"
{
    let name="Vijay"
    console.log(name)
}
console.log(name)
// let is block scope variable you cannot redeclare the variable but you can reassign the value above the 
let c=50
// let c=100
console.log(c) // it throw a error like wise you can do assign a new value below the example
let d=45
d=40
console.log(d) //40

// const section
const name1="ajay"
// name1="vijay"
console.log(name1) //you cannot redeclare the variable and cannot assign the value