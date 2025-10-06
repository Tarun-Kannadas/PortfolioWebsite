function validationCheck(event) {
    event.preventDefault();

    const Nname = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const place = document.getElementById('place').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let warningMsg = "";

    // Name validation
    if (!Nname) {
        warningMsg += "Please enter your Name.<br>";
    }

    // Phone validation (optional but numeric check)
    if (!phone) {
        warningMsg += "Please enter your Phone Number.<br>";
    } else if (!/^\d{10}$/.test(phone)) {
        warningMsg += "Phone number must be 10 digits.<br>";
    }

    // Place validation
    if (!place) {
        warningMsg += "Please enter your Place.<br>";
    }

    // Email validation
    if (!email) {
        warningMsg += "Please enter your Email.<br>";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        warningMsg += "Please enter a valid Email.<br>";
    }

    // Message validation
    if (!message) {
        warningMsg += "Please enter your Message.<br>";
    }

    if (warningMsg) {
        document.getElementById('warning').innerHTML = warningMsg;
        return;
    }

    document.getElementById('warning').innerHTML = "Form submitted successfully!";
}

function clearMsg() {
    document.getElementById('name').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('place').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
    document.getElementById('warning').innerHTML = "";
}
