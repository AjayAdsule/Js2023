// console.log("Ajay")
// setTimeout(() => {
//     console.log("set")
// }, 2000);
// setTimeout(() => {
//     console.log('set2')
// }, 1000);
// console.log("vijay")

// callback functions
// i am doing a result function in that if two value is greater than 50 the result show you are pass and vice-versa

const add=(num1,num2)=>{
   const result = num1+num2
   add2(result) //i am calling a callback function in that i am passing the result value
   console.log(`result is fetch`)
}
const add2=async (result)=>{
    if(result >=50){
        console.log(`you are pass`)
    }
    else{
        console.log(`you are fail`)
    }
}
add(10,30)