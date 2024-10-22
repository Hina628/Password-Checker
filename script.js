document.getElementById('checkBtn').addEventListener('click', checkPasswordStrength);

function checkPasswordStrength() {
    const password = document.getElementById('passwordInput').value;
    const message = document.getElementById('message');
    let strength = '';

    
    const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})');
    const mediumRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})');

    if (strongRegex.test(password)) {
        strength = 'Strong Password 💪';
        message.style.color = 'green';
    } else if (mediumRegex.test(password)) {
        strength = 'Medium Strength Password ⚠️';
        message.style.color = 'orange';
    } else {
        strength = 'Weak Password 😟';
        message.style.color = 'red';
    }

    
    message.textContent = strength;
}
