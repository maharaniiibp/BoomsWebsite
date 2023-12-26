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
  const [selectedGender, setSelectedGender] = useState(null);

  // SIZE
  const [sChecked, setSChecked] = useState(false);
  const [mChecked, setMChecked] = useState(false);
  const [lChecked, setLChecked] = useState(false);
  const [xlChecked, setXLChecked] = useState(false);
  const [xxlChecked, setXXLChecked] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  // PRICE
  const [activeButton, setActiveButton] = useState(null);
  const [priceRange, setPriceRange] = useState(null);


  // Maximum and Minimum Price Input Values
  const [maxPriceInput, setMaxPriceInput] = useState('');
  const [minPriceInput, setMinPriceInput] = useState('');

  const [jsonProduct, setJsonProduct] = useState([]);

  // Data JSON
  useEffect(() => {
    setJsonProduct(dataProduct);
  }, []);

  const handleCheckboxChange = (checkboxType) => {
    switch (checkboxType) {
      case 'S':
        setSChecked(true);
        setMChecked(false);
        setLChecked(false);
        setXLChecked(false);
        setXXLChecked(false);
        break;
      case 'M':
        setSChecked(false);
        setMChecked(true);
        setLChecked(false);
        setXLChecked(false);
        setXXLChecked(false);
        break;
      case 'L':
        setSChecked(false);
        setMChecked(false);
        setLChecked(true);
        setXLChecked(false);
        setXXLChecked(false);
        break;
      case 'XL':
        setSChecked(false);
        setMChecked(false);
        setLChecked(false);
        setXLChecked(true);
        setXXLChecked(false);
        break;
      case 'XXL':
        setSChecked(false);
        setMChecked(false);
        setLChecked(false);
        setXLChecked(false);
        setXXLChecked(true);
        break;
      default:
        // Jika tidak ada yang dipilih, atur semua menjadi false
        setSChecked(false);
        setMChecked(false);
        setLChecked(false);
        setXLChecked(false);
        setXXLChecked(false);
    }
  };


  const filteredProducts = jsonProduct.filter((item) => {
    const sizeFilter =
      (sChecked && item.size === "S") ||
      (mChecked && item.size === "M") ||
      (lChecked && item.size === "L") ||
      (xlChecked && item.size === "XL") ||
      (xxlChecked && item.size === "XXL") ||
      (!sChecked && !mChecked && !lChecked && !xlChecked && !xxlChecked);


    const genderFilter =
      (!selectedGender && true) ||
      (selectedGender === 'Men' && item.gender === 'Men') ||
      (selectedGender === 'Woman' && item.gender === 'Woman');


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
    // Lakukan tindakan saat tombol "Clear Filter" ditekan
    console.log('Clear Filter button clicked');
    // Kosongkan semua filter dan nilai input
    setMenChecked(false);
    setWomanChecked(false);
    setSChecked(false);
    setMChecked(false);
    setLChecked(false);
    setXLChecked(false);
    setXXLChecked(false);
    setSelectedGender(null);
    setActiveButton(null);
    setPriceRange(null);
    setMaxPriceInput('');
    setMinPriceInput('');
  };

  const handleClick = () => {
    Swal.fire({
      title: "Success",
      icon: "success"
    });
  };

  // Dropdown PRICE
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown function
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <section className={styles['product-1']} data-aos="zoom-in" data-aos-duration="1000">
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
        <h1 data-aos="fade-up"
          data-aos-duration="1500">Our selling products show here</h1>
        <div className={styles['cover-product']}>
          <div className={styles['dropdown']}
            data-aos="fade-left"
            data-aos-duration="1500">

            {/* GENDER */}
            <div className={styles['wrapper']}>
              <div className={styles['collabsible']}>
                {/* Tambahkan class baru untuk checkbox atas dan terapkan CSS untuk menyembunyikannya */}
                <input type="checkbox" id="collabsible-head" className={styles['hidden-checkbox']} />
                <label for="collabsible-head">Gender
                  <img
                    src="../../asset/arrowmudun.png"
                    alt="Arrow Icon"
                    className={styles['arrow-icon']}
                    style={{ marginLeft: '160px', width: '18px' }}
                  />
                </label>
                <div className={styles['collabsible-text']}>
                  <Form.Check
                    type="checkbox"
                    label="Men"
                    id="men-checkbox"
                    className={styles['checkbox']}
                    style={{ marginLeft: '5px', marginTop: '20px' }}
                    checked={selectedGender === 'Men'}
                    onChange={() => setSelectedGender('Men')}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Woman"
                    id="woman-checkbox"
                    className={styles['checkbox']}
                    style={{ marginLeft: '5px' }}
                    checked={selectedGender === 'Woman'}
                    onChange={() => setSelectedGender('Woman')}
                  />
                  <div className={styles['line']}></div>
                </div>
              </div>
            </div>

            {/* SIZE */}
            <div className={styles['wrapper']} style={{ marginTop: '-40px' }}>
              <div className={styles['collabsible']} >
                <input type="checkbox" id="size-collabsible-head" className={styles['hidden-checkbox']} />
                <label htmlFor="size-collabsible-head">Size
                  <img
                    src="../../asset/arrowmudun.png"
                    alt="Arrow Icon"
                    className={styles['arrow-icon']}
                    style={{ marginLeft: '185px', width: '18px' }}
                  />
                </label>
                <div className={styles['collabsible-text']}>
                  <Form.Check
                    type="checkbox"
                    label="S"
                    id="S-checkbox"
                    className={styles['checkbox']}
                    style={{ marginLeft: '5px', marginTop: '20px' }}
                    checked={sChecked}
                    onChange={() => handleCheckboxChange('S')}
                  />
                  <Form.Check
                    type="checkbox"
                    label="M"
                    id="M-checkbox"
                    className={styles['checkbox']}
                    style={{ marginLeft: '5px' }}
                    checked={mChecked}
                    onChange={() => handleCheckboxChange('M')}
                  />
                  <Form.Check
                    type="checkbox"
                    label="L"
                    id="L-checkbox"
                    className={styles['checkbox']}
                    style={{ marginLeft: '5px' }}
                    checked={lChecked}
                    onChange={() => handleCheckboxChange('L')}
                  />
                  <Form.Check
                    type="checkbox"
                    label="XL"
                    id="XL-checkbox"
                    className={styles['checkbox']}
                    style={{ marginLeft: '5px' }}
                    checked={xlChecked}
                    onChange={() => handleCheckboxChange('XL')}
                  />
                  <Form.Check
                    type="checkbox"
                    label="XXL"
                    id="XXL-checkbox"
                    className={styles['checkbox']}
                    style={{ marginLeft: '5px' }}
                    checked={xxlChecked}
                    onChange={() => handleCheckboxChange('XXL')}
                  />
                  <div className={styles['line']}></div>
                </div>
              </div>
            </div>

            {/* PRICE */}
            <div className={styles.collapsibleDropdown}>
              <div className={styles.dropdownHeader} onClick={toggleDropdown}>
                <span style={{ fontWeight: '600' }}>Price</span>
                <img
                  src="../../asset/arrowmudun.png"
                  style={{ height: '18px', marginTop: '5px' }}
                  alt="Arrow Icon"
                  className={isOpen ? styles.arrowUp : styles.arrowDown}
                />
              </div>
              {isOpen && (
                <div className={styles.dropdownContent} style={{ marginTop: '20px' }}>
                  {/* Isi dropdown ditempatkan di sini */}
                  {/* <p>Contoh isi dropdown</p>
          <button>hai semua</button> */}
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
                          style={{ width: '255px', paddingLeft: '30px', fontSize: '14px' }}
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
                          style={{ width: '255px', paddingLeft: '30px', fontSize: '14px' }}
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
                      style={{ width: '116px' }}
                    >
                      $5 - $10
                    </button>
                    <button
                      className={`${styles['buttons']} ${activeButton === 2 ? styles['active'] : ''}`}
                      style={{ marginLeft: '20px', width: '116px' }}
                      onClick={() => handleButtonClick(2)}
                    >
                      $10 - $25
                    </button>
                    <button
                      className={`${styles['buttons']} ${activeButton === 3 ? styles['active'] : ''}`}
                      onClick={() => handleButtonClick(3)}
                      style={{ width: '116px' }}
                    >
                      $25 - $50
                    </button>
                    <button
                      className={`${styles['buttons']} ${activeButton === 4 ? styles['active'] : ''}`}
                      style={{ marginLeft: '20px', marginTop: '20px', width: '116px' }}
                      onClick={() => handleButtonClick(4)}
                    >
                      $50 ++
                    </button>
                    <div className={styles['line']} style={{ marginTop: '30px', marginBottom: '8px' }}></div>
                  </div>
                </div>
              )}
            </div>


            <button onClick={handleClick} className={styles['button-show']}>SHOW RESULT</button>
            <div>
              <button onClick={() => { clearFilters(); handleClick(); }} className={styles['button-clear']}>
                Clear Filter
              </button>

            </div>
          </div>

          <div className={styles['bungkus-menu']}>
            <div className={styles['menu']} data-aos="fade-down"
              data-aos-duration="1500">
              <h1>All Product</h1>
              <h2>Popular</h2>
              <h2>Best Seller</h2>
              <h2>Discount</h2>
            </div>
            <div className={styles['card-container']} data-aos="fade-right"
              data-aos-duration="1500">
              {filteredProducts.map((item, index) => (
                <a key={index} className="group-card">
                  <div className={styles['card']}>
                    <img className={styles['black']} src={item.img} />
                    <img className={styles['like']} style={{ height: '32px' }} src='../../asset/Icon.png' alt="like icon" />
                    <div className={styles['cover']}>
                      <h1 className=''>
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
                        <button onClick={() => window.location.href = "/detailProduct"}>
                          SALE
                        </button>

                      </h3>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

      </section>

      <section className={styles['product-3']} data-aos="fade-down"
        data-aos-duration="1500">
        <div className={styles['bungkus-judul']} >
          <div className={styles['kanan']}>
            <h1>Overview Our Product</h1>
            <button>SHOP WOMEN
              <img src="../../asset/home/arrow-down.png" style={{ marginLeft: '10px' }}></img>
            </button>
          </div>
          <button className={styles['see']}>See all</button>
        </div>
      </section>

      <section style={{ marginBottom: '80px' }}>
        <Overview />
      </section>


    </>
  );
};

export default Product;
