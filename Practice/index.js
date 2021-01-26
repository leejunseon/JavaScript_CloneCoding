//const title = document.getElementById("title");
const title=document.querySelector("#title");
title.innerHTML="Hi! From JS";
title.style.color="red";
document.title="title";
console.dir(document);

/*
function handleResize(event){
    //console.log("I have been resized");
    console.log(event);
}

window.addEventListener("resize",handleResize);
*/

function handleClick(){
    title.style.color="blue";
}

title.addEventListener("click",handleClick);