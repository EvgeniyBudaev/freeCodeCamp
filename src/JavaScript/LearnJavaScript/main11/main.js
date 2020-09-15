/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str){
  let newArr = []
  let arr = str.split('-')
  newArr.push(arr[0])
  for (let i=1; i<arr.length; i++) {
    let cap = capitalize(arr[i])
    newArr.push(cap)
  }
  let res = newArr.join('')
  console.log(res)
}

function capitalize(string) {
  if (typeof string !== 'string') {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}

camelize('background-color')
camelize('list-style-image')
camelize('-webkit-transition')
