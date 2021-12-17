const inputTextEl = document.querySelector('#validation-input');

inputTextEl.addEventListener('blur', onIputBlur);

const changeColorInput = inputTextEl.classList;

function onIputBlur() {
  if (inputTextEl.value.length === Number(inputTextEl.dataset.length)) {
    changeColorInput.add('valid');
    changeColorInput.remove('invalid');
  } else {
    changeColorInput.add('invalid');
    changeColorInput.remove('valid');
  }
}
