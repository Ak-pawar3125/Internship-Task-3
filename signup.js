document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector("#signup-form");

    if (!signupForm) {
        console.error("Signup form not found! Make sure the ID is correct.");
        return;
    }

    function togglePasswordVisibility(event) {
        const icon = event.target; // Clicked icon
        const passwordInput = icon.closest("label").nextElementSibling; // Find the related password field

        if (passwordInput.type === "password") {
            passwordInput.type = "text"; // Show password
            icon.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            passwordInput.type = "password"; // Hide password
            icon.classList.replace("fa-eye-slash", "fa-eye");
        }
    }

    // Attach event listener to all toggle password icons
    document.querySelectorAll(".toggle-password i").forEach(icon => {
        icon.addEventListener("click", togglePasswordVisibility);
    });

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const signupEmail = document.getElementById("signup-input").value;
        const signupPassword = document.getElementById("sign-pass1").value;
        const confirmPassword = document.getElementById("sign-pass2").value;

        if (signupEmail.trim() === "" || signupPassword.trim() === "" || confirmPassword.trim() === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (signupPassword.length < 8) {
            alert("Password must contain at least 8 characters.");
            return;
        }

        if (signupPassword !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        localStorage.setItem("storedEmail", signupEmail);
        localStorage.setItem("storedPassword", signupPassword);

        alert("Signup successful! Redirecting to login page...");
        window.location.href = "login.html";
    });
});
