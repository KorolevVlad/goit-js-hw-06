function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');

const createBoxBtn = document.querySelector('button[data-create]');

const destroyBoxBtn = document.querySelector('button[data-destroy]');

const boxes = document.querySelector('#boxes');
input.addEventListener('input', inputChange);

function inputChange(el) {
  input.setAttribute('count', Number(el.currentTarget.value));
}

createBoxBtn.addEventListener('click', createbox);

function createbox() {
  let firstBoxSize = 30;
  let countBox = Number(input.getAttribute('count'));
  for (let i = 0; i < countBox; i++) {
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
