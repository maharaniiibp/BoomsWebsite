import React, { useState } from "react";
import styles from "../styles/detailProduct.module.css";

const ProductDescription = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [showBorder, setShowBorder] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
    setShowBorder(!showBorder);
  };

  return (
    <div>
      <button
        className={`${styles["deskripsi"]} `}
        style={{
          borderBottom: "2px solid #004a65",
        }}
        onClick={toggleDescription}
      >
        Description
        <img
          style={{ width: "18px", height: "18px", marginLeft: "314px" }}
          src="/asset/detail/arrow-down.svg"
          className="img-fluid"
          alt="Product Image"
        />
      </button>

      {showDescription && (
        <p className={styles["fancy"]}>
          Fancy feet can be happy feet, too. Try our dot <br />
          collection for something a little more formal, but just as effective.
          <br />
          <br />
          Make every moment sparkle with Wellow's Midnight Confetti collection.
          <br />
          <br />
          At 18-25 mmHg, our socks gently wrap around feet, ankles, and legs to
          provide the support that stimulates circulation without feeling tight.
          We call that the BoomsFit.
        </p>
      )}
    </div>
  );
};

export default ProductDescription;
