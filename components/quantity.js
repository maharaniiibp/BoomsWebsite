import React, { useState } from "react";
import styles from "../styles/detailProduct.module.css";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1); // State untuk melacak jumlah

  const increaseQuantity = () => {
    setQuantity(quantity + 1); // Menambah jumlah saat tombol "+" ditekan
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); // Mengurangi jumlah saat tombol "-" ditekan, namun tidak kurang dari 1
    }
  };

  return (
    <div className={styles["kotak"]}>
      <span className={styles["set"]}>Set Quantity</span>
      <div
        className={`d-flex ${styles["button"]}`}
        style={{
          color: "#00688D",
          fontFamily: "GitLab Sans, sans-serif",
          fontSize: "14px",
          fontWeight: 700,
          justifyContent: "space-between", // Atau "justify-content-between" sesuai dengan kebutuhan Bootstrap
        }}
      >
        <button className={styles["click"]} onClick={decreaseQuantity}>
          -
        </button>
        <span>{quantity}</span>
        <button className={styles["click"]} onClick={increaseQuantity}>
          +
        </button>
      </div>
      <div className={styles["lineq"]}></div>
      <span className={styles["set"]}>Add notes</span>
      <div className={styles["typ"]}>typing here</div>
      <div className={styles["lineq"]}></div>
      <span className={styles["set"]}>Payment method</span>
      <div class="d-flex flex-column mb-3">
        <button class="p-2">Bank BCA</button>
        <button class="p-2">OVO</button>

        <button class="p-2">GOPAY</button>
      </div>
      <div className={styles["lineq"]}></div>

      <div className="d-flex justify-content-around">
        <span>Sub Total</span>
        <span> $25.99</span>
      </div>

      <div class="d-flex flex-column mb-3">
        <button class="p-2">Buy now</button>
        <button class="p-2">Add to Cart</button>
      </div>

      <div class="d-flex justify-content-around">
        <img src="/asset/detail/sms.svg" className="img-fluid" alt="sms" />
        <img src="/asset/detail/heart.svg" className="img-fluid" alt="heart" />
        <img src="/asset/detail/send.svg" className="img-fluid" alt="send" />
      </div>
    </div>
  );
};

export default QuantitySelector;
