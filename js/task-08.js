const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  const sendOnServer = {
    email,
    password,
  };

  if (email === '' || password === '') {
    alert('Fill in all fields of the form');
  }

  form.reset();
  console.log(sendOnServer);
}
