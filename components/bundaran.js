import React, { useEffect } from "react";
import styles from "../styles/bundaran.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Bundaran = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Durasi animasi dalam milidetik
      once: false, // Animasi hanya terjadi sekali
    });
  }, []);

  return (
    <div className={styles['cover-bunder']}>
      <img src="../../asset/bunder.png" alt="Bunder Image" />
      <div className={styles['kiri']} data-aos="fade-right" data-aos-duration="3000" >
        <h1>
          <p className={styles['pertama']}>Graduated Compression</p>
          <p className={styles['kedua']}>Diminish leg swell, boost circulation and reduce varicose veins</p>
        </h1>
        <h2>
          <p className={styles['ketiga']}>Cuff Lining</p>
          <p className={styles['keempat']}>Hug your legs all day Doesn’t slip down</p>
        </h2>
      </div>
      <div className={styles['kanan']} data-aos="fade-left" data-aos-duration="3000">
        <h1>
          <p className={styles['pertama']}>Moisture Wicking</p>
          <p className={styles['kedua']}>Keeps legs cool, no itching, and no sweating</p>
        </h1>
        <h2>
          <p className={styles['ketiga']}>Cuff Lining</p>
          <p className={styles['keempat']}>Super comfortable
            Easy to put on
            Wear all day</p>
        </h2>
      </div>
    </div>
  );
};

export default Bundaran;
