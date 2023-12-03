let gridSize = 16;

const canvas = document.querySelector("#canvas");

const btn = document.querySelector("#change-size-btn");
btn.addEventListener("click", changeGridSize);

const resetCanvasBtn = document.querySelector("#reset-canvas-btn");
resetCanvasBtn.addEventListener("click", () => {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    drawCanvas();
})


const span = document.querySelector("#number-squares");

drawCanvas();

function drawCanvas() {

    let row;
    let square;
    
    for (let i=0; i<gridSize; i++) {
        row = document.createElement("div");
        row.classList.add("row");
        canvas.appendChild(row);

        for (let j=0; j<gridSize; j++) {
            square = document.createElement("div");
            square.classList.add("square");
            square.style.backgroundColor = "white";
            
            row.appendChild(square);

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

        while (canvas.firstChild) {
            canvas.removeChild(canvas.firstChild);
        }

        drawCanvas();

    } else {
        alert ("max value = 100");
    }
    
}
