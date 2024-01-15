const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const reset = document.querySelector('#reset');
const counter = document.querySelector('span');

add.addEventListener('click', (e) => {
    counter.innerText = Number(counter.innerText) + 1;
});

subtract.addEventListener('click', (e) => {
    counter.innerText = Number(counter.innerText) - 1;
});

reset.addEventListener('click', (e) => {
    counter.innerText = 0;
});