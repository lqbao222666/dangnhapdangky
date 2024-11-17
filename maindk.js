// Hàm kiểm tra tính hợp lệ của form đăng ký
function registerValidate(event) {
  event.preventDefault(); // Ngừng hành động mặc định của form

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const address = document.getElementById("address").value;

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

  // Kiểm tra mật khẩu xác nhận trùng với mật khẩu
  if (password !== confirmPassword) {
    alert("Mật khẩu và xác nhận mật khẩu không khớp.");
    return;
  }

  // Kiểm tra họ và tên
  if (fullName.trim() === "") {
    alert("Vui lòng nhập họ và tên.");
    return;
  }

  alert("Đăng ký thành công!");
}

// Lắng nghe sự kiện submit của form
document
  .getElementById("registerForm")
  .addEventListener("submit", registerValidate);
