const canvas = document.querySelector(".canvas")
const image16 = document.querySelector(".image-16");
const image32 = document.querySelector(".image-32");
const image64 = document.querySelector(".image-64");
const customDimension = document.querySelector(".customDimension");
const rgb = document.querySelector(".rgb");
const black = document.querySelector(".black");
const eraser = document.querySelector(".eraser");
const reset = document.querySelector(".reset");

//variables and arrays
let canvasSize = 16;
let pixelSize = 640/canvasSize;
let colorRGB = false;
let colorBlack = true;
let colorEraser = false;
//functions

//It crates the drawing canvas
function createCanvas() {
    
    for (j=0; j<canvasSize*canvasSize; j++){
        
        pixelSize = 640/canvasSize;
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.width = `${pixelSize}px`;
        pixel.style.height = `${pixelSize}px`;
        canvas.appendChild(pixel);
        pixel.addEventListener('mouseover',()=> {pixel.style.backgroundColor = `${changeColor()}`;});
        
    }
}

function clearCanvas(){
    while(canvas.firstChild){
        canvas.removeChild(canvas.firstChild);
    }
}
//cange color to rgb
function changeToRGB(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`
}
function changeColor(){
    if (colorRGB){
        return changeToRGB();
    }
    if(colorEraser){
        return "rgb(255, 255, 255)";
    }
    if(colorBlack==true){
        return "rgb(0,0,0)";
    }
}
function HighligthBox(){
    if (colorBlack){
        black.style.border = "solid orange 4px"
        rgb.style.border = "solid black 4px"
        eraser.style.border = "solid black 4px"
    }
    if (colorRGB){
        black.style.border = "solid black 4px"
        rgb.style.border = "solid orange 4px"
        eraser.style.border = "solid black 4px"
    }
    if (colorEraser){
        black.style.border = "solid black 4px"
        rgb.style.border = "solid black 4px"
        eraser.style.border = "solid orange 4px"
    }
}

//Prompts the user for custom dimension and accepts only valid values
function getCustomDimension(){
    let validChoice = false;
    while (!validChoice){
        canvasSize = parseInt(prompt("Choose a number between 4 and 100"));
        console.log(canvasSize)
        if (canvasSize<= 100 && canvasSize>0){
            validChoice = true;
        }
    }

}
//runtime
createCanvas();
//Changes canvasSize when icon clicked
image16.addEventListener("click",() => { clearCanvas(); canvasSize=16; createCanvas();});
image32.addEventListener("click",() => { clearCanvas(); canvasSize=32; createCanvas();});
image64.addEventListener("click",() => { clearCanvas(); canvasSize=64; createCanvas();});

//Ask user for custom dimension when button pressed and resize the canvas for valid values only
customDimension.addEventListener("click", () => {getCustomDimension(); clearCanvas(); createCanvas();});

//Add rgb mode when rgb button clicked
rgb.addEventListener("click", () => {colorRGB = true; colorEraser =false; colorBlack =false; HighligthBox()});

//Add eraser mode when eraser button clicked
eraser.addEventListener("click", () => {colorEraser = true; colorRGB = false; colorBlack =false; HighligthBox()});

//Add black mode when black button clicked
black.addEventListener("click",()=>{colorBlack = true; colorRGB=false; colorEraser = false;HighligthBox()});

//Reset the grid to all white
reset.addEventListener("click", () => {clearCanvas(); createCanvas();})

//Highligt dimension choice image when hovered
image16.addEventListener("mouseover",()=> {image16.style.cssText = "border: solid orange 4px";});
image16.addEventListener("mouseout",()=> {image16.style.cssText="border: solid #7F5A83 4px"});

image32.addEventListener("mouseover",()=> {image32.style.cssText = "border: solid orange 4px"});
image32.addEventListener("mouseout",()=> {image32.style.cssText="border: solid #7F5A83 4px"});

image64.addEventListener("mouseover",()=> {image64.style.cssText = "border: solid orange 4px"});
image64.addEventListener("mouseout",()=> {image64.style.cssText="border: solid #7F5A83 4px"});

customDimension.addEventListener("mouseover", ()=> {customDimension.style.border = "solid orange 4px"});
customDimension.addEventListener("mouseout", ()=> {customDimension.style.border = "solid black 4px"});

rgb.addEventListener("mouseover", ()=> {rgb.style.border = "solid orange 4px"});
rgb.addEventListener("mouseout", ()=> {if(!colorRGB){rgb.style.border = "solid black 4px"}});

black.addEventListener("mouseover", ()=> {black.style.border = "solid orange 4px"});
black.addEventListener("mouseout", ()=> {if(!colorBlack){black.style.border = "solid black 4px"}});

eraser.addEventListener("mouseover", ()=> {eraser.style.border = "solid orange 4px"});
eraser.addEventListener("mouseout", ()=> {if(!colorEraser){eraser.style.border = "solid black 4px"}});

reset.addEventListener("mouseover", ()=> {reset.style.border = "solid orange 4px"});
reset.addEventListener("mouseout", ()=> {reset.style.border = "solid black 4px"});
