function showForm(formId) {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const showSignupButton = document.getElementById('showSignupForm');
    const showLoginButton = document.getElementById('showLoginForm');
    
    if (formId === 'signupForm') {
        signupForm.style.display = 'block';
        loginForm.style.display = 'none';
        showSignupButton.style.backgroundColor = 'rgb(73, 202, 73)';
        showLoginButton.style.backgroundColor = 'rgb(66, 75, 66)';
    } else if (formId === 'loginForm') {
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
        showSignupButton.style.backgroundColor = 'rgb(66, 75, 66)';
        showLoginButton.style.backgroundColor = 'rgb(73, 202, 73)';
    }
}