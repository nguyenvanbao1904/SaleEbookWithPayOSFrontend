import { useState, useEffect } from "react";
import "./styles.css";

export default function Home() {
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://saleebookwithpayosbackend.onrender.com/book-data"
      );
      const data = await response.json();
      setBookData(data);
    };
    fetchData();
  }, []);

  if (!bookData) return <p>Đang tải dữ liệu...</p>;

  return (
    <div className="main-box">
      <div className="checkout">
        <div className="product"></div>
        <form
          action="https://saleebookwithpayosbackend.onrender.com/create-payment-link"
          method="post"
        >
          <p>
            <strong>Tên sản phẩm:</strong> {bookData.name}
          </p>
          <input type="hidden" name="name" value={bookData.name} />
          <p>
            <strong>Giá tiền:</strong> {bookData.price} VNĐ
          </p>
          <input type="hidden" name="price" value={bookData.price} />
          <p>
            <strong>Mô tả:</strong> {bookData.description}
          </p>
          <p>
            <img src={bookData.image} alt={bookData.name} width={400} />
          </p>
          <input
            type="hidden"
            name="description"
            value={bookData.description}
          />
          <label htmlFor="number">
            <strong>Số lượng:</strong>
          </label>
          <input id="number" type="number" name="quantity" />
          <button type="submit" id="create-payment-link-btn">
            Tạo Link thanh toán
          </button>
        </form>
      </div>
    </div>
  );
}
