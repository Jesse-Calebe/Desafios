// Functions
function buildGrid() {
  const container = document.getElementById("grid-container");

  function makeRows(cols, cells) {
    for (i = 0; i < cols; i++) {
      let col = document.createElement("div");
      col.className = "col";
      col.id = `col${i}`;

      for (j = 0; j < cells; j++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.id = `cell${i}x${j}`;
        cell.onclick = cellClick;

        col.appendChild(cell);
      }

      container.appendChild(col);
    }
  }

  makeRows(20, 20);
}

function cellClick(oEvent) {
  document.getElementById(oEvent.currentTarget.id).style.setProperty("background-color", "blue");
}

function handlePlayButton() {
  alert("handlePlayButton")
}

function handlePauseButton() {
  alert("handlePauseButton")
}

function handleClearButton() {
  alert("handleClearButton")
}

// Events
window.onload = buildGrid;
