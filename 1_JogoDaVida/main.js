// Constants
const iRows = 21;
const iCells = 21;

// Variables
var oInterval;

// Functions
function handleOnLoad() {
  buildGrid();
}

function buildGrid() {
  const oContainer = document.getElementById("grid-container");

  for (i = 0; i < iRows; i++) {
    let row = document.createElement("div");
    row.className = "row";
    row.id = `row${i}`;

    for (j = 0; j < iCells; j++) {
      let cell = document.createElement("div");
      cell.className = "cell";
      cell.id = `cell-${i}x${j}`;
      cell.onclick = cellClick;

      row.appendChild(cell);
    }

    oContainer.appendChild(row);
  }
}

function getColorFromId(sId) {
  return document
    .getElementById(sId)
    .style.getPropertyValue("background-color");
}

function setColorFromId(sId, sColor) {
  document.getElementById(sId).style.setProperty("background-color", sColor);
}

function cellClick(oEvent) {
  let currentColor = getColorFromId(oEvent.currentTarget.id);

  if (currentColor == "blue") {
    setColorFromId(oEvent.currentTarget.id, "aliceblue");
  } else {
    setColorFromId(oEvent.currentTarget.id, "blue");
  }
}

function handlePlayButton(oEvent) {
  oInterval = setInterval(play, 1000);
}

function handlePauseButton() {
  console.log("Pause");
  clearInterval(oInterval);
}

function handleClearButton() {
  let oGrid = document.getElementById("grid-container");

  for (row = 0; row < oGrid.childNodes.length; row++) {
    for (cell = 0; cell < oGrid.childNodes[row].childNodes.length; cell++) {
      setColorFromId(oGrid.childNodes[row].childNodes[cell].id, "aliceblue");
    }
  }
}

function play() {
  console.log("Play");

  let oGrid = document.getElementById("grid-container");

  for (row = 0; row < oGrid.childNodes.length; row++) {
    for (cell = 0; cell < oGrid.childNodes[row].childNodes.length; cell++) {
      let sCurrentId = oGrid.childNodes[row].childNodes[cell].id;

      let iQuantVizinhos = verificaVizinhos(sCurrentId);

      if (estaViva(sCurrentId)) {
        if (iQuantVizinhos < 2 || iQuantVizinhos > 3) {
          setColorFromId(sCurrentId, "aliceblue");
        }
      } else {
        if (iQuantVizinhos === 3) {
          setColorFromId(sCurrentId, "blue");
        }
      }
    }
  }
}

function verificaVizinhos(sId) {
  return 0;
}

function estaViva(sId) {
  if (getColorFromId(sId) === "blue") {
    return true;
  } else {
    return false;
  }
}

// Events
window.onload = handleOnLoad;
