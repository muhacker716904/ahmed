document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = form.querySelector('#email').value.trim();
        const password = form.querySelector('#password').value.trim();

        if (email === '' || password === '') {
            alert('يرجى ملء جميع الحقول.');
            return;
        }

        // تخزين بيانات المستخدم في التخزين المحلي
        let users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.some(user => user.email === email)) {
            alert('البريد الإلكتروني مسجل بالفعل.');
            return;
        }

        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));

        alert('تم التسجيل بنجاح!');
        window.location.href = 'login.html'; // إعادة التوجيه إلى صفحة تسجيل الدخول
    });
});
