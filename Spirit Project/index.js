 //above footer section functionality....

 //selecting elements
 let element = document.getElementsByClassName("btn");
 let btn_sign = document.getElementsByClassName("btn_sign");
 let desc = document.getElementsByClassName("description");

 //changing the visibility and position
 for (let i = 0; i < element.length; i++) {
     element[i].addEventListener("click", function() {
         desc[i].style.visibility = "visible";
         desc[i].style.position = "relative";
     })
 }


 //function to set other buttons to + when specified one is clicked
 function quit(x) {
     for (let j = 0; j < element.length; j++) {
         element[j].addEventListener("click", function() {
             if (x !== j) {
                 btn_sign[x].textContent = '+';

                 desc[x].style.visibility = "hidden";
                 desc[x].style.position = "absolute";

             }
         })
     }
 }


 //change sign from + to x and vice-versa
 for (let i = 0; i < element.length; i++) {
     element[i].addEventListener("click", function() {
         if (btn_sign[i].textContent === '+') {
             btn_sign[i].textContent = '×';
         } else {
             btn_sign[i].textContent = '+';
             desc[i].style.visibility = "hidden";
             desc[i].style.position = "absolute";
         }

         quit(i);
     })
 }
