'use script';

const btn = document.querySelector('.button');
const text = document.querySelector('.text');

function writeSomething (event) {
    const frase = 'Mi primer click, ¡ole yo y la mujer que me parió!';

    const nueva = event.currentTarget.innerHTML;
    text.innerHTML = frase;
}

btn.addEventListener('click',writeSomething);