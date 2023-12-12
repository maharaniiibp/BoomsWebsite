import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "react-bootstrap";
import Product from "../components/product";
import styles from "../styles/Home.module.css";

const Index = () => {
  return (
    <div>
      {/* section 4 */}
      <p
        className="text-center"
        style={{
          color: "var(--neutral-100, #434040)",
          fontFamily: "GitLab Sans",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "56px",
          letterSpacing: "0.64px",
        }}
      >
        Deal Alert! Get free shipping and bulk <br />
        discounts when you order 2 or more <br />
        pairs
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="/asset/home/kaoskaki.png" // Pastikan path gambar sesuai
          className="img-fluid"
          alt="img kaos kaki"
        />
      </div>
      <div style={{ paddingBottom: '100px' }}></div>

      {/* section 5 */}
      <div className="d-flex mb-3">
        <h3
          className="p-2"
          style={{
            color: "var(--neutral-100, #434040)",
            fontFamily: "GitLab Sans",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "56px",
            letterSpacing: "0.64px",
            marginLeft: "105px", // Menambahkan margin ke kanan
          }}
        >
          Overview our product
        </h3>
        {/* <button
          className="p-2 border-0 btn-sm pb-2"
          style={{
            color: "var(--neutral-10, #F9FCFE)",
            fontFamily: "GitLab Sans",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 600,
            width: "140px", 
            height: "40px",
            justifyContent: "center",
            alignItems: "center",
            gap: "2px",
            borderRadius: "8px",
            background: "var(--primary-70, #00A4DF)",
            marginTop: "15px",
          }}
        >
          <span style={{ marginRight: "8px" }}>SHOP WOMEN</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </button> */}
        <div
          className="p-2"
          style={{ fontFamily: "GitLab Sans", marginTop: "15px" }}
        >
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              SHOP WOMAN
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Jetsetter Blacks</Dropdown.Item>
              <Dropdown.Item href="#">Jetsetter Blacks</Dropdown.Item>
              <Dropdown.Item href="#">Jetsetter Blacks</Dropdown.Item>
              <Dropdown.Item href="#">Jetsetter Blacks</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <button
          className="ms-auto p-2"
          style={{
            marginRight: "113px",
            height: "40px",
            width: "130px", // Menggunakan properti 'width' bukan 'weight'
            marginTop: "25px",
            alignItems: "center",
            borderRadius: "8px",
            border: "1px solid var(--primary-70, #00A4DF)",
            backgroundColor: "white",
            color: "var(--primary-90, #00688D)",
            fontFamily: "GitLab Sans",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "20px",
          }}
        >
          See all
        </button>
      </div>

      <div className="pb-lg-3"></div>
      <Product />
      <div style={{ paddingBottom: '150px' }}></div>
      
      {/* section 6 */}
     
     
    </div>
  );
};

export default Index;
