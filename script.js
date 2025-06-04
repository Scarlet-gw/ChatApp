const toggleBtn = document.getElementById('toggleBtn');
const formTitle = document.getElementById('formTitle');
const toggleText = document.getElementById('toggleText');
const forgotDiv = document.querySelector('.forgot');
const submitBtn = document.getElementById('submitBtn');
const name = document.getElementById('name');
const signupPhone = document.getElementById('signupPhone');
const signupEmail = document.getElementById('signupEmail');
const emailOrPhone = document.getElementById('emailOrPhone');
const confirmPassword = document.getElementById('confirmPassword');

let isLogin = true;

toggleBtn.addEventListener('click', () => {
  isLogin = !isLogin;
  if (isLogin) {
    // Login mode
    formTitle.textContent = 'Login';
    toggleText.textContent = "Don't have an account?";
    toggleBtn.textContent = 'Sign Up';
    forgotDiv.style.display = 'block';
    submitBtn.textContent = 'Login';

    name.classList.add('hidden');
    signupPhone.classList.add('hidden');
    signupEmail.classList.add('hidden');
    emailOrPhone.classList.remove('hidden');
    confirmPassword.classList.add('hidden');

    name.required = false;
    signupPhone.required = false;
    signupEmail.required = false;
    emailOrPhone.required = true;
    confirmPassword.required = false;
    } else {
            
    // Sign Up mode
    formTitle.textContent = 'Sign Up';
    toggleText.textContent = "Already have an account?";
    toggleBtn.textContent = 'Login';
    forgotDiv.style.display = 'none';
    submitBtn.textContent = 'Sign Up';

    name.classList.remove('hidden');
    signupPhone.classList.remove('hidden');
    signupEmail.classList.remove('hidden');
    emailOrPhone.classList.add('hidden');
    confirmPassword.classList.remove('hidden');

    name.required = true;
    signupPhone.required = true;
    signupEmail.required = true;
    emailOrPhone.required = false;
    confirmPassword.required = true;
    }
  });

  authForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const password = document.getElementById("password").value;
    const confirmPassword = confirmPasswordInput.value;

    if (isSignUp && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

      alert(`${isSignUp ? "Sign Up" : "Login"} successful!`);
    });