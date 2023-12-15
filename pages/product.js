import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/product.module.css';
import { Dropdown, Form } from "react-bootstrap";
import dataProduct from '../data/product.json';
import Overview from "./overview";
import Swal from 'sweetalert2';

const Product = () => {
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

  // Maximum and Minimum Price Input Values
  const [maxPriceInput, setMaxPriceInput] = useState('');
  const [minPriceInput, setMinPriceInput] = useState('');

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
        maxPrice = Infinity;
        break;
      default:
        minPrice = 0;
        maxPrice = Infinity;
    }
    setPriceRange({ min: minPrice, max: maxPrice });
  };

  const clearFilters = () => {
    // Clear all filter states
    setMenChecked(false);
    setWomanChecked(false);
    setSChecked(false);
    setMChecked(false);
    setLChecked(false);
    setXLChecked(false);
    setXXLChecked(false);
    setActiveButton(null);
    setPriceRange(null);

    // Clear input values
    setMaxPriceInput('');
    setMinPriceInput('');
  };

  const handleClick = () => {
    Swal.fire({
      title: "Success",
      icon: "success"
    });
  };




  return (
    <>
      <section className={styles['product-1']}>
        <img src='../../asset/banner-product.png' alt='Product Banner'></img>
        <div className={styles['bungkus-text-1']}>
          <h1>NEW STYLE JUST LAUNCHED</h1>
          <h2 className={styles['animated-text']}>
            <div className={styles['atas']}>BOOMS</div>
            <p>SHOCKS</p>
          </h2>
          <h3>Brings Your Feet & Legs Back to Life</h3>
          <button>SHOP NOW</button>
        </div>
      </section>

      <section className={styles['product-2']}>
        <h1>Our selling products show here</h1>
        <div className={styles['cover-product']}>
          <div className={styles['dropdown']}>

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
              <div className={styles['line']}></div>
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
              <div className={styles['line']}></div>
            </Dropdown>


            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic" className={styles['dropdown2']}>
                Price
              </Dropdown.Toggle>
              {/* <Dropdown.Menu>
              
            </Dropdown.Menu> */}
            </Dropdown>


            <Form>
              <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlInput1" style={{ position: 'relative' }}>
                <Form.Label style={{ fontSize: '14px', color: '#00A4DF', fontWeight: '600' }}>
                  Maximum
                </Form.Label>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src="../../asset/circle.png"
                    alt="Circle Icon"
                    style={{ marginLeft: '10px', position: 'absolute', top: '74%', transform: 'translateY(-50%)' }}
                  />
                  <Form.Control
                    type="email"
                    placeholder="Label"
                    style={{ width: '220px', paddingLeft: '30px', fontSize: '14px' }}
                    value={maxPriceInput}
                    onChange={(e) => setMaxPriceInput(e.target.value)}
                  />
                </div>

              </Form.Group>
            </Form>




            <Form>
              <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlInput1" style={{ position: 'relative' }}>
                <Form.Label style={{ fontSize: '14px', color: '#00A4DF', fontWeight: '600' }}>Minimum</Form.Label>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src="../../asset/circle.png"
                    alt="Circle Icon"
                    style={{ marginLeft: '10px', position: 'absolute', top: '74%', transform: 'translateY(-50%)' }}
                  />
                  <Form.Control
                    type="email"
                    placeholder="Label"
                    style={{ width: '220px', paddingLeft: '30px', fontSize: '14px' }}
                    value={minPriceInput}
                    onChange={(e) => setMinPriceInput(e.target.value)}
                  />
                </div>
              </Form.Group>
            </Form>


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
              <div className={styles['line']}></div>
            </div>


            <button onClick={handleClick} className={styles['button-show']}>SHOW RESULT</button>
            <div>
              <button onClick={() => { clearFilters(); handleClick(); }} className={styles['button-clear']}>
                Clear Filter
              </button>

            </div>
          </div>

          <div>
            <div className={styles['menu']}>
              <h1>All Product</h1>
              <h2>Popular</h2>
              <h2>Best Seller</h2>
              <h2>Discount</h2>
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
          </div>
        </div>

      </section>

      <section className={styles['product-3']}>
        <div className={styles['bungkus-judul']}>
          <div className={styles['kanan']}>
            <h1>Overview Our Product</h1>
            <button>SHOP WOMEN
              <img src="../../asset/home/arrow-down.png" style={{ marginLeft: '10px' }}></img>
            </button>
          </div>
          <button className={styles['see']}>See all</button>
          <div>

          </div>
        </div>
      </section>

      <section>
        <Overview />
      </section>


    </>
  );
};

export default Product;
