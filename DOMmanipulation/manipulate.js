const thisOne=document.getElementsByClassName("thisOne");
thisOne[0].textContent="Anirban";
thisOne[1].innerHTML="<div>Hi</div>"

thisOne[0].style.backgroundColor="yellow";

const myBtn=document.getElementById("myBtn");

myBtn.style.padding="2vmax 4vmax";
myBtn.style.backgroundColor="blue";
myBtn.style.cursor="pointer";
myBtn.style.border="none";
myBtn.setAttribute("class","myBtn");
const myBtn2=document.getElementById("myBtn2");


function bringMeHeadig(){
    const h2=document.createElement("h2");
    document.body.prepend(h2);
    h2.innerText="Anirban";
}

function deleteHeading(){
    const h2=document.querySelector("h2");
    h2.remove();
}

myBtn.onclick=bringMeHeadig;
myBtn2.onclick=deleteHeading;

