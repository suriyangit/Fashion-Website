let container=document.querySelector(".products");
let elements=container.querySelectorAll("div");
let input=document.getElementById("inp");

input.addEventListener("keyup",()=>{
  let entered_text=event.target.value.toUpperCase();
  for(let i=0;i<elements.length;i++){
    let product_name=elements[i].querySelector("p").textContent;
    if(product_name.toUpperCase().indexOf(entered_text)<0){
      elements[i].style.display="none";
    }
    else{
      elements[i].style.display="block";
    }
  }
})