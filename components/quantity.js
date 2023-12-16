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
        <button className={styles["buttonq"]}>
          <img
            src="/asset/detail/bca.svg"
            alt="Bank BCA"
            style={{ width: "32px", height: "32px", marginRight: "8px" }}
          />
          Bank BCA
        </button>

        <button
          className="p-2"
          style={{
            display: "flex",
            width: "220px",
            justifyContent: "left",
            alignItems: "center",
            background: "white",
            borderRadius: "8px",
            border: "1px solid var(--Neutral-40, #BDBDBD)",
            color: "var(--Primary-90, #00688D)",
            fontFamily: "GitLab Sans, sans-serif",
            fontSize: "14px",
            letterSpacing: "0.28px",
            fontWeight: "700",
            marginLeft: "8px",
            marginTop: "12px",
          }}
        >
          <img
            src="/asset/detail/ovo.svg"
            alt="Bank ovo"
            style={{
              width: "20px",
              height: "20px",
              marginRight: "8px",
            }}
          />
          OVO
        </button>

        <button
          className="p-2"
          style={{
            display: "flex",
            width: "220px",
            justifyContent: "left",
            alignItems: "center",
            background: "white",
            borderRadius: "8px",
            border: "1px solid var(--Neutral-40, #BDBDBD)",
            fontFamily: "GitLab Sans, sans-serif",
            fontSize: "14px",
            letterSpacing: "0.28px",
            fontWeight: "700",
            marginLeft: "8px",
            marginTop: "12px",
          }}
        >
          <img
            src="/asset/detail/gopay.svg"
            alt="Bank gopay"
            style={{
              width: "20px",
              height: "20px",
              marginRight: "10px",
            }}
          />
          Gopay
        </button>
      </div>
      <div className={styles["lineq"]}></div>

      <div className="d-flex justify-content-around">
        <span className={styles["set"]}>Sub Total</span>
        <span className={styles["priceq"]}> $25.99</span>
      </div>

      <div class="d-flex flex-column mb-3">
        <button
          class="p-2"
          style={{
            width: "220px",
            padding: "10px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            borderRadius: "8px",
            background: "var(--Primary-70, #00A4DF)",
            border: "none",
            color: "white",
            marginLeft: "8px",
            fontFamily: "GitLab Sans, sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            marginTop: "12px",
          }}
        >
          Buy now
        </button>
        <button
          class="p-2"
          style={{
            width: "220px",
            padding: "10px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            borderRadius: "8px",
            border: "1px solid var(--Primary-70, #00A4DF)",
            marginLeft: "8px",
            marginTop: "12px",
            background: "white",
            color: "var(--Primary-90, #00688D)",
            fontFamily: "GitLab Sans, sans-serif",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 600,
          }}
        >
          Add to Cart
        </button>
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
