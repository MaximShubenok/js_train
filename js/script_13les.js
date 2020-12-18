"use strict";

// if (4 == 4) {
//     console.log("Ok");
// } else if (5) {
//     console.log("no");
// } else {
//     console.log("f");
// }

// (num === 50) ? console.log('Ok!') : console.log('Error!');

const num = 51;

switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('В точку');
        break;
    default:
        console.log('Не в этот раз');
        break;
}