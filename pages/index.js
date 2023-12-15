import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import styles from '../styles/index.module.css';
import dataIcon from '../data/icon.json';
import dataHero from '../data/hero-card.json';
import { Dropdown } from "react-bootstrap";
import Product from "../components/product";



export default function Index() {
  const [jsonIcon, setJsonIcon] = useState([]);
  const [jsonHero, setJsonHero] = useState([]);

  useEffect(() => {
    setJsonIcon(dataIcon);
    setJsonHero(dataHero);
  }, []);
  return (
    <>
      <section className={styles['hero1']}>
        <img src='../../asset/hero-banner.png'></img>
        <div className={styles['bungkus-text-1']}>
          <h1>NEW STYLE JUST A LAUNCHED</h1>
          <h2 className={styles['animated-text']}>
            <div className={styles['atas']}>BOOMS</div>
            <p>SHOCKS</p>
          </h2>
          <h3>Brings Your Feet & Legs Back to Life</h3>
          <button>SHOP NOW</button>
        </div>
      </section>

      <section className={styles['hero2']}>
        <h1>Party like a sockstar with all of our Unisex Styles</h1>
        <h2>
          <img className={styles['img1']} src='../../asset/hero2-1.png'></img>
          <img className={styles['img2']} src='../../asset/hero2-2.png'></img>
          <div>
            {jsonIcon.map((item, index) => (
              <a key={index} className="group" style={{ textDecoration: 'none' }}>
                <div className={styles['bungkus']}>
                  <img className={styles['icon']} src={item.img} alt={`Icon ${index}`} />
                  <div className={styles['text']}>
                    <p>{item.title}</p>
                    <a className="text-decoration-none">{item.desc}</a>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </h2>
      </section>


      <section className={styles['hero3']}>
        <h1 className="mx-auto">Party like a sockstar with all of our Unisex Styles</h1>
        <div className={styles['card-container']}>
          {jsonHero.map((item, index) => (
            <a key={index} className="group">
              <div className={styles['card']}>
                <img className={styles['black']} src={item.img} alt={`Image ${index}`} />
                <img className={styles['like']} src='../../asset/icon.png' ></img>
                <div className={styles['cover']}>
                  <h1 className='p-3'>
                    Jetsetter Blacks : 16 - 20 mmHg
                  </h1>
                  <h2>
                    <div className={styles['bungkus-card']}>
                      <img className={styles['star1']} src='../../asset/star1.png' alt={`Star1 ${index}`} />
                      <img className={styles['star1']} src='../../asset/star1.png' alt={`Star1 ${index}`} style={{ marginLeft: '5px' }} />
                      <img className={styles['star1']} src='../../asset/star1.png' alt={`Star1 ${index}`} style={{ marginLeft: '5px' }} />
                      <img className={styles['star1']} src='../../asset/star1.png' alt={`Star1 ${index}`} style={{ marginLeft: '5px' }} />
                      <img className={styles['star1']} src='../../asset/star2.png' alt={`Star2 ${index}`} style={{ marginLeft: '5px' }} />
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

      </section>

      {/* section 4 */}
      <p
        className="text-center"
        style={{
          color: "var(--neutral-100, #434040)",
          fontFamily: "GitLab Sans",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "56px",
          letterSpacing: "0.64px",
        }}
      >
        Deal Alert! Get free shipping and bulk <br />
        discounts when you order 2 or more <br />
        pairs
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="/asset/home/kaoskaki.png" // Pastikan path gambar sesuai
          className="img-fluid"
          alt="img kaos kaki"
        />
      </div>
      <div style={{ paddingBottom: '100px' }}></div>

      {/* section 5 */}
      <div className="d-flex mb-3">
        <h3
          className="p-2"
          style={{
            color: "var(--neutral-100, #434040)",
            fontFamily: "GitLab Sans",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "56px",
            letterSpacing: "0.64px",
            marginLeft: "105px", // Menambahkan margin ke kanan
          }}
        >
          Overview our product
        </h3>
        {/* <button
          className="p-2 border-0 btn-sm pb-2"
          style={{
            color: "var(--neutral-10, #F9FCFE)",
            fontFamily: "GitLab Sans",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 600,
            width: "140px", 
            height: "40px",
            justifyContent: "center",
            alignItems: "center",
            gap: "2px",
            borderRadius: "8px",
            background: "var(--primary-70, #00A4DF)",
            marginTop: "15px",
          }}
        >
          <span style={{ marginRight: "8px" }}>SHOP WOMEN</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </button> */}
        <div
          className="p-2"
          style={{ fontFamily: "GitLab Sans", marginTop: "15px" }}
        >
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              SHOP WOMAN
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Jetsetter Blacks</Dropdown.Item>
              <Dropdown.Item href="#">Jetsetter Blacks</Dropdown.Item>
              <Dropdown.Item href="#">Jetsetter Blacks</Dropdown.Item>
              <Dropdown.Item href="#">Jetsetter Blacks</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <button
          className="ms-auto p-2"
          style={{
            marginRight: "113px",
            height: "40px",
            width: "130px", // Menggunakan properti 'width' bukan 'weight'
            marginTop: "25px",
            alignItems: "center",
            borderRadius: "8px",
            border: "1px solid var(--primary-70, #00A4DF)",
            backgroundColor: "white",
            color: "var(--primary-90, #00688D)",
            fontFamily: "GitLab Sans",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "20px",
          }}
        >
          See all
        </button>
      </div>

      <div className="pb-lg-3"></div>
      <Product />
      <div style={{ paddingBottom: '150px' }}></div>
    </>

  );
};
