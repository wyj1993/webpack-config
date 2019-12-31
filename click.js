function handleClick(){
  document.addEventListener("click", 
() => { const element = document.createElement("div"); 
element.innerHTML = "welcome to webpack4.x"; 
document.body.appendChild(element); 
});
}
module.exports=handleClick