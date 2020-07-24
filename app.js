// Selectors
const grid = document.querySelector(".grid");

// Default sketchpad
makeRows(16, 16);

const btn = document.querySelector(".controls");
const resetBtn = document.querySelector("body");
let gridItem = document.querySelectorAll(".grid-item");


// Color picker
let paintColor = "#333";


// Create grid with rows * cols parameters
function makeRows(rows, cols) {
   grid.style.setProperty('--grid-rows', rows);
   grid.style.setProperty('--grid-cols', cols);

  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    grid.appendChild(cell).className = "grid-item";
  };
};


// Remove grid elements
function removeGrid() {
  gridItem = document.querySelectorAll(".grid-item");

  for (let i = 0; i < gridItem.length; i++)
  gridItem[i].remove();
}


// Create new sketchpad
function newSketchpad(){
  let gridSize = prompt("Please enter a size of grid (1 - 64)");

  if (gridSize == null){
    resetGrid();
  }
  else if (isNaN(gridSize) || gridSize < 1 || gridSize > 64){
    newSketchpad();
  } 
  else {
    removeGrid();
    makeRows(gridSize, gridSize);
  }
}


// Function reset grid
function resetGrid(){
  gridItem = document.querySelectorAll(".grid-item");
  gridItem.forEach(function(currentValue, currentIndex, listObj) {
  currentValue.style["background-color"] = "#fff";
  });
}


// Event listener: Sketchpad controls
btn.addEventListener('click', (e) => {
  if (e.srcElement.id === "btn-sketchpad"){
    newSketchpad();
  } else if (e.srcElement.id === "btn-color"){
    changePaintColor();
  }
});


function changePaintColor(){
  paintColor = "#" + Math.floor(Math.random()*16777215).toString(16);
}



// Event listener: Paint the grid
grid.addEventListener('mousemove', (e) => {
  if(e.srcElement.className === "grid-item") {
    e.srcElement.style["background-color"] = paintColor;
  }
});


// Event listener: Grid reset
resetBtn.addEventListener('keydown', (e) => {
  if (e.keyCode === 32) {
      resetGrid();
  }
});




