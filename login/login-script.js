document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('login-error');

    // Reset error message
    errorMessage.classList.remove('show');

    // Dummy validation - Replace this with real validation logic
    if (username === 'admin' && password === 'admin123') {
        window.location.href = 'index.html'; // Successful login redirect
    } else {
        errorMessage.textContent = 'Invalid username or password!';
        errorMessage.classList.add('show', 'shake');
    }
});

// Shake animation for error message
document.querySelector('#login-error').addEventListener('animationend', function() {
    this.classList.remove('shake');
});

// Adding shake animation in CSS
const style = document.createElement('style');
style.innerHTML = `
    .shake {
        animation: shake 0.4s ease;
    }
    @keyframes shake {
        0% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        50% { transform: translateX(10px); }
        75% { transform: translateX(-10px); }
        100% { transform: translateX(0); }
    }
`;
document.head.appendChild(style);
