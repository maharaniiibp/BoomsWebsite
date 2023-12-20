import React from "react";
import styles from "../styles/bundaran.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Bundaran = () => {
  return (
    <div className={styles['cover-bunder']}>
      <img src="../../asset/bunder.png"></img>
      <div className={styles['kiri']}>
        <h1>
          <p className={styles['pertama']}>Graduated Compression</p>
          <p className={styles['kedua']}>Diminish leg sweel, boost circulation and reduce varicose venis</p>
        </h1>
        <h2>
          <p className={styles['ketiga']}>Cuff Lining</p>
          <p className={styles['keempat']}>Hug your legs all day Dosen’t slip down</p>
        </h2>
      </div>
      <div className={styles['kanan']}>
        <h1>
          <p className={styles['pertama']}>Moisture Wicking</p>
          <p className={styles['kedua']}>Keeps legs cool no itching and no sweating</p>
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
