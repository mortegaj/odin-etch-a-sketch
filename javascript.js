const container = document.querySelector("#container");

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
