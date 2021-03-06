function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');

const createBoxBtn = document.querySelector('button[data-create]');

const destroyBoxBtn = document.querySelector('button[data-destroy]');

const boxes = document.querySelector('#boxes');
input.addEventListener('input', inputChange);

function inputChange(event) {
  input.setAttribute('count', Number(event.currentTarget.value));
}

createBoxBtn.addEventListener('click', createbox);

let firstBoxSize = 30;

function createbox() {
  let countBox = Number(input.getAttribute('count'));
  for (let i = 0; i < countBox; i += 1) {
    firstBoxSize += 10;
    const nextBox = document.createElement('div');
    nextBox.style.background = getRandomHexColor();
    nextBox.style.height = firstBoxSize + 'px';
    nextBox.style.width = firstBoxSize + 'px';
    nextBox.style.margin = '10px';
    nextBox.classList.add('new-box');
    boxes.style.display = 'flex';
    boxes.style.flexWrap = 'wrap';
    boxes.style.alignItems = 'center';
    boxes.append(nextBox);
  }
}

destroyBoxBtn.addEventListener('click', destroyBox);
function destroyBox() {
  boxes.innerHTML = '';
}
