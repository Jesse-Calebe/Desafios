// Constants
const iCols = 21;
const iCells = 21;

// Variables
var oInterval;

// Functions
function handleOnLoad() {
  buildGrid();
}

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

  makeRows(iCols, iCells);
}

function cellClick(oEvent) {
  let currentColor = document
    .getElementById(oEvent.currentTarget.id)
    .style.getPropertyValue("background-color");

  if (currentColor == "blue") {
    document
      .getElementById(oEvent.currentTarget.id)
      .style.setProperty("background-color", "aliceblue");
  } else {
    document
      .getElementById(oEvent.currentTarget.id)
      .style.setProperty("background-color", "blue");
  }
}

function handlePlayButton(oEvent) {
  oInterval = setInterval(Play, 1000);
}

function handlePauseButton() {
  console.log("Pause");
  clearInterval(oInterval);
}

function handleClearButton() {
  let oGrid = document.getElementById("grid-container");

  for (col = 0; col < oGrid.childNodes.length; col++) {
    for (cell = 0; cell < oGrid.childNodes[col].childNodes.length; cell++) {
      let cellId = oGrid.childNodes[col].childNodes[cell].id;

      document
        .getElementById(cellId)
        .style.setProperty("background-color", "aliceblue");
    }
  }
}

function Play() {
  console.log("Play");

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

      let quantVizinhos = 0;
      if (esquerdaVivo) {
        quantVizinhos += 1;
      }

      if (direitaVivo) {
        quantVizinhos += 1;
      }

      if (cimaVivo) {
        quantVizinhos += 1;
      }

      if (baixoVivo) {
        quantVizinhos += 1;
      }

      if (cellColor === "green" || cellColor === "blue") {
        if (quantVizinhos < 2) {
          document
            .getElementById(cellId)
            .style.setProperty("background-color", "aliceblue");
        }

        if (quantVizinhos > 3) {
          document
            .getElementById(cellId)
            .style.setProperty("background-color", "aliceblue");
        }
      } else {
        if (quantVizinhos === 3) {
          document
            .getElementById(cellId)
            .style.setProperty("background-color", "green");
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

  coord[0] = parseInt(coord[0]);
  coord[1] = parseInt(coord[1]);

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

  if (coord[0] == iCols - 1) {
    return false;
  }

  coord[0] = parseInt(coord[0]);
  coord[1] = parseInt(coord[1]);

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

  coord[0] = parseInt(coord[0]);
  coord[1] = parseInt(coord[1]);

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

  if (coord[1] == iCells - 1) {
    return false;
  }

  coord[0] = parseInt(coord[0]);
  coord[1] = parseInt(coord[1]);

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

// Events
window.onload = handleOnLoad;
