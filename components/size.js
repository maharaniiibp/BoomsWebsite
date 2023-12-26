import React, { useState } from "react";
import styles from "../styles/detailProduct.module.css";

const Size = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size === selectedSize ? null : size);
  };

  const getSizeClassName = (size) => {
    return `${styles["m"]} ${selectedSize === size ? styles["clicked"] : ""}`;
  };

  return (
    <div className="d-flex " style={{ fontFamily: "GitLab Sans, sans-serif" }}>
      <button
        className={getSizeClassName("S")}
        onClick={() => handleSizeClick("S")}
        style={
          selectedSize === "S"
            ? {
                borderRadius: "8px",
                background: "var(--Primary-70, #00A4DF)",
                color: "white",
              }
            : {}
        }
      >
        S
      </button>
      <button
        className={getSizeClassName("M")}
        onClick={() => handleSizeClick("M")}
        style={
          selectedSize === "M"
            ? {
                borderRadius: "8px",
                background: "var(--Primary-70, #00A4DF)",
                color: "white",
              }
            : {}
        }
      >
        M
      </button>
      <button
        className={getSizeClassName("L")}
        onClick={() => handleSizeClick("L")}
        style={
          selectedSize === "L"
            ? {
                borderRadius: "8px",
                background: "var(--Primary-70, #00A4DF)",
                color: "white",
              }
            : {}
        }
      >
        L
      </button>
      <button
        className={getSizeClassName("XL")}
        onClick={() => handleSizeClick("XL")}
        style={
          selectedSize === "XL"
            ? {
                borderRadius: "8px",
                background: "var(--Primary-70, #00A4DF)",
                color: "white",
              }
            : {}
        }
      >
        XL
      </button>
      <button
        className={getSizeClassName("XXL")}
        onClick={() => handleSizeClick("XXL")}
        style={
          selectedSize === "XXL"
            ? {
                borderRadius: "8px",
                background: "var(--Primary-70, #00A4DF)",
                color: "white",
              }
            : {}
        }
      >
        XXL
      </button>
    </div>
  );
};

export default Size;
