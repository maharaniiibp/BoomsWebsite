import React, { useState } from "react";
import styles from "../styles/buy.module.css";

const Buy = () => {
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
          <p>Thanks, your transaction is successful</p>
          {/* Add other content inside the popup */}
          <button className={`${styles.kembali} `} onClick={closePopup}>
            Back
          </button>
        </div>
      )}

      <button
        className="p-2"
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
        onClick={handleBuyClick}
      >
        Buy now
      </button>
    </div>
  );
};

export default Buy;
