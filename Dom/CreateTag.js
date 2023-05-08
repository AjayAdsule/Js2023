//create a new div
const newDiv = document.createElement("div");

// give id to div
newDiv.id = "create";

//giving content to div
newDiv.textContent = "Hello Ajay";

//append the new element to the body
document.body.appendChild(newDiv);

//crete a h1 tsg
const H1 = document.createElement("h1");

//Giving content to h1 element
H1.textContent = "Hello World";

//append h1 element  in body
document.body.appendChild(H1);

// changing title of website
const title = (document.title = "Ajay");

//The type of title is string and rest element is object
console.log(typeof title);
console.log(typeof document.body);


//create a fumction that add bootstrap src to title and after add the src give a alert

const CreateSrc=(src)=>{
    //create a script element
    const script=document.createElement('script')
    //give script a src
    script.src=src;
    //append script to head
    document.head.appendChild(script);
    alert(`script is added succesfully ${src}`)
}
// CreateSrc("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")

