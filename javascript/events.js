let sayWhat = document.getElementById("output-target");
let articleItems = document.getElementsByClassName("article-section");
console.log("articleItems", articleItems)

function sectionClick(MouseEvent){
    console.log("MouseEvent", MouseEvent);
    let elementText = MouseEvent.target.innerHTML;
    sayWhat.innerHTML = "You clicked on the " + elementText + " section.";
};

for(let i = 0; i < articleItems.length; i++){
    articleItems.item(i).addEventListener("click", sectionClick);
}

let header = document.getElementById("page-header");

header.addEventListener("mouseover", handleHeaderMouseOver);
header.addEventListener("mouseout", handleHeaderMouseOut);

function handleHeaderMouseOver(event){
    sayWhat.innerHTML = "You moved your mouse over the header.";
}

function handleHeaderMouseOut(event){
    sayWhat.innerHTML = "You left me!!";
}

let inputArea = document.getElementById("keypress-input");

inputArea.addEventListener("keyup", function(event){
    sayWhat.innerHTML = event.target.value;
});

let guineaPig = document.getElementById("guinea-pig");

document.getElementById("add-color").addEventListener("click", function(){
    guineaPig.classList.toggle("bluePig");
});

document.getElementById("make-large").addEventListener("click", function(){
    guineaPig.classList.toggle("makeLarge");
});

document.getElementById("add-border").addEventListener("click", function(){
    guineaPig.classList.toggle("borderPig");
});

document.getElementById("add-rounding").addEventListener("click", function(){
    guineaPig.classList.toggle("borderRound");
});


