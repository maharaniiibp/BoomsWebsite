import React, { useState } from "react";
import styles from "../styles/buy.module.css";

const Cart = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleBuyClick = () => {
    setShowPopup(true);
    // Additional logic after successful purchase
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && (
        <div className={styles["popup"]}>
          <span className={styles["close "]} onClick={closePopup}>
            &times;
          </span>
          <p>Your item has been successfully entered on the cart</p>
          {/* Add other content inside the popup */}
          <button className={`${styles.kembali} `} onClick={closePopup}>
            Back
          </button>
        </div>
      )}
      <button
        className="p-2"
        style={{
          display: "flex",
          width: "100%",
          padding: "10px 16px",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          borderRadius: "8px",
          border: "1px solid var(--Primary-70, #00A4DF)", // Changed the order of styles
          // Added background color for the button
          color: "var(--Primary-90, #00688D)",
          background: "white",
          marginLeft: "0px",
          fontFamily: "GitLab Sans, sans-serif",
          fontSize: "14px",
          fontWeight: 600,
          marginTop: "12px",
        }}
        onClick={handleBuyClick}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Cart;
