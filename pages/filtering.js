import React, { useState, useEffect } from "react";
import dataProduct from '../data/product.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/product.module.css';
import { Dropdown, Form } from "react-bootstrap";
import Overview from "./overview";
import Swal from 'sweetalert2';

export default function Filtering() {

  // GENDER
  const [menChecked, setMenChecked] = useState(false);
  const [womanChecked, setWomanChecked] = useState(false);

  // SIZE
  const [sChecked, setSChecked] = useState(false);
  const [mChecked, setMChecked] = useState(false);
  const [lChecked, setLChecked] = useState(false);
  const [xlChecked, setXLChecked] = useState(false);
  const [xxlChecked, setXXLChecked] = useState(false);

  // PRICE
  const [activeButton, setActiveButton] = useState(null);
  const [priceRange, setPriceRange] = useState(null);

  const [jsonProduct, setJsonProduct] = useState([]);

  useEffect(() => {
    setJsonProduct(dataProduct);
  }, []);

  const filteredProducts = jsonProduct.filter((item) => {
    const sizeFilter =
      (sChecked && item.size === "S") ||
      (mChecked && item.size === "M") ||
      (lChecked && item.size === "L") ||
      (xlChecked && item.size === "XL") ||
      (xxlChecked && item.size === "XXL") ||
      (!sChecked && !mChecked && !lChecked && !xlChecked && !xxlChecked);

    const genderFilter =
      (menChecked && item.gender === "Men") ||
      (womanChecked && item.gender === "Woman") ||
      (!menChecked && !womanChecked);

    const priceFilter = !priceRange || (item.price >= priceRange.min && item.price <= priceRange.max);

    return sizeFilter && genderFilter && priceFilter;
  });

  const handleSCheckboxChange = () => {
    setSChecked(!sChecked);
  };

  const handleMCheckboxChange = () => {
    setMChecked(!mChecked);
  };

  const handleLCheckboxChange = () => {
    setLChecked(!lChecked);
  };

  const handleXLCheckboxChange = () => {
    setXLChecked(!xlChecked);
  };

  const handleXXLCheckboxChange = () => {
    setXXLChecked(!xxlChecked);
  };

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber === activeButton ? null : buttonNumber);

    // Define your price ranges based on the button clicks
    let minPrice, maxPrice;
    switch (buttonNumber) {
      case 1:
        minPrice = 5;
        maxPrice = 10;
        break;
      case 2:
        minPrice = 10;
        maxPrice = 25;
        break;
      case 3:
        minPrice = 25;
        maxPrice = 50;
        break;
      case 4:
        minPrice = 50;
        maxPrice = Infinity; // Set to Infinity for the last button
        break;
      default:
        minPrice = 0;
        maxPrice = Infinity;
    }
    setPriceRange({ min: minPrice, max: maxPrice });
  };

  // CHECKBOX
  const CheckboxExample = () => {
    const [isChecked, setChecked] = useState(false);
  
    const handleCheckboxChange = () => {
      setChecked(!isChecked);
    };



  return (
    <div className="p-5">
      {/* GENDER */}
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic" className={styles['dropdown1']}>
          Gender
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Form.Check
            type="checkbox"
            label="Men"
            id="men-checkbox"
            style={{ marginLeft: '20px' }}
            checked={menChecked}
            onChange={() => setMenChecked(!menChecked)}
          />
          <Form.Check
            type="checkbox"
            label="Woman"
            id="woman-checkbox"
            style={{ marginLeft: '20px' }}
            checked={womanChecked}
            onChange={() => setWomanChecked(!womanChecked)}
          />
        </Dropdown.Menu>
      </Dropdown>

      {/* SIZE */}
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic" className={styles['dropdown2']}>
          Size
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Form.Check
            type="checkbox"
            label="S"
            id="S-checkbox"
            style={{ marginLeft: '20px' }}
            checked={sChecked}
            onChange={handleSCheckboxChange}
          />
          <Form.Check
            type="checkbox"
            label="M"
            id="M-checkbox"
            style={{ marginLeft: '20px' }}
            checked={mChecked}
            onChange={handleMCheckboxChange}
          />
          <Form.Check
            type="checkbox"
            label="L"
            id="L-checkbox"
            style={{ marginLeft: '20px' }}
            checked={lChecked}
            onChange={handleLCheckboxChange}
          />
          <Form.Check
            type="checkbox"
            label="XL"
            id="XL-checkbox"
            style={{ marginLeft: '20px' }}
            checked={xlChecked}
            onChange={handleXLCheckboxChange}
          />
          <Form.Check
            type="checkbox"
            label="XXL"
            id="XXL-checkbox"
            style={{ marginLeft: '20px' }}
            checked={xxlChecked}
            onChange={handleXXLCheckboxChange}
          />
        </Dropdown.Menu>
      </Dropdown>

      <div className={styles['button']}>
        <button
          className={`${styles['buttons']} ${activeButton === 1 ? styles['active'] : ''}`}
          onClick={() => handleButtonClick(1)}
        >
          $5 - $10
        </button>
        <button
          className={`${styles['buttons']} ${activeButton === 2 ? styles['active'] : ''}`}
          style={{ marginLeft: '20px' }}
          onClick={() => handleButtonClick(2)}
        >
          $10 - $25
        </button>
        <button
          className={`${styles['buttons']} ${activeButton === 3 ? styles['active'] : ''}`}
          onClick={() => handleButtonClick(3)}
        >
          $25 - $50
        </button>
        <button
          className={`${styles['buttons']} ${activeButton === 4 ? styles['active'] : ''}`}
          style={{ marginLeft: '20px', marginTop: '20px' }}
          onClick={() => handleButtonClick(4)}
        >
          $50 ++
        </button>
      </div>

      <div className={styles['card-container']}>
        {filteredProducts.map((item, index) => (
          <a key={index} className="group">
            <div className={styles['card']}>
              <img className={styles['black']} src={item.img} />
              <img className={styles['like']} style={{ height: '32px' }} src='../../asset/icon.png' alt="like icon" />
              <div className={styles['cover']}>
                <h1 className='p-3'>
                  Jetsetter Blacks : 16 - 20 mmHg
                </h1>
                <h2>
                  <div className={styles['bungkus-card']}>
                    <img className={styles['star1']} src='../../asset/star1.png' style={{ height: '12px' }} alt="star icon" />
                    <img className={styles['star1']} src='../../asset/star1.png' style={{ marginLeft: '5px', height: '12px' }} alt="star icon" />
                    <img className={styles['star1']} src='../../asset/star1.png' style={{ marginLeft: '5px', height: '12px' }} alt="star icon" />
                    <img className={styles['star1']} src='../../asset/star1.png' style={{ marginLeft: '5px', height: '12px' }} alt="star icon" />
                    <img className={styles['star1']} src='../../asset/star2.png' style={{ marginLeft: '5px', height: '12px' }} alt="star icon" />
                  </div>
                  <p>1,2k sold out</p>
                </h2>
                <h3>
                  <div className={styles['bungkus-price']}>
                    <p className={styles['price1']}>${item.price}</p>
                    <p className={`${styles['price2']} ${styles['strikethrough']}`}>$25.99</p>
                  </div>
                  <button>SALE</button>
                </h3>
              </div>
            </div>
          </a>
        ))}
      </div>


      <button>Gender</button>
      <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Check me
      </label>
      <p>Checkbox is {isChecked ? 'checked' : 'unchecked'}</p>
    </div>
      
    </div>
  )
        }}
