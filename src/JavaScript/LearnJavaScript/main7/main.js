let schedule = {};
schedule["8:30"] = "подъём";

function isEmpty(obj) {
  // ваш код...
  for (let key in obj) {
    return false;
  }
  return true;
}

console.log(isEmpty(schedule))
