const form = document.getElementById('info-form');
const nameInput = document.getElementById('name');
const nameError = document.getElementById('name-error');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const codeInput = document.getElementById('code');
const codeError = document.getElementById('code-error');

// Set the regex for validating the user's name and code
const nameRegex = /^[a-zA-Z]{2,30}$/;
const codeRegex = /^[a-zA-Z0-9]{6}$/;

// Add an event listener to the form to handle the submission
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Validate the user's name
  const name = nameInput.value;
  if (!nameRegex.test(name)) {
    nameError.innerHTML = 'Please enter a valid name (2-30 letters)';
    return;
  }
  nameError.innerHTML = '';

  // Validate the user's email
  const email = emailInput.value;
  if (!email.includes('@')) {
    emailError.innerHTML = 'Please enter a valid email address';
    return;
  }
  emailError.innerHTML = '';

  

  // If the form is valid, redirect the user to your homepage
  location.href = 'regles-du-jeu.html'; // Replace with the URL of your homepage
});