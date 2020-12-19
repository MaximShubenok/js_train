"use strict";


const str = "test";

console.log(str.toUpperCase());
console.log(str.toLowerCase());
// Возвращает новое значение(все заглавные), но оно не изменяет строку на прямую!!!!!
console.log(str);

const fruit = "Some Fruit";

console.log(fruit.indexOf("F"));
// Отсчёт числа начинается с 0, а если такого числа нет, то выводит -1

const logg = "Hello world";

console.log(logg.slice(4, 7));
// Обрезает слово начиная с нуля. Первой цифрой берёт букву, а второй цифрой нет

console.log(logg.substring(4, 7));
// Похожее значение, только можно менять местами числа и нельзя использовать отрицательные значения

console.log(logg.substr(6, 5));
// Обрезает текст, но первое число - это первая позиция, а второе число - это количество букв, которые нужно оставить


const num = 12.2;
console.log(Math.round(num));
// Округление к ближайшему целому

const test = "12.2px";
console.log(parseInt(test));
// Строка обрезается до целого числа и приводит в числовой тип данных
console.log(parseFloat(test));
//  Берёт число или строку и возвращает в десятичном формате. Возвращает значение с плавающей точкой