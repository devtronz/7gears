// Add this script to handle toggling between login and sign-up forms
function toggleAuthForms() {
  const reg = document.getElementById('register-rider');
  const login = document.getElementById('login-section');
  if (reg.style.display === "none") {
    reg.style.display = "block";
    login.style.display = "none";
  } else {
    reg.style.display = "none";
    login.style.display = "block";
  }
}

// Optionally, call this on page load to show login by default:
window.onload = function() {
  toggleAuthForms(); // Show login form and hide register form
};

// Handle form submissions (replace with real backend integration)
document.getElementById('register-form').onsubmit = function(e) {
  e.preventDefault();
  // Collect data, send to backend, show success/error
  alert('Registration logic goes here!');
};

document.getElementById('login-form').onsubmit = function(e) {
  e.preventDefault();  
  // Collect data, send to backend, handle login/session
  alert('Login logic goes here!');
};

document.addEventListener('DOMContentLoaded', () => {
  // Registration form submit
  const regForm = document.getElementById('register-form');
  if (regForm) {
    regForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = {
        name: regForm.name.value,
        email: regForm.email.value,
        phone: regForm.phone.value,
        password: regForm.password.value
      };
      try {
        const res = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        const data = await res.json();
        if (res.ok) {
          alert('Registration successful!');
          // Optionally switch to login form
        } else {
          alert(data.error || 'Registration failed');
        }
      } catch (err) {
        alert('Network error');
      }
    });
  }
});
