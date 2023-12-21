import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import dataProduct from "../data/product.json";
import styles from "../styles/overview.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Overview() {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [jsonProduct, setJsonProduct] = useState([]);

  useEffect(() => {
    setJsonProduct(dataProduct);
    AOS.init();
  }, []);

  const chunkArray = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const groupedProducts = chunkArray(jsonProduct, visibleCards);

  useEffect(() => {
    function updateVisibleCards() {
      if (window.innerWidth < 768) {
        setVisibleCards(1); // Menampilkan 1 card saat lebar layar kurang dari 768 pixel
      } else if (window.innerWidth === 768) {
        setVisibleCards(2); // Menampilkan 2 card saat lebar layar sama dengan 768 pixel
      } else {
        setVisibleCards(3); // Menampilkan 3 card untuk lebar layar lebih dari 768 pixel
      }
    }

    updateVisibleCards();

    function handleResize() {
      updateVisibleCards();
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={styles["product-3"]}>
      <div className={styles["bungkus-overview"]} 
      // data-aos="zoom-in-up"
      // data-aos-duration="2000"
      >
        <img src="../../asset/home/product.png" alt="Product overview" />
        <div>
          <button className={styles["button-new"]}>
            NEW STYLE JUST LAUNCHED
          </button>
          <h1 className={styles["booms"]}>BOOMS</h1>
          <h2 className={styles["shocks"]}>SHOCKS</h2>
          <h3 className={styles["bring"]}>
            Bring Your Feet & Legs Back to Life
          </h3>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={2500}>
          {groupedProducts.map((group, groupIdx) => (
            <Carousel.Item key={groupIdx}>
              <div className="d-flex justify-content-around">
                {group.map((item, idx) => (
                  <div key={idx} className={styles["card"]}>
                    <img
                      src={item.img}
                      style={{ width: "100%" }}
                      alt={`Product slide ${groupIdx}-${idx}`}
                    />
                    <img
                      className={styles["like"]}
                      style={{ height: "32px" }}
                      src="../../asset/Icon.png"
                      alt={`Like icon ${groupIdx}-${idx}`}
                    />
                    <Carousel.Caption>
                      <div className={styles["cover"]}>
                        <h1 className="p-3">Jetsetter Blacks : 16 - 20 mmHg</h1>
                        <h2>
                          <div className={styles["bungkus-card"]}>
                            <img
                              className={styles["star1"]}
                              src="../../asset/star1.png"
                              style={{ height: "12px", width: "auto" }}
                              alt={`Star 1 ${groupIdx}-${idx}`}
                            />
                            <img
                              className={styles["star1"]}
                              src="../../asset/star1.png"
                              style={{
                                marginLeft: "5px",
                                height: "12px",
                                width: "auto",
                              }}
                              alt={`Star 2 ${groupIdx}-${idx}`}
                            />
                            <img
                              className={styles["star1"]}
                              src="../../asset/star1.png"
                              style={{
                                marginLeft: "5px",
                                height: "12px",
                                width: "auto",
                              }}
                              alt={`Star 3 ${groupIdx}-${idx}`}
                            />
                            <img
                              className={styles["star1"]}
                              src="../../asset/star1.png"
                              style={{
                                marginLeft: "5px",
                                height: "12px",
                                width: "auto",
                              }}
                              alt={`Star 4 ${groupIdx}-${idx}`}
                            />
                            <img
                              className={styles["star1"]}
                              src="../../asset/star2.png"
                              style={{
                                marginLeft: "5px",
                                height: "12px",
                                width: "auto",
                              }}
                              alt={`Star 5 ${groupIdx}-${idx}`}
                            />
                          </div>
                          <p>1,2k sold out</p>
                        </h2>
                        <h3>
                          <div className={styles["bungkus-price"]}>
                            <p className={styles["price1"]}>$25.99</p>
                            <p className={styles["price2"]}>$25.99</p>
                          </div>
                          <button
                            onClick={() =>
                              (window.location.href = "/detailProduct")
                            }
                          >
                            SALE
                          </button>
                        </h3>
                      </div>
                    </Carousel.Caption>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div
        className="p-2 d-flex justify-content-center align-items-center"
        style={{
          gap: "2px",
        }}
      >
        <img
          className="w-20" // Adjust the width percentage as needed
          src="/asset/home/bundaran.svg"
          alt=""
        />
      </div>
    </section>
  );
}
