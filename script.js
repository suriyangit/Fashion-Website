let menubutton=document.querySelector("#menu-button");
menubutton.addEventListener("click",()=>{
  let menu=document.querySelector(".side-navbar");
  menu.style.left="0";
})

let closebutton=document.querySelector("#close-btn");
closebutton.addEventListener("click",()=>{
  let close=document.querySelector(".side-navbar");
  close.style.left="-60%";
})