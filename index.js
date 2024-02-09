// Create grid layout
function createGrid(rows) {
    var container = document.querySelector(".container");
    container.innerHTML = "";
    var iteration = rows * rows;
    var width = ((100/rows)) + "vw";
    var border = "1px solid black"
    for (var i=0; i<iteration; i++) {
        var div = document.createElement("div");
        div.style.setProperty("width", width);
        div.style.setProperty("height", width);
        div.style.setProperty("border", border); 
        container.appendChild(div);
    }
}

window.onload = () => {
    createGrid(16);

    // Hover effect event listener
    var grids = document.querySelectorAll("div");
    grids.forEach(grid => {
        grid.addEventListener("mouseover", (e) => {
            e.target.classList.add("hover");
        })
        grid.addEventListener("mouseout", (e) => {
            e.target.classList.remove("hover");
        })
    });

    // Add a input field to take user's specified dimensions
    var button = document.querySelector("button");
    button.addEventListener("click", () => {
        var input = document.querySelector("input");
        var rows = input.value;
        createGrid(rows);
    })
}