// i am passing a variable that contain names and printing the name
const StudentName=[`Ajay`,`vijay`,`dinesh`]
for(arr of StudentName){
    console.log(`My name is ${arr}`);
}
//doing same thing with forEach method
StudentName.forEach((items)=>{
    console.log(`My name : ${items}`);
})

//Write a JS code to print Even numbers in given array
// how to calculate even number every number which is divided by 2 is call even number
const num=[12,45,74,85,69,2,14]
num.forEach((ele)=>{
    if(ele%2===0){
        console.log(`${ele} is even number`);
    }
})