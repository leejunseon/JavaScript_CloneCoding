//const title = document.getElementById("title");
/*
const title=document.querySelector("#title");
title.innerHTML="Hi! From JS";
title.style.color="red";
document.title="title";
console.dir(document);
*/

/*
function handleResize(event){
    //console.log("I have been resized");
    console.log(event);
}

window.addEventListener("resize",handleResize);
*/

const title=document.querySelector("#title");

/*
const BASE_COLOR="rgb(52, 73, 94)";
const OTHER_COLOR="#7f8c8d";

function handleClick(){
    const currentColor=title.style.color;
    if(currentColor===BASE_COLOR){
        title.style.color=OTHER_COLOR;
    }else{
        title.style.color=BASE_COLOR;
    }
}
*/ 

const CLICKED_CLASS="clicked";

function handleClick(){
    //const currentClassname=title.className;
    const hasClass=title.classList.contains(CLICKED_CLASS);
    if(/*currentClassname!==CLICKED_CLASS*/ !hasClass){
        //title.className=CLICKED_CLASS;
        title.classList.add(CLICKED_CLASS);
    }else{
        //title.className="";
        title.classList.remove(CLICKED_CLASS);
    }
}

function handleClickToggle(){
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click",/*handleClick*/ handleClickToggle);
}
init();