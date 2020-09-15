let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}

function sumSalary(salaries) {
  // ваш код...
  const total = [];
  let result;

  for (let value of Object.values(salaries)) {
      if (typeof value === 'number') {
      total.push(value)
      result = total.reduce((sum, current) => sum + current, 0)
    } else if (total.length === 0) {
      result = 0
    }
  }

  return result
}

const res = sumSalary(salaries)
console.log('res', res)

