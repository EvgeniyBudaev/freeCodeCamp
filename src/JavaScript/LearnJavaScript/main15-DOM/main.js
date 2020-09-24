/**
 * @param {HTMLTableElement} table
 * @return {void}
 */

function makeDiagonalRed(table) {
  console.log('table:', table)

  for (let tr of table.rows) {
    let index = tr.rowIndex;
    console.log('index:', index)
    console.log('tr:', tr)
    console.log('tr.cells:', tr.cells)
    tr.cells[index].style.backgroundColor = "red";
  }
}
