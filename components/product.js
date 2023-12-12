import React from "react";
import styles from "../styles/Home.module.css";

const Product = () => {
  return (
    <div className="d-flex">
      <img
        src="/asset/home/product.png"
        className="img-fluid"
        alt="img kaos kaki"
      />
      <div className={styles.scrollContainer}>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col-md-3">
            <div className="card">
              <img
                src="asset/home/kuning.png"
                className="card-img-top"
                alt="Card 1"
              />
              <div className="card-body">
                <h5 className="card-title">Card 1 Title</h5>
                <p className="card-text">dd</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-3">
            <div className="card">
              <img
                src="asset/home/biru.png"
                className="card-img-top"
                alt="Card 2"
              />
              <div className="card-body">
                <h5 className="card-title">Card 1 Title</h5>
                <p className="card-text">dd</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img
                src="asset/home/kuning.png"
                className="card-img-top"
                alt="Card 3"
              />
              <div className="card-body">
                <h5 className="card-title">Card 1 Title</h5>
                <p className="card-text">dd</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img
                src="asset/home/biru.png"
                className="card-img-top"
                alt="Card 4"
              />
              <div className="card-body">
                <h5 className="card-title">Card 1 Title</h5>
                <p className="card-text">dd</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Product;
