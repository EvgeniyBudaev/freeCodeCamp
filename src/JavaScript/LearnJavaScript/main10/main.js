/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  // ваш код...
  let result = arr.filter(item => (item >= a && item <= b) || (item <= a && item >= b))
  return result
  console.log('result: ', result)
}

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // [3,1] (совпадающие значения)
console.log( arr ); // [5,3,8,1] (без изменений)
