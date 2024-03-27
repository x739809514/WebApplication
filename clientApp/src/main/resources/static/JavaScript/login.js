function submitLogin() {
    const username = document.querySelector('[name="username"]').value;
    const password = document.querySelector('[name="password"]').value;

    const loginData = {
        username: username,
        pwd: password,
    };

    fetch(`http://localhost:8080/searchUser/${username}/${password}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.msg==="suc") {
                sessionStorage.setItem('isLoggedIn', true);
                sessionStorage.setItem('username', username);
                window.location.href = '../index.html';
            } else {
                alert('Login failed: ' + data.msg);
            }
        }
        )
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });

    return false;
}