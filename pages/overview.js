import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import dataProduct from '../data/product.json';
import styles from '../styles/overview.module.css';

export default function Overview() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [jsonProduct, setJsonProduct] = useState([]);

  useEffect(() => {
    setJsonProduct(dataProduct);
  }, []);

  // Fungsi untuk mengelompokkan item produk ke dalam array dengan 3 item per grup
  const chunkArray = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  // Mengelompokkan item produk menjadi array dengan 3 item per grup
  const groupedProducts = chunkArray(jsonProduct, 3);

  return (
    <div className={styles['bungkus-overview']}>
      <img src='../../asset/home/product.png' alt="Product overview" />
      <div>
        <button className={styles['button-new']}>NEW STYLE JUST LAUNCHED</button>
        <h1 className={styles['booms']}>BOOMS</h1>
        <h2 className={styles['shocks']}>SHOCKS</h2>
        <h3 className={styles['bring']}>Bring Your Feet & Legs Back to Life</h3>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={2000 /* dalam milidetik, contohnya 3000 untuk 3 detik */}>
        {groupedProducts.map((group, groupIdx) => (
          <Carousel.Item key={groupIdx}>
            <div className="d-flex justify-content-around">
              {group.map((item, idx) => (
                <div key={idx} className={styles['card']}>
                  <img src={item.img} style={{ width: '100%' }} alt={`Product slide ${groupIdx}-${idx}`} />
                  <img className={styles['like']} style={{ height: '32px' }} src='../../asset/icon.png' alt={`Like icon ${groupIdx}-${idx}`} />
                  <Carousel.Caption>
                    <div className={styles['cover']}>
                      <h1 className='p-3'>
                        Jetsetter Blacks : 16 - 20 mmHg
                      </h1>
                      <h2>
                        <div className={styles['bungkus-card']}>
                          <img className={styles['star1']} src='../../asset/star1.png' style={{ height: '12px' }} alt={`Star 1 ${groupIdx}-${idx}`} />
                          <img className={styles['star1']} src='../../asset/star1.png' style={{ marginLeft: '5px', height: '12px' }} alt={`Star 2 ${groupIdx}-${idx}`} />
                          <img className={styles['star1']} src='../../asset/star1.png' style={{ marginLeft: '5px', height: '12px' }} alt={`Star 3 ${groupIdx}-${idx}`} />
                          <img className={styles['star1']} src='../../asset/star1.png' style={{ marginLeft: '5px', height: '12px' }} alt={`Star 4 ${groupIdx}-${idx}`} />
                          <img className={styles['star1']} src='../../asset/star2.png' style={{ marginLeft: '5px', height: '12px' }} alt={`Star 5 ${groupIdx}-${idx}`} />
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
                  </Carousel.Caption>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
