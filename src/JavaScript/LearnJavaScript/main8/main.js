let calculator = {
  // ваш код
  read(a,b) {
    this.a = a;
    this.b = b;
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  }
};

calculator.read(1,2)
console.log(calculator.sum(1,2))
console.log(calculator.mul(1,2))
console.log('calculator: ', calculator)

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
