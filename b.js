
function counter() {
   var div = document.createElement("div"); 
   div.setAttribute("id", "counter"); 
   div.innerHTML = 1; 
   div.onclick = function() {
      div.innerHTML = parseInt(div.innerHTML, 10) + 1; 
    };
	console.log('小亮')
document.body.appendChild(div); }
export default counter;