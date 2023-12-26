import React, { useState } from "react";
import styles from "../styles/buy.module.css";

const Buycart = () => {
  const [clickedButton, setClickedButton] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [orderMessage, setOrderMessage] = useState("");

  const handleClick = (button) => {
    setClickedButton(button);
    setShowModal(true);

    if (button === "cart") {
      setOrderMessage("Sukses add to cart!");
    } else if (button === "buy") {
      setOrderMessage("Thank you for your order!");
    }

    setTimeout(() => {
      setShowModal(false);
    }, 3000); // Close modal after 3 seconds, change as needed
  };

  return (
    <div>
      <button
        className={`p-2 ${styles["button"]}`}
        style={{
          borderRadius: clickedButton === "buy" ? "8px" : "",
          background:
            clickedButton === "buy" ? "var(--Primary-70, #00A4DF)" : "",
          color: clickedButton === "buy" ? "white" : "",
        }}
        onClick={() => handleClick("buy")}
      >
        Buy now
      </button>
      <button
        className={`p-2 ${styles["button"]}`}
        style={{
          borderRadius: clickedButton === "cart" ? "8px" : "",
          background:
            clickedButton === "cart" ? "var(--Primary-70, #00A4DF)" : "",
          color: clickedButton === "cart" ? "white" : "",
        }}
        onClick={() => handleClick("cart")}
      >
        Add to Cart
      </button>
      {showModal && (
        <div className={styles["modal"]} onClick={() => setShowModal(false)}>
          <div
            className={styles["modal-content"]}
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className={styles["close"]}
              onClick={() => setShowModal(false)}
            >
              &times;
            </span>
            <p>{orderMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Buycart;
