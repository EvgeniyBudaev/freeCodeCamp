// Only change code below this line
class Thermostat {
  constructor(temperature) {
    this._temperature = temperature
  }

  get temperature() {
    return 5/9 * (this._temperature-32); // return in C
  }

  set temperature(tempCels) {
    this._temperature = tempCels * 9 / 5 + 32; // convert C -> F
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
console.log('[thermos]', thermos)
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
