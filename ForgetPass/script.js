const emailField = document.getElementById("emailField");
const phoneField = document.getElementById("phoneField");
const radioButtons = document.querySelectorAll('input[name="method"]');
const toast = document.getElementById("toast");

radioButtons.forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.value === "email") {
      emailField.classList.remove("hidden");
      phoneField.classList.add("hidden");
      emailField.required = true;
      phoneField.required = false;
    } else {
      emailField.classList.add("hidden");
      phoneField.classList.remove("hidden");
      phoneField.required = true;
      emailField.required = false;
    }
  });
});

function showToast(message, success = true) {
  toast.textContent = message;
  toast.className = `toast ${success ? "success" : "error"}`;
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3000);
}

document.getElementById("resetForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const method = document.querySelector('input[name="method"]:checked').value;
  const email = emailField.value;
  const phone = phoneField.value;

// === Actual logic placeholder ===
if (method === "email") {
  console.log("Reset link sent to email:", email);
} else {
  console.log("OTP sent to phone number:", phone);
}

// === Toast notification ===
showToast(
  method === "email"
  ? `Reset link sent to ${email}`
  : `OTP sent to ${phone}`
);
});