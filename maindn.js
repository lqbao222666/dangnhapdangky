// Hàm loginValidate() để kiểm tra email và mật khẩu
function loginValidate(event) {
  event.preventDefault(); // Ngừng hành động mặc định của form

  const email = document.getElementById("email").value;
  const password = document.getElementById("psw").value;

  // Kiểm tra tính hợp lệ của email
  const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailReg.test(email)) {
    alert("Vui lòng nhập email hợp lệ.");
    return;
  }

  // Kiểm tra mật khẩu: ít nhất 8 ký tự, chứa chữ hoa, chữ thường và chữ số
  const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordReg.test(password)) {
    alert(
      "Mật khẩu phải có ít nhất 8 ký tự, một chữ cái viết hoa, một chữ cái viết thường và một chữ số."
    );
    return;
  }

  alert("Đăng nhập thành công!");
}

// Lắng nghe sự kiện submit của form
document.getElementById("loginForm").addEventListener("submit", loginValidate);
