// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let errorMessage = '';

    if (name.trim() === '') {
        errorMessage += 'Please enter your name.\n';
    }

    if (email.trim() === '') {
        errorMessage += 'Please enter your email.\n';
    } else if (!validateEmail(email)) {
        errorMessage += 'Please enter a valid email address.\n';
    }

    if (message.trim() === '') {
        errorMessage += 'Please enter your message.\n';
    }

    if (errorMessage) {
        alert(errorMessage);
    } else {
        // Here you can handle the form submission (e.g., send data to server)
        alert('Form submitted successfully!');
        form.reset();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}