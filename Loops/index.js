// for loop

for (let i=2;i<22;i+=2){
   console.log(i)
}

const obj={
    name:"ajay",
    age:22,
    Dob:1999
}
//for in loop is use in accessing object
for(i in obj){
    console.log(`My name is ${i} and my value is ${obj[i]}`)
}


//for of loop
let arr=['ajay','vijay','dinesh']
for(i of arr){
    console.log(`my name is ${i}`)
}