import { useEffect } from "react";

export default function Success() {
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const orderCode = query.get("orderCode");
    const status = query.get("status");

    if (status === "PAID" && orderCode) {
      window.location.href = `https://saleebookwithpayosbackend.onrender.com/download?orderId=${orderCode}`;
    }
  }, []);

  return (
    <div className="main-box">
      <h2>Thanh toán thành công 🎉</h2>
      <p>Bạn đã mua ebook thành công.</p>
      <p>File PDF sẽ được tải xuống tự động. (f5 lại trang nếu không thấy)</p>
    </div>
  );
}
