// Functions
function buildGrid() {
  const container = document.getElementById("grid-container");

  function makeRows(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);

    for (i = 0; i < rows; i++) {
      let row = document.createElement("div");
      row.className = 'row';

      for (j = 0; j < cols; j++) {
        let col = document.createElement("div");
        col.className = 'col'

        row.appendChild(col);
      }

      container.appendChild(row);
    }
  }

  makeRows(20, 20);
}


// Events
window.onload = buildGrid;
