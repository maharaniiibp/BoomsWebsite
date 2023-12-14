import React from "react";
import styles from "../styles/index.module.css";

const Bundaran = () => {
  return (
    <div>
      <p
        className="text-center"
        style={{
          color: "var(--neutral-100, #434040)",
          fontFamily: "GitLab Sans, sans-serif",
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

      {/* bundar2 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <img
          src="/asset/home/kaoskaki.png"
          className="img-fluid"
          alt="img kaos kaki"
          style={{ maxWidth: "100%", height: "auto" }}
        />

        <section>
          <img
            src="asset/home/bundar1.png"
            alt=""
            style={{
              position: "absolute",
              width: "250px",
              height: "60px",
              top: "50%",
              left: "50%",
              transform: "translate(-5%, -350%)",
              maxWidth: "100%",
            }}
            className={styles["responsive-image"]}
          />
          <h3
            style={{
              color: "#FFF",
              position: "absolute",
              top: "30%",
              left: "46%",
              fontFamily: "GitLab Sans, sans-serif",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "32px",
              transform: "translate(80%, -350%)",
              letterSpacing: "0.36px",
            }}
          >
            Moisture Wicking
          </h3>

          <h5
            style={{
              color: "#FFF",
              position: "absolute",
              top: "53%",
              left: "550px",
              fontFamily: "GitLab Sans, sans-serif",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "24px",
              transform: "translate(80%, -350%)",
              letterSpacing: "0.32px",
              wordWrap: "break-word",
            }}
          >
            Keeps legs cool no itching <br /> and no sweating
          </h5>
        </section>

        <section>
          <img
            src="asset/home/bundar2.png"
            alt=""
            style={{
              position: "absolute",
              width: "321px",
              height: "60px",
              top: "50%",
              left: "50%",
              transform: "translate(-110%, -238%)",
              maxWidth: "100%",
            }}
            className={styles["responsive-image"]}
          />
          <h3
            style={{
              color: "#FFF",
              position: "absolute",
              top: "30%",
              left: "46%",
              fontFamily: "GitLab Sans, sans-serif",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "32px",
              transform: "translate(-140%, -160%)",
              letterSpacing: "0.36px",
            }}
          >
            Graduated Compression
          </h3>

          <h5
            style={{
              color: "#FFF",
              position: "absolute",
              top: "55%",
              left: "550px",
              fontFamily: "GitLab Sans, sans-serif",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "24px",
              transform: "translate(-143%, -150%)",
              letterSpacing: "0.32px",
              wordWrap: "break-word",
            }}
          >
            Diminish leg sweel, boost <br /> circulation and reduce <br />{" "}
            varicose venis
          </h5>
        </section>

        <section>
          <img
            src="asset/home/bundar3.png"
            alt=""
            style={{
              position: "absolute",
              width: "321px",
              height: "60px",
              top: "90%",
              left: "52%",
              transform: "translate(-110%, -238%)",
              maxWidth: "100%",
            }}
            className={styles["responsive-image"]}
          />
          <h3
            style={{
              color: "#FFF",
              position: "absolute",
              top: "72%",
              left: "35%",
              fontFamily: "GitLab Sans, sans-serif",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "32px",
              transform: "translate(-140%, -160%)",
              letterSpacing: "0.36px",
            }}
          >
            Cuff Lining
          </h3>

          <h5
            style={{
              color: "#FFF",
              position: "absolute",
              top: "87%",
              left: "530px",
              fontFamily: "GitLab Sans, sans-serif",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "24px",
              transform: "translate(-143%, -150%)",
              letterSpacing: "0.32px",
              wordWrap: "break-word",
            }}
          >
            Hug your legs all day <br />
            Dosen’t slip down{" "}
          </h5>
        </section>

        <section>
          <img
            src="asset/home/bundar4.png"
            alt=""
            style={{
              position: "absolute",
              width: "272px",
              height: "60px",
              top: "90%",
              left: "83%",
              transform: "translate(-110%, -238%)",
              maxWidth: "100%",
            }}
            className={styles["responsive-image"]}
          />
          <h3
            style={{
              color: "#FFF",
              position: "absolute",
              top: "70%",
              left: "77%",
              fontFamily: "GitLab Sans, sans-serif",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "32px",
              transform: "translate(-140%, -160%)",
              letterSpacing: "0.36px",
            }}
          >
            Cuff Lining
          </h3>

          <h5
            style={{
              color: "#FFF",
              position: "absolute",
              top: "93%",
              left: "82%",
              fontFamily: "GitLab Sans, sans-serif",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "24px",
              transform: "translate(-143%, -150%)",
              letterSpacing: "0.32px",
              wordWrap: "break-word",
            }}
          >
            • Super comfortable <br />
            • Easy to put on
            <br />• Wear all day
          </h5>
        </section>
      </div>
    </div>
  );
};

export default Bundaran;
