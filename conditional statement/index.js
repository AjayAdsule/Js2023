let age=prompt("enter your age")
age=Number(age)
// console.log(typeof age)
if(age<0){
    alert("Your age is invalid")
}
else if(age<=17){
    alert("you are not eligible for driving licenence ")
}
else{
    alert("you are eligible for driving licence")
}

// with the help of ternary opretor
console.log(age>18? 'eligble for driving':'not elgible for driving')