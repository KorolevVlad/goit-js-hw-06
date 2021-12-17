const newFormEl = document.querySelector('#name-input');
const newFormOutputEl = document.querySelector('#name-output');

newFormEl.addEventListener('input', onInputChange);
function onInputChange(event) {
  if (event.currentTarget.value !== ``) {
    newFormOutputEl.textContent = event.currentTarget.value;
  } else newFormOutputEl.textContent = 'Anonymous';
}
