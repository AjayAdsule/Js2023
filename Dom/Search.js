// I am changing the color and text of the first card with the help of id
const Change=()=>{
    //selecting card-title with the help od get element by id
    const Heading=document.getElementById("card-titles")
    //selecting card-text with the help od get element by id
    const Text=document.getElementById("card-text")
    //changing the color of card-title text
    Heading.style.color="red"
    //writing the hello ajay in card-title
    Heading.innerText="Hello Ajay"
    //writing text in inner text of text
    Text.innerText="Hello Ajay trust yourself you will definaltly became a blockchain devloper"
    console.log(Heading.value)
   
}
//changing with the help of quearyselector
const ChangeWithQueary=()=>{
    const Title=document.querySelectorAll(".card-title")
    Title[2].style.color="blue"
}
ChangeWithQueary()

//get element with tag name
const H5=document.getElementsByTagName("p")[0]
console.log(H5)

//looking innerhtml,outerhtml and innertext
