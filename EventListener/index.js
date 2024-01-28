const body=document.body;
const btn=document.getElementById("myBtn");

btn.addEventListener("click",()=>{
    body.style.backgroundColor="purple";
})

btn.addEventListener("dblclick",()=>{
    body.style.backgroundColor="white";
})

btn.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
})