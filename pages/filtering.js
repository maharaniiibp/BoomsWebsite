import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import styles from "../styles/filtering.module.css";
import dataIcon from "../data/icon.json";
import dataHero from "../data/hero-card.json";
import { Dropdown } from "react-bootstrap";
import Product from "../components/productcard";
import Bundaran from "@/components/bundaran";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import Overview from "./overview";

export default function Try() {
  return (
    <>
      <div
      className={styles['luar']}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "10rem",
          marginBottom: "4rem",
          width: "auto"
        }}
      >
        <Image
          src="/asset/testimoni.png"
          alt="bg"
          
          width={500}
          height={10}
          className={styles['testimoni']}
        />
        <div
        className={styles['bungkus']}
          style={{
            color: "black",
            marginTop: "-25rem",
            backgroundColor: "white",
            padding: "2rem",
            textAlign: 'start'
          }}
        >
          <Row
          className={styles['putih']}
           style={{alignItems: 'center', marginBottom: '30px'}}
          >
            <Col xs={12} md={2} className="text-center mb-3 mb-md-0">
              <Image
                src="/asset/home/fathu.png"
                alt="bg"
                
                width="70"
                height="70"
                className={styles['fathu']}
              />
            </Col>
            <Col xs={12} md={10} className={styles['customer']}>
              <div className="ms-4">Fathu Bagus Septihan</div>
              <div className="ms-4">Customer</div>
              <div className="ms-4">Depok, Sleman, Yogyakarta</div>
            </Col>
          </Row>

          <p
            className={styles['text-des']}
            style={{  maxWidth: "30rem", textAlign: 'start' }}
          >
            Lorem ipsum dolor sit amet consectetur. In velit sed nullam quis.
            Augue tristique feugiat ultricies sit molestie volutpat pretium.
            Lorem ipsum dolor sit amet consectetur. In velit sed nullam quis.
            Augue tristique feugiat ultricies sit molestie volutpat pretium.
          </p>

          <div className="text-center">
            <Image
              src="/asset/home/bundaran.svg"
              alt="bg"
              width={60}
              height={10}
            />
          </div>
        </div>
      </div>
    </>
  );
}