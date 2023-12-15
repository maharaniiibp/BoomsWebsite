import styles from "../styles/detailProduct.module.css";
import React, { useState, useEffect } from "react";
import QuantitySelector from "@/components/quantity";
import Product from "../components/productcard";

export default function Index() {
  const stars = [1, 2, 3, 4, 5]; // Misalnya, array dengan nilai dari 1 sampai 5

  useEffect(() => {}, []);
  return (
    <div>
      <div className="d-flex justify-content-start ">
        {/* section gambar */}
        <div className={styles["kakibiru"]}>
          <img
            style={{ width: "331px", height: "384px" }}
            src="/asset/detail/kakibiru.png"
            className="img-fluid"
            alt="Product Image"
          />
          <div>
            <div className={styles["det1dan2"]}>
              <img
                style={{ width: "148px", height: "148px", marginRight: "38px" }}
                src="/asset/detail/1.png"
                className="img-fluid"
                alt="Product Image"
              />
              <img
                style={{ width: "148px", height: "148px" }}
                src="/asset/detail/2.png"
                className="img-fluid"
                alt="Product Image"
              />
            </div>

            {/* gambar ke bawah */}
            <div className={styles["det1dan2"]}>
              <img
                style={{ width: "148px", height: "148px", marginRight: "38px" }}
                src="/asset/detail/3.png"
                className="img-fluid"
                alt="Product Image"
              />
              <img
                style={{ width: "148px", height: "148px" }}
                src="/asset/detail/1.png"
                className="img-fluid"
                alt="Product Image"
              />
            </div>

            <div className={styles["det1dan2"]}>
              <img
                style={{ width: "148px", height: "148px", marginRight: "38px" }}
                src="/asset/detail/2.png"
                className="img-fluid"
                alt="Product Image"
              />
              <img
                style={{ width: "148px", height: "148px" }}
                src="/asset/detail/3.png"
                className="img-fluid"
                alt="Product Image"
              />
            </div>

            <div className={styles["det1dan2"]}>
              <img
                style={{ width: "148px", height: "148px", marginRight: "38px" }}
                src="/asset/detail/3.png"
                className="img-fluid"
                alt="Product Image"
              />
              <img
                style={{ width: "148px", height: "148px" }}
                src="/asset/detail/1.png"
                className="img-fluid"
                alt="Product Image"
              />
            </div>
          </div>
        </div>
        <div style={{ paddingBottom: "50px" }}></div>

        {/* section 1 */}
        <div className="d-flex justify-content-start">
          <div className={styles["section1"]}>
            <h2 className={styles["pack"]}>3-pack midnight-confetti</h2>
            <h4 className={styles["blacks"]}>
              Jetsetter Blacks : 16 - 20 mmHg
            </h4>
            <div className={styles["cover"]}>
              <div class="d-flex">
                <div className={styles["bungkus-card"]}>
                  <img
                    className={styles["star1"]}
                    src="../../asset/star1.png"
                    alt={`Star1 ${stars}`}
                  />
                  <img
                    className={styles["star1"]}
                    src="../../asset/star1.png"
                    alt={`Star1 ${stars}`}
                    style={{ marginLeft: "5px" }}
                  />
                  <img
                    className={styles["star1"]}
                    src="../../asset/star1.png"
                    alt={`Star1 ${stars}`}
                    style={{ marginLeft: "5px" }}
                  />
                  <img
                    className={styles["star1"]}
                    src="../../asset/star1.png"
                    alt={`Star1 ${stars}`}
                    style={{ marginLeft: "5px" }}
                  />
                  <img
                    className={styles["star1"]}
                    src="../../asset/star2.png"
                    alt={`Star2 ${stars}`}
                    style={{ marginLeft: "5px" }}
                  />
                </div>
                <p className={styles["p"]}>1,2k sold out</p>
              </div>

              <div className={styles["bungkus-price"]}>
                <p className={styles["price1"]}>$25.99</p>
                <p className={styles["price2"]}>$25.99</p>
              </div>
              <div className={styles["line"]}></div>
            </div>
            <span className={styles["color"]}>Color</span>

            <div className={styles["flex"]}>
              <a href="#" className={styles["bulat"]}></a>
              <a href="#" className={styles["white"]}></a>
              <a href="#" className={styles["navy"]}></a>
              <a href="#" className={styles["grey"]}></a>
            </div>
            <div style={{ paddingBottom: "16px" }}></div>
            <span className={styles["color"]}>Size</span>
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
            <div className={styles["line"]}></div>

            {/* tabel */}
            <img
              style={{ width: "415px", height: "246px" }}
              src="/asset/detail/tabel.svg"
              className="img-fluid"
              alt="Product Image"
            />

            {/* artikel */}
            <div className="artikel">
              <button className={styles["deskripsi"]}>
                Description
                <img
                  style={{ width: "18px", height: "18px", marginLeft: "290px" }}
                  src="/asset/detail/arrow-down.svg"
                  className="img-fluid"
                  alt="Product Image"
                />
              </button>
              <p className={styles["fancy"]}>
                Fancy feet can be happy feet, too. Try our dot <br />
                collection for something a little more formal, but just as
                effective.
                <br />
                <br />
                Make every moment sparkle with Wellow's Midnight Confetti
                collection.
                <br />
                <br />
                At 18-25 mmHg, our socks gently wrap around feet, ankles, and
                legs to provide the support that stimulates circulation without
                feeling tight. We call that the BoomsFit. 
              </p>
              <div style={{ marginTop: "-10px" }}>
                <button className={styles["fabric"]}>
                  Fabric & Care
                  <img
                    style={{
                      width: "18px",
                      height: "18px",
                      marginLeft: "290px",
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
                  style={{ width: "18px", height: "18px", marginLeft: "290px" }}
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
      {/* section 4*/}
      <div
        class="d-flex flex-column mb-3"
        style={{
          position: "relative",
          alignItems: "center",
          marginTop: "150px",
        }}
      >
        <h3
          style={{
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
          style={{ width: "1040px", height: "544px", marginTop: "40px" }}
          src="/asset/detail/playkaki.svg"
          className="img-fluid"
          alt="play"
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
              bottom: "272px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            src="/asset/detail/play.svg"
            className="img-fluid"
            alt="play"
          />
        </a>
      </div>
      <div style={{ marginTop: "100px", marginBottom: "80px" }}>
        <Product />
      </div>
    </div>
  );
}
