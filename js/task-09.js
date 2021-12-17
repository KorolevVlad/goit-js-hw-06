function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnChangeColor = document.querySelector('.change-color');
btnChangeColor.addEventListener('click', changeColor);

const bodyColor = document.querySelector('body');

const valueColor = document.querySelector('.color');
function changeColor() {
  const colorValue = getRandomHexColor();
  valueColor.textContent = colorValue;

  bodyColor.style.backgroundColor = getRandomHexColor();
}
