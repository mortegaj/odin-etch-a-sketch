const gridSize = 4;

const container = document.querySelector("#container");
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight
console.log(`Contanineer Size - Width: ${containerWidth} Height: ${containerHeight}`);

const squareWidth = containerWidth / gridSize;
const squareHeight = containerHeight / gridSize;
console.log(`Sqare Size - Width: ${squareWidth} Height: ${squareHeight}`);

for (let i=0; i<gridSize; i++) {
    for (let j=0; j<gridSize; j++) {
        square = document.createElement("div");
        square.classList.add("square");
        square.style.cssText = "width: " + squareWidth + "px; height: " + squareHeight + "px;"; 
        
        container.appendChild(square);
    }
}