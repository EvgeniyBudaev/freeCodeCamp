const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line
  let countOnline = 0;
  for (let user in usersObj) {
    console.log(usersObj[user])
    usersObj[user].online === true ? ++countOnline : null
  }

  return countOnline
  // Only change code above this line
}

console.log(countOnline(users))


