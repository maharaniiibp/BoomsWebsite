import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import styles from "../styles/index.module.css";
import dataIcon from "../data/icon.json";
import dataHero from "../data/hero-card.json";
import { Dropdown } from "react-bootstrap";
import Product from "../components/productcard";
import Bundaran from "@/components/bundaran";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import Overview from "./overview";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

export default function Index() {
  const [jsonIcon, setJsonIcon] = useState([]);
  const [jsonHero, setJsonHero] = useState([]);

  useEffect(() => {
    setJsonIcon(dataIcon);
    setJsonHero(dataHero);
    // AOS.init();
  }, []);

  return (
    <>
      {/* section 1 */}
      <section className={styles['hero1']} data-aos="zoom-in" data-aos-duration="1000">
        <img src='../../asset/hero-banner.png' alt="Hero Banner" />
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


      {/* section 2 */}
      <section className={styles["hero2"]}>
        <h1 data-aos="zoom-in" data-aos-duration="1500">Party like a sockstar with all of our Unisex Styles</h1>
        <h2>
          <div className="d-flex" data-aos="fade-right" data-aos-duration="1500">
            <img className={styles["img1"]} src="../../asset/hero2-1.png"></img>
            <img className={styles["img2"]} src="../../asset/hero2-2.png"></img>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1500">
            {jsonIcon.map((item, index) => (
              <a
                key={index}
                className="group"
                style={{ textDecoration: "none" }}
              >
                <div className={styles["bungkus"]}>
                  <img
                    className={styles["icon"]}
                    src={item.img}
                    alt={`Icon ${index}`}
                  />
                  <div className={styles["text"]}>
                    <p>{item.title}</p>
                    <a className="text-decoration-none">{item.desc}</a>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </h2>
      </section>

      {/* section 3 */}
      <section className={styles['hero3']}>
        <h1 className="mx-auto" data-aos="fade-up" data-aos-duration="1500">Party like a sockstar with all of our Unisex Styles</h1>
        <div className={styles['card-container']}>
          {jsonHero.map((item, index) => (
            <a key={index} className="group"
              data-aos="flip-right"
              data-aos-duration="1500"
            >
              <div className={styles['card']}>
                <img className={styles['black']} src={item.img} alt={`Image ${index}`} />
                <img className={styles['like']} src='../../asset/Icon.png' ></img>
                <div className={styles['cover']}>
                  <h1 className=''>
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
                    <button onClick={() => window.location.href = "/detailProduct"}>
                      SALE
                    </button>
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>

      </section>

      {/* section 4 */}
      <Bundaran />
      <div style={{ paddingBottom: "100px" }}></div>

      {/* section 5 */}
      <section className={styles['product-3']}>
        <div className={styles['bungkus-judul']} 
        >
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
      <div style={{ marginTop: '-60px' }}>
        <Overview />
      </div>


      {/* section 6 */}
      <div
      className={styles['luar']}
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   alignItems: "center",
        //   justifyContent: "center",
        //   marginTop: "10rem",
        //   marginBottom: "4rem",
        //   width: "auto"
        // }}
      >
        <Image
          src="/asset/testimoni.png"
          alt="bg"
          
          width={500}
          height={10}
          className={styles['testimoni']}
        />
        <div
        className={styles['bungkus-luar']}
          style={{
            color: "black",
            // marginTop: "-25rem",
            backgroundColor: "white",
            padding: "2rem",
            textAlign: 'start'
          }}
        >
          <Row
          className={styles['putih']}
           style={{alignItems: 'center', marginBottom: '30px'}}
          >
            <Col xs={12} md={2} className={styles['gambar-fathu']}>
              <Image
                src="/asset/home/fathu.png"
                alt="bg"
                
                width="70"
                height="70"
                className={styles['fathu']}
              />
            </Col>
            <Col xs={12} md={10} className={styles['customer']}>
              <div className="ms-4">Fathu Bagus Septihan</div>
              <div className="ms-4">Customer</div>
              <div className="ms-4">Depok, Sleman, Yogyakarta</div>
            </Col>
          </Row>

          <p
            className={styles['text-des']}
            style={{  maxWidth: "30rem", textAlign: 'start' }}
          >
            Lorem ipsum dolor sit amet consectetur. In velit sed nullam quis.
            Augue tristique feugiat ultricies sit molestie volutpat pretium.
            Lorem ipsum dolor sit amet consectetur. In velit sed nullam quis.
            Augue tristique feugiat ultricies sit molestie volutpat pretium.
          </p>

          <div className="text-center">
            <Image
              src="/asset/home/bundaran.svg"
              alt="bg"
              width={60}
              height={10}
            />
          </div>
        </div>
      </div>
      <div style={{ paddingBottom: "150px" }}></div>

      {/* section 7 */}
      <div className={styles["d-flex"]} style={{marginTop: '50px'}} >
        <div>
          <h3 className={styles["shop"]}>SHOP ALL DESIGN</h3>
          <h2 className={styles["guarante"]}>Satisfaction Guarantee</h2>
          <p className={styles["we"]}>
            We are confident that you will absolutely <br />
            love our socks. If for any reason you're <br />
            not completely satisfied, we offer a <br />
            hassle-free refund. It's a straightforward <br />
            and transparent as that.
          </p>
          <button className={styles["see"]}>SEE OUR RETRUN POLICY</button>
        </div>
        <img
          src="asset/home/firut.png"
          alt=""
          className={styles["firut"]}
            // data-aos="zoom-in"
            // data-aos-duration="1500"
            // style={{overflow: 'hidden'}}
        />
      </div>
      <div style={{ paddingBottom: "70px" }}></div>
    </>
  );
}
