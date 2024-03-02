const bodyel = document.querySelector(".container");

bodyel.addEventListener("mousemove", (event) =>{
const xpos = event.offsetX;
const ypos = event.offsetY;

const spanel = document.createElement("span");
spanel.style.left = xpos + "px";
spanel.style.top = ypos + "px";

const size = Math.random() * 100;
spanel.style.width = size + "px";
spanel.style.height = size + "px";

bodyel.appendChild(spanel);
setTimeout(()=> {
spanel.remove();
},3000);
});



//--------------------------------------------------

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
var imgbtn = document.getElementsByClassName("image");

var imgelem = 1;

btn1.addEventListener("click", function() {
    imgelem++;
    numbers();
});

btn2.addEventListener("click", function() {
    imgelem--;
    numbers();
});

function numbers(){
    if(imgelem > 4){
        imgelem = 1;
    }else if(imgelem < 1){
        imgelem = 4;
    }
    var name = "emoji"+ imgelem + ".jpg";
    imgbtn[0].setAttribute("src", name);
}

