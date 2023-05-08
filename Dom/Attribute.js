//accessing h1 element with the help of id 
const first=document.getElementById("first")

// It check the element has class attribute if yes return true otherwise return false
console.log(first.hasAttribute("class")) //false

//with this method you can set attribute of element 
first.setAttribute("class","heading")

//with the help of this method you can remove this method
first.removeAttribute("class")