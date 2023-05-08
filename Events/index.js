const clicked=()=>{
   console.log('button is clicked')
}

const ChangeColor=()=>{
    console.log('button is clicked')
    const Text=document.getElementById("texts");
    Text.style.background="red"
}

const ChangeText=()=>{
    const Text=document.getElementById("text").value;
    const Heading=document.getElementsByClassName("heading")
    Heading.innerHTML=Text
    console.log("event is trigger")
}