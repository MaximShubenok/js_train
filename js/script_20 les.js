"use strict";

// const obj = new Object();

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
    // Мы можем создавать методы вручную
};

options.makeTest();
// Запуск метода

const {border, bg} = options.colors;
// ДЕструктуризация объекта
console.log(border);

console.log(Object.keys(options).length);
// Выводит количество ключей в объекте через массив. А это значит, что теперь мы можем приписать свойство length
// ЭТО НУЖНО ЗАПОМНИТЬ, МОЖЕТ СИЛЬНО УСКОРИТЬ ВРЕМЯ!!!



// console.log(options.name);
// // Считать то, что находится в объекте

// delete options.name;
// // Удалить в options - name

// console.log(options);


for (let key in options) {
// создаём ключ(key) и говорим, что мы будем копаться внутри options
// Цикл будет работать столько раз, сколько свойств находится внутри этого объекта
    if (typeof(options[key]) == 'object') {
        // Проверяем тип объекта. Если он вложенный, то в нём делаем ещё одну итерацию проверки ключей
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        // options[key] - показывает само значение ключа
    }
}


