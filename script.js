document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let course = document.getElementById("course").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    let errorMessage = document.getElementById("errorMessage");
    let successMessage = document.getElementById("successMessage");

  
    errorMessage.innerText = "";
    successMessage.innerText = "";


    if (!firstName || !lastName || !email || !phone || !course || !password || !confirmPassword) {
        errorMessage.innerText = "! All fields are required!";
        return;
    }


    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        errorMessage.innerText = "! Please enter a valid email address!";
        return;
    }

    let phonePattern = /^[0-9]{10}$/;
    if (length(phonePattern)!=10) {
        errorMessage.innerText = "! Please enter a valid 10-digit phone number!";
        return;
    }

    if (password.length < 6) {
        errorMessage.innerText = "! Password must be at least 6 characters long!";
        return;
    }

    
    if (password !== confirmPassword) {
        errorMessage.innerText = "! Passwords do not match!";
        return;
    }


    successMessage.innerText = " Registration Successful!";
});
