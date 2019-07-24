'use strict';

const nombre = document.querySelector ('.input');
const btn = document.querySelector ('.button');

function writeSomething () {
    const nueva = nombre.value;
    console.log (`Hola, ${nueva}`);
}
btn.addEventListener ('click', writeSomething);