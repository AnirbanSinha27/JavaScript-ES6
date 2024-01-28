const myInput=document.getElementById("myInput");
const myBtn1=document.getElementById("myBtn1");
const myBtn2=document.getElementById("myBtn2");

myBtn1.addEventListener("click",()=>{
    sessionStorage.setItem("Key1",myInput.value);
})

myBtn2.addEventListener("click",()=>{
    sessionStorage.removeItem("Key1");
})

myBtn1.addEventListener("click",()=>{
    localStorage.setItem("Key1",myInput.value);
})

myBtn2.addEventListener("click",()=>{
    localStorage.removeItem("Key1");
})
