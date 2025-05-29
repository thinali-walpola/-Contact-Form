document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;

  const form = e.target;
  const fields = ['firstName', 'lastName', 'email', 'message'];
  fields.forEach(field => {
    const input = form[field];
    const error = input.nextElementSibling;
    if (!input.value.trim()) {
      error.textContent = 'This field is required';
      error.style.display = 'block';
      valid = false;
    } else {
      error.textContent = '';
      error.style.display = 'none';
    }
  });

  const emailField = form['email'];
  const emailError = emailField.nextElementSibling;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailField.value.trim())) {
    emailError.textContent = 'Please enter a valid email address';
    emailError.style.display = 'block';
    valid = false;
  }

  const queryTypes = form.queryType;
  const queryError = form.queryType[0].parentElement.parentElement.nextElementSibling;
  if (![...queryTypes].some(input => input.checked)) {
    queryError.textContent = 'Please select a query type';
    queryError.style.display = 'block';
    valid = false;
  } else {
    queryError.textContent = '';
    queryError.style.display = 'none';
  }

  const consent = form['consent'];
  const consentError = consent.parentElement.nextElementSibling;
  if (!consent.checked) {
    consentError.textContent = 'To submit this form, please consent to being contacted';
    consentError.style.display = 'block';
    valid = false;
  } else {
    consentError.textContent = '';
    consentError.style.display = 'none';
  }

  if (valid) {
    alert('Form submitted successfully!');
    form.reset();
  }
});
