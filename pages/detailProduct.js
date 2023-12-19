import styles from "../styles/detailProduct.module.css";
import React, { useState, useEffect } from "react";
import QuantitySelector from "@/components/quantity";
// import Product from "../components/productcard";
import Overview from "./overview";
import ProductDescription from "@/components/description";

export default function Index() {
  const stars = [1, 2, 3, 4, 5]; // Misalnya, array dengan nilai dari 1 sampai 5

  useEffect(() => {}, []);
  return (
    <div className="container">
      <div
        style={{
          marginTop: "150px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="d-flex justify-content-start">
          {/* section gambar */}
          <div
            className="kakibiru"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              // style={{ width: "331px", height: "384px" }}
              src="/asset/detail/kakibiru.png"
              className="img-fluid"
              alt="Product Image"
            />
            <div>
              <div
                className="det1dan2"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  style={{ marginRight: "38px" }}
                  src="/asset/detail/1.png"
                  className="img-fluid"
                  alt="Product Image"
                />
                <img
                  // style={{ width: "148px", height: "148px" }}
                  src="/asset/detail/2.png"
                  className="img-fluid"
                  alt="Product Image"
                />
              </div>

              {/* gambar ke bawah */}
              <div
                className="det1dan2"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  style={{ marginRight: "38px" }}
                  src="/asset/detail/3.png"
                  className="img-fluid"
                  alt="Product Image"
                />
                <img
                  // style={{ width: "148px", height: "148px" }}
                  src="/asset/detail/gambar23.png"
                  className="img-fluid"
                  alt="Product Image"
                />
              </div>

              <div
                className="det1dan2"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  style={{ marginRight: "38px" }}
                  src="/asset/detail/2.png"
                  className="img-fluid"
                  alt="Product Image"
                />
                <img
                  // style={{ width: "148px", height: "148px" }}
                  src="/asset/detail/3.png"
                  className="img-fluid"
                  alt="Product Image"
                />
              </div>

              <div
                className="det1dan2"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  style={{ marginRight: "38px" }}
                  src="/asset/detail/3.png"
                  className="img-fluid"
                  alt="Product Image"
                />
                <img
                  // style={{ width: "148px", height: "148px" }}
                  src="/asset/detail/gambar23.png"
                  className="img-fluid"
                  alt="Product Image"
                />
              </div>
            </div>
          </div>
          <div style={{ paddingBottom: "50px" }}></div>

          {/* section 1 */}
          <div className="d-lg-flex">
            <div className="d-flex justify-content-start">
              <div className="section1">
                <h2 className="pack">3-pack midnight-confetti</h2>
                <h4 className="blacks">Jetsetter Blacks : 16 - 20 mmHg</h4>
                <div className="cover">
                  <div class="d-flex">
                    <div className="bungkus-card">
                      <img
                        className="star1"
                        src="../../asset/star1.png"
                        alt={"Star1 ${stars}"}
                        style={{ marginLeft: "5px" }}
                      />
                      <img
                        className="star1"
                        src="../../asset/star1.png"
                        alt={"Star1 ${stars}"}
                        style={{ marginLeft: "5px" }}
                      />
                      <img
                        className="star1"
                        src="../../asset/star1.png"
                        alt={"Star1 ${stars}"}
                        style={{ marginLeft: "5px" }}
                      />

                      <img
                        className="star1"
                        src="../../asset/star1.png"
                        alt={"Star1 ${stars}"}
                        style={{ marginLeft: "5px" }}
                      />
                      <img
                        className="star1"
                        src="../../asset/star2.png"
                        alt={`Star2 ${stars}`} // Use backticks and ${} for variable interpolation
                        style={{ marginLeft: "5px" }}
                      />
                    </div>
                    <p className="p">1,2k sold out</p>
                  </div>

                  <div className="bungkus-price">
                    <p className="price1">$25.99</p>
                    <p className="price2">$25.99</p>
                  </div>
                  <div className="line"></div>
                </div>
                <span className="color">Color</span>

                <div className={styles["flex"]}>
                  <a href="#" className={styles["bulat"]}></a>
                  <a href="#" className={styles["white"]}></a>
                  <a href="#" className={styles["navy"]}></a>
                  <a href="#" className={styles["grey"]}></a>
                </div>
                <div style={{ paddingBottom: "16px" }}></div>
                <span className="color">Size</span>
                <div
                  className="d-flex"
                  style={{ fontFamily: "GitLab Sans, sans-serif" }}
                >
                  <button className={styles["s"]}>S</button>
                  <button className={styles["m"]}>M</button>
                  <button className={styles["m"]}>L</button>
                  <button className={styles["m"]}>XL</button>
                  <button className={styles["m"]}>XXL</button>
                </div>
                <div style={{ paddingBottom: "16px" }}></div>
                <div className="line"></div>

                {/* tabel */}
                <img
                  style={{ width: "415px", height: "246px" }}
                  src="/asset/detail/tabel.svg"
                  className="img-fluid"
                  alt="Product Image"
                />

                {/* artikel */}
                <div className="artikel">
                  <div style={{ marginBottom: "50px" }}>
                    <ProductDescription />
                  </div>

                  <div style={{ marginTop: "-10px" }}>
                    <button className={styles["fabric"]}>
                      Fabric & Care
                      <img
                        style={{
                          width: "18px",
                          height: "18px",
                          marginLeft: "300px",
                        }}
                        src="/asset/detail/arrow-down.svg"
                        className="img-fluid"
                        alt="Product Image"
                      />
                    </button>
                  </div>
                  <div style={{ paddingBottom: "50px" }}></div>
                  <button className={styles["fabric"]}>
                    Our Guarantee
                    <img
                      style={{
                        width: "18px",
                        height: "18px",
                        marginLeft: "300px",
                      }}
                      src="/asset/detail/arrow-down.svg"
                      className="img-fluid"
                      alt="Product Image"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* section 3*/}
            <div className="d-flex justify-content-start ">
              <QuantitySelector />
            </div>
          </div>
        </div>
        {/* section 4*/}
        <div
          className="dflex"
          style={{
            position: "relative",
            alignItems: "center",
            marginTop: "300px",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              color: "#434040",
              fontFamily: "GitLab Sans, sans-serif",
              fontSize: "32px",
              fontWeight: 600,
              letterSpacing: "0.64px",
            }}
          >
            Easy To Stretch
          </h3>

          <img
            style={{
              width: "100%",
              maxWidth: "1040px",
              height: "auto",
              marginTop: "40px",
            }}
            src="/asset/detail/playkaki.svg"
            className={styles["imgfluid"]}
            alt="gambar"
          />

          <a
            href="https://www.youtube.com/watch?v=4DhRokM7b3M&pp=ygUSa2FvcyBrYWtpIG11c2xpbWFo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{
                width: "48px",
                height: "48px",
                position: "absolute",
                bottom: "250px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
              src="/asset/detail/play.svg"
              className="playicon"
              alt="play"
            />
          </a>
        </div>
        <div style={{ paddingBottom: "50px" }}></div>

        <Overview />
      </div>
         
    </div>
  );
}
