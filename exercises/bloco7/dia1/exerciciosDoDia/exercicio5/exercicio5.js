const button = document.querySelector('button');
const counterContainer = document.querySelector('.counter-container');
let body = document.querySelector('body');


let clickCounts = 0;
function countClicks() {
clickCounts += 1;
counterContainer.innerHTML = clickCounts;
}

button.addEventListener('click', countClicks);
