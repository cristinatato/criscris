'use strict';

const years = 5;
const firstYear = 15;
const secondYear = 9;
let age = 0;

if (years === 1) {
    age = firstYear;
}
else if (years ===2) {
    age = firstYear + secondYear;
}
else if (years >= 3) {
    age = firstYear + secondYear + ((years -2) * 5);
}
console.log (age);
