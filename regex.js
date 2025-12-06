const form = document.getElementById('myForm');
  const emailInput = document.getElementById('email');
  const msg = document.getElementById('msg');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateEmail(emailInput.value.trim())) {
      msg.textContent = 'Valid email..';
      msg.style.color = 'green';
    } else {
      msg.textContent = 'Invalid email _ please check format...';
      msg.style.color = 'red';
    }
  });

  function validateEmail(email) {
    const simpleEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    return simpleEmailRegex.test(email);
  }