/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  console.log('[name]: ', name)
  // ваш код...
  let fixedName = name.split(' ').join('').trim()
  console.log('[fixedName]: ', fixedName)
  console.log('[fixedName.length]: ', fixedName.length)
  if (!name || name === '' || name.includes(' ') || fixedName.length < 4) {
    return
  }

  return fixedName
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}


console.log(sayHello())
