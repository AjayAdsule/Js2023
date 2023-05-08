// console.log(window);
// console.log(document);
// document.body.style.background="green"
// document.body.style.color="white"

//print first node of document
console.log(document.firstChild);

//print last child of element
console.log(document.lastChild);

// printing first element of body
const a = document.body;
console.log(a.firstElementChild);

// changing background of first element
const Changebackground = () => {
  document.body.firstElementChild.style.color = "red";
  setTimeout(() => {
    alert("you have successfully change the first element color");
  }, 1000);
};
