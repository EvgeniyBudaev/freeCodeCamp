let inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';

function getMinMax(str) {
  let arr = str.match(/(-?\d+(\.\d+)?)/g).map(v => +v);

  let maxNumber = Math.max(...arr);
  let minNumber = Math.min(...arr);
  return {
    'max': maxNumber,
    'min': minNumber
  }
}

let result = getMinMax(inputData)
console.log(result)
