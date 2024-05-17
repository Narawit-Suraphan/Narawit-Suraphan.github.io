function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    // ตรวจสอบชื่อผู้ใช้และรหัสผ่านที่ถูกต้อง
    const validUsername = 'vip';
    const validPassword = 'vip99';

    if (username === validUsername && password === validPassword) {
        alert('เข้าสู่ระบบสําเร็จ!');
        // ไปยังหน้าถัดไปหรือตามที่ต้องการ
        window.location.href = 'Servervip.html';
        return false; // ป้องกันการรีเฟรชหน้า
    } else {
        errorMsg.textContent = 'Invalid username or password';
        return false; // ป้องกันการรีเฟรชหน้า
    }
}
