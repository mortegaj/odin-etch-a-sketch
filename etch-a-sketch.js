let gridSize = 16;

const container = document.querySelector("#container");
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight

const btn = document.querySelector("#change-size-btn");
btn.addEventListener("click", changeGridSize);

const span = document.querySelector("#number-squares");

drawCanvas();

function drawCanvas() {
    const squareWidth = containerWidth / gridSize;
    const squareHeight = containerHeight / gridSize;
    let square;
    
    for (let i=0; i<gridSize; i++) {
        for (let j=0; j<gridSize; j++) {
            square = document.createElement("div");
            square.classList.add("square");
            square.style.cssText = "width: " + squareWidth + "px; height: " + squareHeight + "px;"; 
            
            container.appendChild(square);

            square.addEventListener("mousedown", paintSquare);
            square.addEventListener("mouseover", paintSquare);
        }
    }
}

function paintSquare(e) {
    if (e.buttons) e.target.style.backgroundColor = "red";
}

function changeGridSize () {
    const newGridSize = parseInt(prompt("Choose grid size: "));
    if (newGridSize <= 100) {
        gridSize = newGridSize;
        span.textContent = gridSize;

        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        drawCanvas();

    } else {
        alert ("max value = 100");
    }
    
}
