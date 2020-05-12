function(a, b){
	let numerics = [1, 2, 3, 4, 5, 6, 7, 8];
let letter = ["a", "b", "c", "d", "e", "f", "g", "h"];

let table = [];
for (let i = 0; i < 8; i++) {
  let row = [];
  for (let j = 0; j < 8; j++) {
    row.push(`${letter[i]}${numerics[j]}`);
  }
  table.push(row);
}
const findPositionOfElement = element => {
  let obj = null;
  table.forEach((row, rowIndex) => {
    if (row.indexOf(element) !== -1) {
      obj = {
        indexLetter: rowIndex,
        indexNumber: row.indexOf(element)
      };
    }
  });
  return obj;
};
const isMoveOnLine = (from, to) => {
  const indexFrom = findPositionOfElement(from);
  const indexTo = findPositionOfElement(to);
  if (
    indexFrom.indexLetter === indexTo.indexLetter &&
    indexFrom.indexNumber === indexTo.indexNumber
  ) {
    return false;
  }
  if (indexFrom.indexLetter == indexTo.indexLetter) {
    return true;
  }
  if (indexFrom.indexNumber == indexTo.indexNumber) {
    return true;
  }
  console.log(indexFrom, indexTo);
  if (
    indexFrom.indexLetter === indexFrom.indexNumber &&
    indexTo.indexLetter === indexTo.indexNumber
  ) {
    return true;
  }
  if (indexFrom.indexLetter - indexTo.indexNumber == indexTo.indexLetter) {
    return true;
  }
  return false;
};
return isMoveOnLine(a, b);

}
	