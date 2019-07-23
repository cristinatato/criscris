'use strict';

function getEl (elemento) {
    document.querySelector(elemento).innerHTML;

}

const elemento1 = getEl('.title');
console.log(elemento1);