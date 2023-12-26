import React, { useState } from 'react';
import styles from "../styles/detailProduct.module.css";

const Bank = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const buttonStyle = {
    borderRadius: '8px',
    border: '1px solid var(--Primary-70, #00A4DF)',
  };

  return (
    <div className="d-flex flex-column mb-3">
      <button
        className={`${styles["buttonq"]} ${activeButton === 'bca' ? styles["active"] : ''}`}
        onClick={() => handleButtonClick('bca')}
        style={activeButton === 'bca' ? buttonStyle : {}}
      >
        <img
          src="/asset/detail/bca.svg"
          alt="Bank BCA"
          style={{ width: "32px", height: "32px", marginRight: "8px" }}
        />
        Bank BCA
      </button>

      <button
        className={`p-2 ${styles["buttonq"]} ${activeButton === 'ovo' ? styles["active"] : ''}`}
        onClick={() => handleButtonClick('ovo')}
        style={activeButton === 'ovo' ? buttonStyle : {}}
      >
        <img
          src="/asset/detail/ovo.svg"
          alt="Bank OVO"
          style={{ width: "20px", height: "20px", marginRight: "8px" }}
        />
        OVO
      </button>

      <button
        className={`p-2 ${styles["buttonq"]} ${activeButton === 'gopay' ? styles["active"] : ''}`}
        onClick={() => handleButtonClick('gopay')}
        style={activeButton === 'gopay' ? buttonStyle : {}}
      >
        <img
          src="/asset/detail/gopay.svg"
          alt="Bank Gopay"
          style={{ width: "20px", height: "20px", marginRight: "10px" }}
        />
        Gopay
      </button>
    </div>
  );
};

export default Bank;
