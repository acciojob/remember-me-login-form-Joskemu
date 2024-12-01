document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const rememberMe = document.getElementById('checkbox').checked;

  if (rememberMe) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  } else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  alert(`Logged in as ${username}`);

  checkForExistingUser();
});

document.getElementById('existing').addEventListener('click', function() {
  const existingUsername = localStorage.getItem('username');
  alert(`Logged in as ${existingUsername}`);
});

function checkForExistingUser() {
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  if (savedUsername && savedPassword) {
    document.getElementById('existing').style.display = 'block';
  } else {
    document.getElementById('existing').style.display = 'none';
  }
}

// Check for existing user on page load
checkForExistingUser();
