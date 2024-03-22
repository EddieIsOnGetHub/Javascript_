
const input = document.querySelector("input");
    h2 = document.querySelector("h2");

h2.innerHTMl = localStorage.getItem("value");

input.addEventListener("keyup", display);


function display(){
    localStorage.setItem("value", input.value);
    h2.innerHTMl = localStorage.getItem("value");
}
    

