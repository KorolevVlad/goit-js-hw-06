const currentVaueEl = document.querySelector('#font-size-control');

const currentValueFontSizeTextEl = document.querySelector('#text');

currentVaueEl.addEventListener('input', changeFontSizeText);
function changeFontSizeText() {
  currentValueFontSizeTextEl.style.fontSize = `${Number(
    currentVaueEl.value,
  )}px`;
}
