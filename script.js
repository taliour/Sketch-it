const canvas = document.querySelector(".canvas")
const image16 = document.querySelector(".image-16");
const image32 = document.querySelector(".image-32");
const image64 = document.querySelector(".image-64");

//variables and arrays
let canvasSize = 16;
let pixelSize = 640/canvasSize;
//functions

//It crates the drawing canvas
function createCanvas() {
    
    for (j=0; j<canvasSize*canvasSize; j++){
        
        pixelSize = 640/canvasSize;
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.width = `${pixelSize}px`;
        pixel.style.height = `${pixelSize}px`;
        console.log(pixel.style.height);
        canvas.appendChild(pixel);
        pixel.addEventListener('mouseover',()=> {pixel.style.backgroundColor = "black";});
        
    }
}

function clearCanvas(){
    console.log(canvas.childElementCount)
    while(canvas.firstChild){
        canvas.removeChild(canvas.firstChild);
    }
}

createCanvas();

//Changes canvasSize when icon clicked
image16.addEventListener("click",() => { clearCanvas(); canvasSize=16; createCanvas();});
image32.addEventListener("click",() => { clearCanvas(); canvasSize=32; createCanvas();});
image64.addEventListener("click",() => { clearCanvas(); canvasSize=64; createCanvas();});

//Highligt dimension choice image when hovered
image16.addEventListener("mouseover",()=> {image16.style.cssText = "border: solid black 2px";});
image16.addEventListener("mouseout",()=> {image16.style.cssText="border: solid #7F5A83 2px"});

image32.addEventListener("mouseover",()=> {image32.style.cssText = "border: solid black 2px"});
image32.addEventListener("mouseout",()=> {image32.style.cssText="border: solid #7F5A83 2px"});

image64.addEventListener("mouseover",()=> {image64.style.cssText = "border: solid black 2px"});
image64.addEventListener("mouseout",()=> {image64.style.cssText="border: solid #7F5A83 2px"});
