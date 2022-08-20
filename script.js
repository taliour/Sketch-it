const canvas = document.querySelector(".canvas")

//variables and arrays
let canvasSize = 16;
let pixelSize = 640/canvasSize;
//functions

function changeColor(pixel){
    console.log("YESS");
}

for (j=0; j<canvasSize*canvasSize; j++){

    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.width = `${pixelSize}px`;
    pixel.style.height = `${pixelSize}px`;
    canvas.appendChild(pixel);
    pixel.addEventListener('mouseover',()=> {pixel.style.cssText = "background-color: black;"});
}
