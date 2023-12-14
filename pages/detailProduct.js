import styles from "../styles/detailProduct.module.css";
import React, { useState, useEffect } from 'react';


export default function Index() {

  const stars = [1, 2, 3, 4, 5]; // Misalnya, array dengan nilai dari 1 sampai 5


  useEffect(() => {
    
  }, []);
  return (
    <div className="d-flex align-items-center ">
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

      {/* section 1 */}
      <div className="align-self-start">
        <div className={styles["section1"]}>
          <h2 className={styles["pack"]}>3-pack midnight-confetti</h2>
        <h4 className={styles["blacks"]}>Jetsetter Blacks : 16 - 20 mmHg</h4>
        <div className={styles["cover"]}>
                  
                  <h2>
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
                  </h2>
                  <h3>
                    <div className={styles["bungkus-price"]}>
                      <p className={styles["price1"]}>$25.99</p>
                      <p className={styles["price2"]}>$25.99</p>
                    </div>
                    <button>SALE</button>
                  </h3>
                </div>
        </div>
        
      </div>
    </div>
  );
};


