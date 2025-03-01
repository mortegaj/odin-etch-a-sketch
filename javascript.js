const container = document.querySelector("#container");
const gridSizeBtn = document.querySelector("#grid-size-btn");

function createGrid (height, width) {
    //Create "height" DIVs, one per line
    for (let i = 0; i < height; i++ ) {
        const line = document.createElement("div");
        line.classList.add("line");
        
        //Create "width" DIVs within the line, one per square
        for (let j = 0; j < width; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            line.appendChild(square);
        }
        
        container.appendChild(line);
    }
}

createGrid (16,16);

container.addEventListener('mouseover', (e) => {
    let target = e.target;
    if (target.getAttribute("id") != "container") {
        target.classList.add("square-on");
    }
});

gridSizeBtn.addEventListener('click', () => {
    let gridSize = prompt ("Enter a new grid size");
    if (gridSize == null) return;
    if (gridSize <= 100) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        createGrid(gridSize,gridSize);
    } else {
        alert ("Maximum size is 100");
    }
})
