import React, { useState } from "react";
import styles from "../styles/detailProduct.module.css";

const Color = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <div className={styles["flex"]}>
        <a
          href="#"
          className={`${styles["bulat"]} ${
            selectedColor === "bulat" ? styles["clicked"] : ""
          }`}
          onClick={() => handleClick("bulat")}
          style={
            selectedColor === "bulat"
              ? {
                  borderRadius: "35px",
                  border: "3px solid var(--Primary-70, #00A4DF)",
                }
              : {}
          }
        ></a>
        <a
          href="#"
          className={`${styles["white"]} ${
            selectedColor === "white" ? styles["clicked"] : ""
          }`}
          onClick={() => handleClick("white")}
          style={
            selectedColor === "white"
              ? {
                  borderRadius: "35px",
                  border: "3px solid var(--Primary-70, #00A4DF)",
                }
              : {}
          }
        ></a>
        <a
          href="#"
          className={`${styles["navy"]} ${
            selectedColor === "navy" ? styles["clicked"] : ""
          }`}
          onClick={() => handleClick("navy")}
          style={
            selectedColor === "navy"
              ? {
                  borderRadius: "35px",
                  border: "3px solid var(--Primary-70, #00A4DF)",
                }
              : {}
          }
        ></a>
        <a
          href="#"
          className={`${styles["grey"]} ${
            selectedColor === "grey" ? styles["clicked"] : ""
          }`}
          onClick={() => handleClick("grey")}
          style={
            selectedColor === "grey"
              ? {
                  borderRadius: "35px",
                  border: "3px solid var(--Primary-70, #00A4DF)",
                }
              : {}
          }
        ></a>
      </div>
    </div>
  );
};

export default Color;
