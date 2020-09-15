let user1 = {
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 21,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let user2 = {
  "balance": "$1,490.15",
  "picture": "https://placehold.it/32x32",
  "age": 31,
  "name": "Duncan Randall",
  "gender": "male",
  "greeting": "Hello, Duncan Randall! You have 7 unread messages.",
  "favouriteFruit": "orange"
};

let user3 = {
  "balance": "$2,500.00",
  "picture": "https://placehold.it/32x32",
  "age": 71,
  "name": "Nick",
  "gender": "male",
  "greeting": "Hello, Nick! You have 7 unread messages.",
  "favouriteFruit": "apple"
};

let users = [user1, user2, user3]

function showSalary(users, age) {
  let arr = users
    .filter(user => user.age <= age)
    .map(obj => obj.name+', '+obj.balance)

  let resultArray = arr.map(el => el)

  return resultArray.join("\n")
}

let result = showSalary(users, 60)
console.log('result: ', result)
