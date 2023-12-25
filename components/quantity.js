import React, { useState } from "react";
import styles from "../styles/detailProduct.module.css";
import Buycart from "./buycart";
import Bank from "./bank";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const itemPrice = 25.99;

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleTyping = (event) => {
    if (event.key === "Enter") {
      setNotes((prevNotes) => prevNotes + "\n");
    } else {
      setNotes(event.target.value);
      setIsClicked(true);
    }
  };

  const clearDefaultText = () => {
    if (notes === "") {
      setNotes("typing here");
      setIsClicked(false); // Reset saat input kehilangan fokus
    }
  };

  return (
    <>
      <div className={`p-2 ${styles["kotak"]}`}>
        <span className={styles["set"]}>Set Quantity</span>
        <div className={`d-flex ${styles["button"]}`}>
          <button className={styles["click"]} onClick={decreaseQuantity}>
            -
          </button>
          <span>{quantity}</span>
          <button className={styles["click"]} onClick={increaseQuantity}>
            +
          </button>
        </div>
        <div className={styles["lineq"]}></div>
        <label className={styles["set"]} htmlFor="notes">
          Add notes
        </label>
        <textarea
          id="notes"
          className={`${styles["typ"]} mt-3 `}
          style={{ paddingBottom: "70px", whiteSpace: "pre-wrap" }}
          value={isClicked ? notes : ""}
          placeholder={!isClicked ? "typing here" : ""}
          onChange={handleTyping}
          onFocus={clearDefaultText}
          onBlur={clearDefaultText}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              // Handle any action on pressing Enter here, if needed
            }
          }}
        />

        <div className={styles["lineq"]}></div>
        <span className={styles["set"]}>Payment method</span>
        <Bank />
        <div className={styles["lineq"]}></div>

        <div className="d-flex justify-content-around">
          <span className={styles["set"]}>Sub Total</span>
          <span className={styles["priceq"]}>
            {" "}
            ${(itemPrice * quantity).toFixed(2)}
          </span>
        </div>

        <div className="d-flex flex-column mb-3">
          <Buycart />
        </div>

        <div className="d-flex justify-content-around">
          <img src="/asset/detail/sms.svg" className="img-fluid" alt="sms" />
          <img
            src="/asset/detail/heart.svg"
            className="img-fluid"
            alt="heart"
          />
          <img src="/asset/detail/send.svg" className="img-fluid" alt="send" />
        </div>
      </div>
    </>
  );
};

export default QuantitySelector;
