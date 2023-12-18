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

export default function Index() {
  const [jsonIcon, setJsonIcon] = useState([]);
  const [jsonHero, setJsonHero] = useState([]);

  useEffect(() => {
    setJsonIcon(dataIcon);
    setJsonHero(dataHero);
  }, []);
  return (
    <>
      {/* section 1 */}
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

      {/* section 2 */}
      <section className={styles["hero2"]}>
        <h1>Party like a sockstar with all of our Unisex Styles</h1>
        <h2>
          <div className="d-flex">
             <img className={styles["img1"]} src="../../asset/hero2-1.png"></img>
          <img className={styles["img2"]} src="../../asset/hero2-2.png"></img>
          </div>
         
          <div>
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
        <h1 className="mx-auto">Party like a sockstar with all of our Unisex Styles</h1>
        <div className={styles['card-container']}>
          {jsonHero.map((item, index) => (
            <a key={index} className="group">
              <div className={styles['card']}>
                <img className={styles['black']} src={item.img} alt={`Image ${index}`} />
                <img className={styles['like']} src='../../asset/icon.png' ></img>
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
      {/* <Bundaran />
      <div style={{ paddingBottom: "100px" }}></div> */}

      {/* section 5 */}
      {/* <Overview /> */}

      {/* section 6 */}
      {/* <div className="bg-cover h-auto bg-center" style={{ marginTop: '100px' }}>
        <Image
          src="/asset/testimoni.png"
          alt="bg"
          layout="responsive"
          width={1920}
          height={1080}
        />
        <div
          className="bg-white mb-3 p-3"
          style={{
            position: "absolute",
            top: "678%",
            transform: "translate(62%, -153%)",
            width: "568px",
            borderRadius: "8px",
          }}
        >
          <Row className="">
            <Col className="col-3">
              <img
                className="p-2 w-100"
                src="/asset/home/fathu.png"
                alt=""
                style={{
                  borderRadius: "100%",
                }}
              />
            </Col>
            <Col className="mt-3">
              <h3
                className="text-start"
                style={{
                  color: "#383746",
                  fontFamily: "GitLab Sans, sans-serif",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "24px",
                  letterSpacing: "0.32px",
                  // marginBottom: "70px",
                }}
              >
                Fathu Bagus Septihan
              </h3>
              <h4
                className="text-start"
                style={{
                  color: "#999",
                  fontFamily: "GitLab Sans, sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "20px",
                  letterSpacing: "0.28px",
                }}
              >
                Customer <br />
                Depok, Sleman, Yogyakarta
              </h4>
            </Col>
          </Row>
          <Row className="mt-2">
            <div
              className="text-start"
              style={{
                alignSelf: "stretch",
                color: "var(--primary-100, #004A65)",
                fontFamily: "GitLab Sans, sans-serif",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "32px",
                letterSpacing: "0.28px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. In velit sed nullam quis.
              Augue tristique feugiat ultricies sit molestie volutpat pretium.
              Lorem ipsum dolor sit amet consectetur. In velit sed nullam quis.
              Augue tristique feugiat ultricies sit molestie volutpat pretium.
            </div>
          </Row>
        </div>

      </div>
      <div style={{ paddingBottom: "150px" }}></div> */}

      {/* section 7 */}
      {/* <div className="d-flex" style={{ marginTop: '-90px' }}>
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
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "684px",
            height: "460px",
            marginLeft: "80px",
          }}
        />
      </div>
      <div style={{ paddingBottom: "70px" }}></div> */}
    </>
  );
}
