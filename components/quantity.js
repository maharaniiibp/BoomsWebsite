import React, { useState } from "react";
import styles from "../styles/detailProduct.module.css";
// import Buy from "./buy";
// import Cart from "./cart";
import Buycart from "./buycart";
import Bank from "./bank";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("ereh gnipyt"); // Mengatur nilai awal notes
const itemPrice = 25.99;
 const increaseQuantity = () => {
  setQuantity(quantity + 1);
  setNotes('ereh gnipyt'); // Set notes back to default whenever an item is added
};

const decreaseQuantity = () => {
  if (quantity > 1) {
    setQuantity(quantity - 1);
  }
};

  const handleTyping = (event) => {
    if (event && event.target) {
      setNotes(event.target.textContent || "");
    }
  };
  const handleBackspace = () => {
    const typingArea = document.getElementById("typingArea");
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);

    if (range.startOffset === 0 && range.startContainer !== typingArea) {
      range.startContainer.textContent = range.startContainer.textContent.slice(
        0,
        -1
      );
      range.collapse(false);
      clearDefaultText(); // Memanggil fungsi untuk menampilkan "typing here" jika teks kosong
    }
  };

 const handleKeyDown = (event) => {
  const typingArea = document.getElementById("typingArea");
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);

  if (
    event.key === "Backspace" &&
    range.startOffset === 0 &&
    range.startContainer !== typingArea
  ) {
    range.startContainer.textContent = range.startContainer.textContent.slice(
      0,
      -1
    );
    range.collapse(false);
    event.preventDefault();
    clearDefaultText(); // Memanggil fungsi untuk menampilkan "typing here" jika teks kosong
  }
};

  const clearDefaultText = () => {
    const typingArea = document.getElementById("typingArea");
    if (!notes && document.activeElement !== typingArea) {
      setNotes("typing here");
    }
  };

  return (
    <>
    <div className={styles["kotak"]}>
      
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
      <span className={styles["set"]}>Add notes</span>
      <div
        id="typingArea"
        className={`typ ${styles["typ"]}`}
        contentEditable="true"
        onInput={handleTyping}
        onKeyDown={handleKeyDown}
        onBlur={clearDefaultText}
        style={{
          direction: "rtl",
          unicodeBidi: "bidi-override",
          textAlign: "left",
        }}
      >
        {notes}
      </div>

      <div className={styles["lineq"]}></div>
      <span className={styles["set"]}>Payment method</span>
        <Bank/>
      <div className={styles["lineq"]}></div>

     <div className="d-flex justify-content-around">
  <span className={styles["set"]}>Sub Total</span>
  <span className={styles["priceq"]}> ${(itemPrice * quantity).toFixed(2)}</span>
</div>

      <div class="d-flex flex-column mb-3">
        <Buycart />
        
      </div>

      <div class="d-flex justify-content-around">
        <img src="/asset/detail/sms.svg" className="img-fluid" alt="sms" />
        <img src="/asset/detail/heart.svg" className="img-fluid" alt="heart" />
        <img src="/asset/detail/send.svg" className="img-fluid" alt="send" />
      </div>
    </div>
    </>
  );
};

export default QuantitySelector;
