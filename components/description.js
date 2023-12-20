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
     <div className={styles["hai"]} style={{ marginTop: "-10px", display: "flex", justifyContent: "space-between" }}>
  <button className={styles["fabric"]} onClick={toggleDescription}>
    
   Description
    
  </button>
  <img
      src="/asset/detail/arrow-down.svg"
      className={`${styles["arrow"]} img-fluid`}
      alt="Product Image"
      onClick={toggleDescription}
    />
</div>


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
