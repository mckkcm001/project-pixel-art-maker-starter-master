function makeGrid() {
  const rows = document.getElementById("inputHeight").value;
  const cols = document.getElementById("inputWidth").value;

  let color = '#000000';
  // reset default color for color picker
  document.getElementById("colorPicker").value = color;
  // handles color changes while color picker is open
  document.getElementById("colorPicker").addEventListener("input", function(e){
    color = e.target.value;
  },false);
  // handles color change when color picker closes
  document.getElementById("colorPicker").addEventListener("change", function(e){
    color = e.target.value;
  },false);

  // build HTML string for grid
  grid = '';
  for (let ri=0; ri<rows; ri++){
    grid += '<tr>'
    for (let ci=0; ci<cols; ci++){
      grid += '<td id="cell'+ri+'-'+ci+'"></td>'
    }
    grid += '</tr>'
  }
  // insert grid into table element
  document.getElementById("pixelCanvas").innerHTML = grid;

  //add listener for clicks on table
  document.getElementById("pixelCanvas").addEventListener("click", function(e){
    // safeguard against erroneous events
    if (e.target.id.startsWith('cell')){
      document.getElementById(e.target.id).style.backgroundColor = color;
    }
  });
}
// When size is submitted by the user, call makeGrid()
document.addEventListener("submit", function(e){
  //prevent page refresh
  e.preventDefault();
  makeGrid();
});
