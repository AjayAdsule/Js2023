//what will the following print in javascript console.log('har\"".length)
console.log('har\''.length)

// explore the include startwith and endwith function
const a="i am a javascript devloper"
console.log(a.includes('javascript')) //true
console.log(a.startsWith("a")) //false
console.log(a.startsWith("i")) //true
console.log(a.endsWith("per"))//true
console.log(a.endsWith("p"))//false

// write a program to convert given string in lower case

const str = "I am a javascript developer"
console.log(str.toLowerCase())

//Given a String S, reverse the string without reversing its individual words. Words are separated by dots.

// const word="ajay is devloper"
// function ReverseString(str){
//     let Reverse= str.split("").map(word => word.split("").Reverse().join(""))
//     return Reverse.join("")
// }
// console.log(ReverseString(word))

// const City=[`muBai`,`deHI`,`baNgLore`]
// let capital=City.charAt(0)  
// console.log(capital)
const str = 'flexiple';
const str2 = str.charAt(0);
console.log(str2);