Определите, пуст ли объект
ЗАДАЧА РЕШЕНА
Перейти к своему коду
Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть 
одно свойство есть.

Работать должно так:

function isEmpty(obj) {
  // ваш код...
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false
