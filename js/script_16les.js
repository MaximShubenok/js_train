"use strict";

function showFirstMessage(text) {
    console.log(text);
}
// Создание функции
// В идеале название функции это - глагол с припиской того, над чем выполняется действие

showFirstMessage("Hello");
// Объявление функции

function calc(a, b) {
    return(a + b);
    // После return ничего работать не будет
}

console.log(calc(4, 3));
console.log(calc(14, 3));
console.log(calc(2, 8));

function ret() {
    let num = 50;


    // 
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("Hello");
};

logger();

const calcc = (a, b) => a + b;
// Создаём переменную, в которую помещаем функцию. В круглые скобки помещаем аргументы

const calc1 = (a, b) => {
    console.log('1');
    return (a + b);
};
// Более классический вариант