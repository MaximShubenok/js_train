"use strict";

const arr = [1, 2, 4, 6];
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);


arr.pop();
// Удаление последнего числа в массиве
arr.push(10);
// Добовление последнего числа в массиве

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// Перебор чисел в массиве

for (let value of arr) {
    console.log(value);
}
// Перебор чисел в массиве с помощю "value of"

arr.forEach(function(item, i, arr) {
    // Значение массива, порядковый номер, название массива
    console.log(`${i}: ${item} находится в массиве ${arr}`);
});

const str = prompt("", "");
const products = str.split(", ");
// Получает числа в массив через запятую
products.sort(compareNum);
// Сортирует полученные данные в алфавитном порядке
console.log(products.join("; "));
// Выводит числа из массива через точку с запятой

function compareNum(a, b) {
    return a - b;
}