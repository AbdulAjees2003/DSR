document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginBtn').addEventListener('click', async function(event) {
        event.preventDefault();
        try {
            const userEmail = document.getElementById('emailInput').value;
            const userPassword = document.getElementById('passwordInput').value;

            // Additional validation can go here

            const usersData = [];
            const response = await fetch('Book1.csv');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.text();
            const rows = data.split('\n');
            
            for (let i = 1; i < rows.length; i++) {
                const row = rows[i].split(',');
                if (row.length >= 2) {
                    const user = {};
                    user.email = row[0].trim();
                    user.hashedPassword = row[1].trim(); // Note: This is not secure
                    usersData.push(user);
                }
            }

            let userExists = usersData.some(user => {
                return user.email === userEmail && user.hashedPassword === userPassword; // Note: This is not secure
            });

            if (userExists) {
                localStorage.setItem('isLoggedIn', 'true');
                Swal.fire({
                    icon: 'success',
                    title: 'Login successful',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    window.location.href = "Index.html";
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Login failed',
                    text: 'Invalid email or password'
                });
            }
        } catch (error) {
            console.error("An error occurred:", error);
            Swal.fire({
                icon: 'error',
                title: 'An error occurred',
                text: `${error.message}`
            });
        }
    });
});
