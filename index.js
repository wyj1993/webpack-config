document.addEventListener("click",
 () => { import("./click.js")
 .then(
   ({ default: func }) => {
       func(); }); });