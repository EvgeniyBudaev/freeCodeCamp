function truncate(str, maxlength) {
  // ваш код...
  if (str.length > maxlength) {
    str = str.slice(0, maxlength) + '…'
    return str
  }

  return str
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20))
console.log(truncate('Всем привет!', 20))
console.log(truncate('123456789', 5))
