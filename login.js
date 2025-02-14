document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("#login-form");

    function togglePasswordVisibility(event) {
        const passwordInput = event.target.closest(".pass-label").nextElementSibling;
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            event.target.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            passwordInput.type = "password";
            event.target.classList.replace("fa-eye-slash", "fa-eye");
        }
    }

    document.querySelectorAll(".toggle-password").forEach(icon => {
        icon.addEventListener("click", togglePasswordVisibility);
    });


    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const loginEmail = document.getElementById("login-input").value;
        const loginPassword = document.getElementById("login-pass").value;

        const storedEmail = localStorage.getItem("storedEmail");
        const storedPassword = localStorage.getItem("storedPassword");

        if (loginEmail.trim() === "" || loginPassword.trim() === "") {
            alert("Please fill in both fields.");
            return;
        }
        if (loginPassword.length < 8) {
            alert("Password must be contain at least 8 characters");
            return;
        }
        if (loginEmail === storedEmail && loginPassword === storedPassword) {
            alert("Login successful! Redirecting to your dashboard...");
            window.location.href = "index.html";
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});
