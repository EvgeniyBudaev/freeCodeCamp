const cars = {
  bmw: '7',
  audi: 'q7',
  mersedes: {
    a: 7,
    b: 8
  },
  tayota: [
    'camry',
    'corolla'
  ]
}

const fetch = (obj) => {
  const res = Object.keys(obj)
    .forEach(key => console.log(key))
  return res
}

console.log(fetch(cars))
