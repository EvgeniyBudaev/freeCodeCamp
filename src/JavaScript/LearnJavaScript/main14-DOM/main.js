/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
let friends = [
  {
    firstName: 'Artsiom',
    lastName: 'Mezin'
  },
  {
    firstName: 'Ilia',
    lastName: 'Kantor'
  },
  {
    firstName: 'Christopher',
    lastName: 'Michael'
  }
];

function makeFriendsList(friends) {
  // ваш код...
  let html
  const ul = document.createElement('ul')

  const li = friends.map(friend => html = makeFriend(friend))
  ul.insertAdjacentHTML('beforeend', li.join(''))
  return ul
}

function makeFriend({firstName, lastName}) {
  return `
  <li>${firstName} ${lastName}</li>
  `
}

const result = makeFriendsList(friends)
console.log('result:', result)
