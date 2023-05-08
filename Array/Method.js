const num=[1,45,74,56]
let b=num.toString(); //it make array to string but it does not change orignal value
console.log(b) //1,45,74,56

console.log(num) //[1, 45, 74, 56]

let c=num.join('-') // it will be join dash in array

console.log(c) //1-45-74-56

num.pop() //pop will remove the last element of an array 
console.log(num) //[1, 45, 74]

num.push(45) //it will update the value of array at the last element
console.log(num) //[1, 45, 74, 45]

num.shift()// it will remove the first element of an array
console.log(num) //[45, 74, 45] 

num.unshift(100) //it will add new element in array
console.log(num) //[100, 45, 74, 45]

const sum=[12,74,88,77,45,88]
console.log(sum.length) //6

delete sum[1] //it will delete the value at 1 index but the length does not change

console.log(sum) //[12, empty, 88, 77, 45, 88]

console.log(sum.length) //6

// you can make a new array with the help of concat but the old array does not change you can add as many you want to add in new array
const arr1=[1,2,3,4,5]
const arr2=[6,7,8,9,10]
const arr3=[6,7,8,9,10]
const newarr= arr1.concat(arr2,arr3) 
console.log(newarr) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 6, 7, 8, 9, 10]

//sort method
//it will sort the method from accending order
// it change the orignal value of array
const sums1=[45,754,88,47,7,8,1,657,56,4]
sums1.sort()
console.log(sums1) //[1, 4, 45, 47, 56, 657, 7, 754, 8, 88]

// let compare=(a,b)=>{
//     return a-b  
// }
// sums1.sort(compare)
// console.log(sums1) //[1,


// it will also change orignal value of array
const arrays=[12,45,74,78,45,02]
console.log(arrays.reverse()) // [ 2, 45, 78, 74, 45, 12 ]
console.log(arrays)