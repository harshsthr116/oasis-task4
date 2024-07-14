function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (username && password) {
        localStorage.setItem(username, password);
        alert('User registered successfully!');
    } else {
        alert('Please fill in both fields.');
    }
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
        alert('Login successful!');
        document.getElementById('securedPage').style.display = 'block';
    } else {
        alert('Invalid username or password.');
    }
}

function logout() {
    document.getElementById('securedPage').style.display = 'none';
}
