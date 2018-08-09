// todo
const button = document.getElementById("show-hint")
console.log(button)

button.addEventListener('click', () => {
  const hint = document.querySelector(".hint")
  hint.classList.toggle("active")
})



// 1. Select all tiles
const tiles = document.querySelectorAll("td")
// 2. For each tile
tiles.forEach((tile) => {
// 3. Listen to the click event
  tile.addEventListener('click', (event) => {
    if (canMove(event.target)){
      moveTile(event.target)
      checkIfPlayerWins()
    }

  })
})
// 4. If it has an empty neighbor
// 5. Swap the tile and the empty space
// 6. Check if player wins
const moveTile = (tile) => {
  const emptyTile = document.querySelector(".empty");
  emptyTile.innerText = tile.innerText;
  tile.innerText = ""
  emptyTile.classList.remove("empty")
  tile.classList.add("empty")
}

// FUNCTION to check if there is an empty cell around the clicked tile
const canMove = (tile) => {
  const tileColumn = tile.cellIndex;
  const tileRow = tile.parentElement.rowIndex;
  const emptyTile = document.querySelector('.empty');
  const emptyTileColumn = emptyTile.cellIndex;
  const emptyTileRow = emptyTile.parentElement.rowIndex;

  return (tileColumn === emptyTileColumn && tileRow === emptyTileRow + 1) || // Same column, empty is row above
  (tileColumn === emptyTileColumn && tileRow === emptyTileRow - 1) || // Same column, empty is row below
  (tileRow === emptyTileRow && tileColumn === emptyTileColumn + 1) || // Same row, empty is next column
  (tileRow === emptyTileRow && tileColumn === emptyTileColumn - 1) // Same row, empty is previous column
}

// FUNCTION to check if the player has one
const checkIfPlayerWins = () => {
  const tilesOrder = Array.from(document.querySelectorAll('td')).map(e => { return parseInt(e.innerHTML) })
  if (tilesOrder.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN") {
    alert("You win!")
  } else {
    console.log("You haven't won yet")
  }
}
