
import "@babel/polyfill"
let obj={}
const str=""
import _ from './lodash'
window._ = _
// import './style.css'
import {add} from './a'
// import b from './b'
// a()
add(1,2)
// if(module.hot){
//   module.hot.accept("./a",()=>{
//     a()
//   })
// }
// var btn = document.createElement("button"); 
// btn.innerHTML = "新增"; 
// document.body.appendChild(btn); 
// btn.onclick = function() {
//   var div = document.createElement("div"); 
//   console.log("1"); 
//   div.innerHTML = "item"; document.body.appendChild(div);
//  };