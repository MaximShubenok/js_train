'use strict';

function learnJS(lang, callback) {
    // lang - первая функция, callback - вторая функция
    console.log(`Я учу ${lang}`);
    callback();
}

learnJS('JavaScript', function() {
    console.log('Я прошёл этот урок');
});