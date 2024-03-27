function submitSignupForm() {
    event.preventDefault(); // 阻止表单默认提交行为

    // 获取表单输入的值
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const confirmPassword = document.querySelector('input[name="confirm_password"]').value;
    const isPrime = document.querySelector('input[name="isPrime"]').checked;

    // 检查两次输入的密码是否一致
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // 构造要发送的数据
    const user = {
        username: username,
        pwd: password,
        isPrime: isPrime === true ? 1 : 0
    };

    // 发送POST请求到服务器
    fetch('http://localhost:8080/addUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .then(data => {
            if (data.msg === "suc") {
                window.location.href = '../Htmls/login.html'; // 注册成功，跳转到登录页
            } else {
                alert(data.msg); // 注册失败，显示错误消息
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}
