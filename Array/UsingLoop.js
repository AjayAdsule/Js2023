const arr=[12,41,55,45,85]
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// for of loop shortcut way of above example
for(ele of arr){
    console.log(`the first element is ${ele}`)
}

// for in loop it give you key of array array is basically an object so it return key of arr 0 is key fo 12 if you want value just give [name of array]
for(item in arr){
    console.log(item)
}

//this is foreach method 
arr.forEach((ele)=>{
    console.log(ele+1)
})

//map method return new array you can give index and array
let a=arr.map((items,index,array)=>{
    console.log(`${index}: ${items+5} `)
    return  items+5
})
console.log(a) //[17, 46, 60, 50, 90]

//filter method
let b=arr.filter((items)=>{
    return items <50
})
console.log(b) // [12, 41, 45]

//reduce method
let c= arr.reduce((h1,h2)=>{
    return h1+h2
})
console.log(c) //238

const red=(h1,h2)=>{
   return h1+h2
}
const d= arr.reduce(red)
console.log(d) //238