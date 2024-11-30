const translations = {
  vi: {
    // Đăng nhập
    loginTitle: "Đăng Nhập",
    emailLabel: "Email hoặc Tên người dùng:",
    passwordLabel: "Mật khẩu:",
    loginButton: "Đăng nhập",
    forgotPassword: "Quên mật khẩu?",
    noAccount: "Chưa có tài khoản? Đăng ký",
    // Đăng ký
    title: "Đăng Ký - Văn Phòng Phẩm",
    registerTitle: "Đăng Ký",
    fullNameLabel: "Họ và tên:",
    confirmPasswordLabel: "Xác nhận mật khẩu:",
    addressLabel: "Địa chỉ giao hàng (tuỳ chọn):",
    registerButton: "Đăng ký",
    haveAccount: "Đã có tài khoản? Đăng nhập",
  },
  en: {
    // Login
    loginTitle: "Login",
    emailLabel: "Email or Username:",
    passwordLabel: "Password:",
    loginButton: "Login",
    forgotPassword: "Forgot password?",
    noAccount: "Don't have an account? Sign Up",
    // Register
    title: "Sign Up - Stationery Shop",
    registerTitle: "Sign Up",
    fullNameLabel: "Full Name:",
    confirmPasswordLabel: "Confirm Password:",
    addressLabel: "Shipping Address (optional):",
    registerButton: "Sign Up",
    haveAccount: "Already have an account? Login",
  },
  // Có thể thêm các ngôn ngữ khác ở đây
};

let currentLang = "vi";

function changeLanguage(lang) {
  currentLang = lang;
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-lang");
    if (translations[currentLang][key]) {
      element.textContent = translations[currentLang][key];
    }
  });
}

// Gán sự kiện thay đổi ngôn ngữ
document
  .getElementById("languageSelector")
  .addEventListener("change", (event) => {
    changeLanguage(event.target.value);
  });
