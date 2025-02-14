document.addEventListener("DOMContentLoaded", function () {
    const passwordForm = document.querySelector(".pass-form");

    function togglePasswordVisibility(event) {
        const icon = event.target; // Get clicked icon
        const passwordInput = icon.closest("label").nextElementSibling; // Select input field

        if (!passwordInput || passwordInput.tagName !== "INPUT") return; // Ensure it's an input field

        if (passwordInput.type === "password") {
            passwordInput.type = "text"; // Show password
            icon.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            passwordInput.type = "password"; // Hide password
            icon.classList.replace("fa-eye-slash", "fa-eye");
        }
    }

    // Attach event listener to all toggle password icons
    document.querySelectorAll(".toggle-password").forEach(span => {
        span.addEventListener("click", togglePasswordVisibility);
    });

    if (!passwordForm) {
        console.error("Password form not found! Ensure the class is correct.");
        return;
    }

    passwordForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const newPassword = document.getElementById("pass").value;
        const confirmPassword = document.getElementById("con-pass").value;

        if (newPassword.trim() === "" || confirmPassword.trim() === "") {
            alert("Please fill in both fields.");
            return;
        }

        if (newPassword.length < 8) {
            alert("Password must contain at least 8 characters.");
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        localStorage.setItem("storedPassword", newPassword);

        alert("Password updated successfully! Redirecting to login page...");
        window.location.href = "login.html";
    });
});
