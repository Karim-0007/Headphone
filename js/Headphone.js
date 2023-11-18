let list = document.querySelector(".lists-icon");
let close = document.querySelector(".closeX");
let shownav = document.querySelector(".navbar");


 
list.onclick = function () 
{

  shownav.style.top = "0"
   
}
close.onclick = function () 
{

  shownav.style.top = "-400px"
   
}



