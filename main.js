// script.js

// Xử lý thêm sản phẩm vào giỏ hàng (hiện thông báo)
document.querySelectorAll(".btn-secondary").forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.parentElement.querySelector("h3").innerText;
    alert(`✅ Đã thêm "${productName}" vào giỏ hàng!`);
  });
});

// Xử lý form đăng ký nhận bản tin
document
  .querySelector(".subscribe-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (email) {
      alert(`📧 Cảm ơn bạn đã đăng ký nhận tin với email: ${email}`);
      this.reset();
    } else {
      alert("❗ Vui lòng nhập email hợp lệ.");
    }
  });
