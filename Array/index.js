let class_1_marks=[12,47,65,98,74,12]

console.log(class_1_marks)

console.log(class_1_marks[2])

console.log(`The lenght of marks 12 is  ${class_1_marks.length}`) //The lenght of marks 12 is  6

console.log('the lenght of marks 1 is ' + class_1_marks.length) 

class_1_marks[6]="ajay" // you can add new value in array with the help of this method

console.log(class_1_marks) // [ 12, 47, 65, 98, 74, 12, "ajay" ]

class_1_marks[1]=50 //you can update the value of array

console.log(class_1_marks)// [ 12, 50, 65, 98, 74, 12, "ajay" ] 

console.log(typeof class_1_marks) //object

for(let i=0;i<class_1_marks.length;i++){
    console.log(class_1_marks[i])
}