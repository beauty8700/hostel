let x = document.querySelector(".a");
x.addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
});
// it will change the inner text of h1 tag
let y =document.querySelector(".b");
let m=document.querySelector(".c");
y.addEventListener("click",()=>{
    m.innerHTML="<h1> hello </h1>";
    let newH1 = document.createElement("h1"); // Create a new <h1> element
    newH1.textContent = "hi everyone"; // Set its text content
    m.prepend(newH1); // Prepend the new <h1> element to the existing element with class "c"    
})