// global variabl
var age=50

function PrintAge (){
    console.log(`your age is ${age}`)
}
PrintAge()

// local variable

function local(){
    let ages=15
    console.log(`your age is ${ages}`)
    names="ajay"
}
local()
// console.log(ages)
console.log(names)


{
    const vote="no"
    console.log(vote)
}
// console.log(vote)