// Check if user is logged in
if (localStorage.getItem('isLoggedIn') !== 'true') {
    // Redirect to login page
    window.location.href = 'login.html';
}
