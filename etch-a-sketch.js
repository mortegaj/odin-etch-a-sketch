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
            square.style.backgroundColor = "white";
            
            container.appendChild(square);

            square.addEventListener("mousedown", paintSquare);
            square.addEventListener("mouseover", paintSquare);
        }
    }
}

function paintSquare(e) {
    if (e.buttons) {
        if (e.target.style.backgroundColor === "white") {
            e.target.style.backgroundColor = "black";
            e.target.style.opacity = 0.1;
        } else {
            if (e.target.style.opacity < 1) e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;
        }
    }
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
