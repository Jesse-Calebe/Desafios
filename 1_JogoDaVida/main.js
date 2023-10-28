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
        cell.id = `cell-${i}x${j}`;
        cell.onclick = cellClick;

        col.appendChild(cell);
      }

      container.appendChild(col);
    }
  }

  makeRows(20, 20);
}

function cellClick(oEvent) {
  document
    .getElementById(oEvent.currentTarget.id)
    .style.setProperty("background-color", "blue");
}

function handlePlayButton() {
  let oGrid = document.getElementById("grid-container");

  for (col = 0; col < oGrid.childNodes.length; col++) {
    for (cell = 0; cell < oGrid.childNodes[col].childNodes.length; cell++) {
      let cellId = oGrid.childNodes[col].childNodes[cell].id;
      let cellColor = document
        .getElementById(cellId)
        .style.getPropertyValue("background-color");

      let coord = cellId.split("-")[1].split("x");

      let esquerdaVivo = vizinhoEsquerda(coord);
      let direitaVivo = vizinhoDireita(coord);
      let cimaVivo = vizinhoCima(coord);
      let baixoVivo = vizinhoBaixo(coord);

      if (cellColor === "green" || cellColor === "blue") {
        if (!esquerdaVivo && !direitaVivo && !cimaVivo && !baixoVivo) {
          document
            .getElementById(cellId)
            .style.setProperty("background-color", "aliceblue");
        }
      }
    }
  }
}

function vizinhoEsquerda(coord) {
  let oGrid = document.getElementById("grid-container");

  if (coord[0] == "0") {
    return false;
  }

  coord[0] = parseInt(coord[0])
  coord[1] = parseInt(coord[1])

  let color =
    oGrid.childNodes[coord[0] - 1].childNodes[coord[1]].style.getPropertyValue(
      "background-color"
    );

  if (color === "green" || color === "blue") {
    return true;
  } else {
    return false;
  }
}

function vizinhoDireita(coord) {
  let oGrid = document.getElementById("grid-container");

  if (coord[0] == "19") {
    return false;
  }

  coord[0] = parseInt(coord[0])
  coord[1] = parseInt(coord[1])

  let color =
    oGrid.childNodes[coord[0] + 1].childNodes[coord[1]].style.getPropertyValue(
      "background-color"
    );

  if (color === "green" || color === "blue") {
    return true;
  } else {
    return false;
  }
}

function vizinhoCima(coord) {
  let oGrid = document.getElementById("grid-container");

  if (coord[1] == "0") {
    return false;
  }

  coord[0] = parseInt(coord[0])
  coord[1] = parseInt(coord[1])

  let color =
    oGrid.childNodes[coord[0]].childNodes[coord[1] - 1].style.getPropertyValue(
      "background-color"
    );

  if (color === "green" || color === "blue") {
    return true;
  } else {
    return false;
  }
}

function vizinhoBaixo(coord) {
  let oGrid = document.getElementById("grid-container");

  if (coord[1] == "19") {
    return false;
  }

  coord[0] = parseInt(coord[0])
  coord[1] = parseInt(coord[1])

  let color =
    oGrid.childNodes[coord[0]].childNodes[coord[1] + 1].style.getPropertyValue(
      "background-color"
    );

  if (color === "green" || color === "blue") {
    return true;
  } else {
    return false;
  }
}

function handlePauseButton() {
  alert("handlePauseButton");
}

function handleClearButton() {
  alert("handleClearButton");
}

// Events
window.onload = buildGrid;
