const xSize = 16;
const ySize = 16;

const container = document.querySelector("#container");
let square;

for (let i=0; i<xSize; i++) {
    for (let j=0; j<ySize; j++) {
        square = document.createElement("div");
        square.classList.add("square");
        square.textContent = i+"."+j;
        container.appendChild(square);
    }
}