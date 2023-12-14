import React, { useState, useEffect } from "react";
import styles from "../styles/product.module.css";
import dataIcon from "../data/icon.json";
import dataHero from "../data/kaki.json";

export default function Index() {
  const [jsonIcon, setJsonIcon] = useState([]);
  const [jsonHero, setJsonHero] = useState([]);

  useEffect(() => {
    setJsonIcon(dataIcon);
    setJsonHero(dataHero);
  }, []);

  return (
    <div className="d-flex">
      <img
        style={{ width: "405px", height: "388px" }} // Style should be an object with key-value pairs
        src="/asset/home/product.png"
        className="img-fluid"
        alt="img kaos kaki"
      />

      <div className={styles["hero3"]}>
        <div className={styles["card-container"]}>
          {jsonHero.map((item, index) => (
            <a key={index} className="group">
              <div className={styles["card"]}>
                <img
                  className={styles["black"]}
                  src={item.img}
                  alt={`Image ${index}`}
                  width="230px" // Atur ukuran lebar
                  height="325px" // Atur ukuran tinggi agar mengikuti proporsi asli
                  // marginLeft= "2px"
                />

                <img
                  className={styles["like"]}
                  src="../../asset/icon.png"
                  alt="Like icon"
                />
                <div className={styles["cover"]}>
                  <h1 className="p-3  ">Jetsetter Blacks : 16 - 20 mmHg</h1>
                  <h2>
                    <div className={styles["bungkus-card"]}>
                      <img
                        className={styles["star1"]}
                        src="../../asset/star1.png"
                        alt={`Star1 ${index}`}
                      />
                      <img
                        className={styles["star1"]}
                        src="../../asset/star1.png"
                        alt={`Star1 ${index}`}
                        style={{ marginLeft: "2px" }}
                      />
                      <img
                        className={styles["star1"]}
                        src="../../asset/star1.png"
                        alt={`Star1 ${index}`}
                        style={{ marginLeft: "2px" }}
                      />
                      <img
                        className={styles["star1"]}
                        src="../../asset/star1.png"
                        alt={`Star1 ${index}`}
                        style={{ marginLeft: "2px" }}
                      />
                      <img
                        className={styles["star1"]}
                        src="../../asset/star2.png"
                        alt={`Star2 ${index}`}
                        style={{ marginLeft: "2px" }}
                      />
                    </div>
                    <p>1,2k sold out</p>
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
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
