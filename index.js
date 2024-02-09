// Create grid layout
var container = document.querySelector(".container");
for (var i=0; i<256; i++) {
    var div = document.createElement("div");
    div.classList.add("grid");
    container.appendChild(div);
}

// Hover effect event listener
var grids = document.querySelectorAll(".grid");
grids.forEach(grid => {
    grid.addEventListener("mouseover", (e) => {
        e.target.classList.add("hover");
    })
    grid.addEventListener("mouseout", (e) => {
        e.target.classList.remove("hover");
    })
});

// TODO: Add a input field to take user's specified dimensions
// TODO: Find out how to dynamically set the width (and height) of the grid boxes based on user's specified dimensions
