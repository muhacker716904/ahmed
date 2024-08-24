// login.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = form.querySelector('#email').value.trim();
        const password = form.querySelector('#password').value.trim();

        if (email === '' || password === '') {
            alert('يرجى ملء جميع الحقول.');
            return;
        }

        let users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            // تخزين البريد الإلكتروني في التخزين المحلي
            localStorage.setItem('userEmail', email);

            alert('تسجيل دخول ناجح!');
            window.location.href = 'index.html'; // إعادة التوجيه إلى الصفحة الرئيسية
        } else {
            alert('البريد الإلكتروني أو كلمة المرور غير صحيحة.');
        }
    });
});
