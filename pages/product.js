import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/product.module.css';
import { Dropdown } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
// import dataHero from '../data/hero-card.json';
import dataProduct from '../data/product.json';
import Overview from "./overview";

const Product = () => {
  const [menChecked, setMenChecked] = useState(false);
  const [womenChecked, setWomenChecked] = useState(false);

  const handleMenCheckboxChange = () => {
    setMenChecked(!menChecked);
  };

  const handleWomenCheckboxChange = () => {
    setWomenChecked(!womenChecked);
  };

  const [sChecked, setSChecked] = useState(false);
  const [mChecked, setMChecked] = useState(false);
  const [lChecked, setLChecked] = useState(false);
  const [xlChecked, setXLChecked] = useState(false);
  const [xxlChecked, setXXLChecked] = useState(false);

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

  const [jsonProduct, setJsonProduct] = useState([]);

  useEffect(() => {
    setJsonProduct(dataProduct);
  }, []);

  return (
    <>
      <section className={styles['product-1']}>
        <img src='../../asset/banner-product.png' alt='Product Banner'></img>
        <div className={styles['bungkus-text-1']}>
          <h1>NEW STYLE JUST LAUNCHED</h1>
          <h2>
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
                onChange={handleMenCheckboxChange}
              />
              <Form.Check
                type="checkbox"
                label="Women"
                id="women-checkbox"
                style={{ marginLeft: '20px' }}
                checked={womenChecked}
                onChange={handleWomenCheckboxChange}
              />
            </Dropdown.Menu>
          </Dropdown>


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


          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic" className={styles['dropdown2']}>
              Price
            </Dropdown.Toggle>
            {/* <Dropdown.Menu>
              
            </Dropdown.Menu> */}
          </Dropdown>


          <Form>
            <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Maximum</Form.Label>
              <Form.Control type="email" placeholder="Label" style={{width: '220px'}} />
            </Form.Group>
          </Form>


          <Form>
            <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Minimum</Form.Label>
              <Form.Control type="email" placeholder="Label" style={{width: '220px'}} />
            </Form.Group>
          </Form>

          <div className={styles['button']}>
            <button className={styles['buttons']}>$5 - $10</button>
            <button className={styles['buttons']} style={{marginLeft: '20px'}}>$5 - $10</button>
            <button className={styles['buttons']}>$5 - $10</button>
            <button className={styles['buttons']} style={{marginLeft: '20px', marginTop: '20px'}}>$5 - $10</button>
          </div>
          
          <button className={styles['button-show']}>SHOW RESULT</button>
          <div>
             <button className={styles['button-clear']}>Clear Filter</button>
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
          {jsonProduct.map((item, index) => (
          <a key={index} className="group">
            <div className={styles['card']}>
              <img className={styles['black']} src={item.img} />
              <img className={styles['like']} style={{height: '32px'}} src='../../asset/icon.png' ></img>
              <div className={styles['cover']}>
                <h1 className='p-3'>
                  Jetsetter Blacks : 16 - 20 mmHg
                </h1>
                <h2>
                  <div className={styles['bungkus-card']}>
                    <img className={styles['star1']} src='../../asset/star1.png' style={{height: '12px'}}/>
                    <img className={styles['star1']} src='../../asset/star1.png' style={{ marginLeft: '5px', height: '12px' }} />
                    <img className={styles['star1']} src='../../asset/star1.png' style={{ marginLeft: '5px', height: '12px' }} />
                    <img className={styles['star1']} src='../../asset/star1.png' style={{ marginLeft: '5px', height: '12px' }} />
                    <img className={styles['star1']} src='../../asset/star2.png' style={{ marginLeft: '5px', height: '12px' }} />
                  </div>
                  <p>1,2k sold out</p>
                </h2>
                <h3>
                  <div className={styles['bungkus-price']}>
                    <p className={styles['price1']}>$25.99</p>
                    <p className={styles['price2']}>$25.99</p>
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
                  <img src="../../asset/home/arrow-down.png" style={{ marginLeft: '10px'}}></img>
                  </button>
              </div>
             <button className={styles['see']}>See all</button>
              <div>

              </div>
            </div>
      </section>

      <section>
        <Overview/>
      </section>
    </>
  );
};

export default Product;
