// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="shadow" style={{ backgroundColor: "#D9F5FF" }}>
      <div className="d-flex flex-column mx-auto py-5" style={{ width: "90%" }}>
        <div className="flex-start d-flex justify-content-around">
          <div className="ml-2">
            <p
              className="h5 mb-4 fs-5"
              style={{
                fontWeight: 600,
                fontFamily: "GitLab Sans",
                fontStyle: "normal",
              }}
            >
              Can We Help?
            </p>
            <div
              className="d-flex flex-column fs-8"
              style={{ cursor: "pointer", padding: 0 }}
            >
              <a href="/" style={{ textDecoration: "none", color: "#333232", fontFamily: "GitLab Sans" }}>
                Email Us: support@wearbooms.com
              </a>
              <a href="/" style={{ textDecoration: "none", color: "#333232", fontFamily: "GitLab Sans" }}>
                Call: 1-800-730-1089
              </a>
              <a href="/" style={{ textDecoration: "none", color: "#333232", fontFamily: "GitLab Sans" }}>
                USA - California
              </a>
            </div>
          </div>
          <div>
            <p
              className="h5 mb-4 fs-5"
              style={{
                fontWeight: 600,
                fontFamily: "GitLab Sans",
                fontStyle: "normal",
              }}
            >
              Booms Information
            </p>
            <div
              className="d-flex flex-column fs-8"
              style={{ cursor: "pointer", padding: 0 }}
            >
              <a href="/" style={{ textDecoration: "none", color: "#333232", fontFamily: "GitLab Sans" }}>
                Sizing Chart
              </a>
              <a href="/" style={{ textDecoration: "none", color: "#333232", fontFamily: "GitLab Sans" }}>
                Blog
              </a>
              <a href="/" style={{ textDecoration: "none", color: "#333232", fontFamily: "GitLab Sans" }}>
                Shipping
              </a>
              <a href="/" style={{ textDecoration: "none", color: "#333232", fontFamily: "GitLab Sans" }}>
                Refund Policy
              </a>
              <a href="/" style={{ textDecoration: "none", color: "#333232", fontFamily: "GitLab Sans" }}>
                Privacy Policy
              </a>
              <a href="/" style={{ textDecoration: "none", color: "#333232", fontFamily: "GitLab Sans" }}>
                Terms Of Servicey
              </a>
            </div>
          </div>
          <div>
            <p
              className="h5 mb-4 fs-5"
              style={{
                fontWeight: 600,
                fontFamily: "GitLab Sans",
                fontStyle: "normal",
              }}
            >
              Quick Links
            </p>
            <div
              className="d-flex flex-column fs-8 "
              style={{ cursor: "pointer", padding: 0 }}
            >
              <a href="/" style={{ textDecoration: "none", color: "#333232", fontFamily: "GitLab Sans"}}>
                Shop
              </a>
              <a href="/" style={{ textDecoration: "none", color: "#333232", fontFamily: "GitLab Sans" }}>
                Log In
              </a>
              <a href="/" style={{ textDecoration: "none", color: "#333232", fontFamily: "GitLab Sans" }}>
                Create Account
              </a>
              <a href="/" style={{ textDecoration: "none", color: "#333232", fontFamily: "GitLab Sans" }}>
                About Us
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-2 col-4">
            <div class="mb-4">
              <p
                className="h5 mb-4 fs-5"
                style={{
                  fontWeight: 600,
                  fontFamily: "GitLab Sans",
                  fontStyle: "normal",
                }}
              >
                Follow Us
              </p>
              <p
                class="d-flex flex-row align-items-center fs-8"
                style={{ color: "#333232", fontFamily: "GitLab Sans" }}
              >
                {" "}
                <img src="asset/fb.png" alt="Small Image" class="me-2" />
                 Facebook
              </p>
              <p
                class="d-flex flex-row align-items-cente fs-8"
                style={{ color: "#333232", fontFamily: "GitLab Sans" }}
              >
                {" "}
                <img src="asset/ig.png" alt="Small Image" class="me-2" />
                 Instagram
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex mt-4 mx-auto" style={{ width: "100%" }}>
          <p className="mr-auto p-5" style={{ width: "50%", fontFamily: "GitLab Sans" }}>
            &copy; Devwares, 2023. All rights reserved.
          </p>

          <img
            className="mt-5  mx-2 "
            src="/asset/a.png"
            alt="a"
            style={{ width: "38px", height: "24px" }}
          />
          <img
            className="mt-5   mx-2 "
            src="/asset/b.png"
            alt="b"
            style={{ width: "38px", height: "24px" }}
          />
          <img
            className="mt-5   mx-2 "
            src="/asset/c.png"
            alt="c"
            style={{ width: "38px", height: "24px" }}
          />
          <img
            className="mt-5   mx-2"
            src="/asset/d.png"
            alt="d"
            style={{ width: "38px", height: "24px" }}
          />
          <img
            className="mt-5   mx-2"
            src="/asset/e.png"
            alt="e"
            style={{ width: "38px", height: "24px" }}
          />
          <img
            className="mt-5   mx-2"
            src="/asset/f.png"
            alt="f"
            style={{ width: "38px", height: "24px" }}
          />
          <img
            className="mt-5   mx-2"
            src="/asset/g.png"
            alt="g"
            style={{ width: "38px", height: "24px" }}
          />
          <img
            className="mt-5   mx-2"
            src="/asset/h.png"
            alt="h"
            style={{ width: "38px", height: "24px" }}
          />
          <img
            className="mt-5   mx-2"
            src="/asset/i.png"
            alt="i"
            style={{ width: "38px", height: "24px" }}
          />
          <img
            className="mt-5  mx-2 "
            src="/asset/j.png"
            alt="j"
            style={{ width: "38px", height: "24px" }}
          />
          <div>
            <img
              className="mt-5   mx-2"
              src="/asset/k.png"
              alt="k"
              style={{ width: "38px", height: "24px" }}
            />
            <img
              className="mt-0   mx-2 "
              src="/asset/l.png"
              alt="l"
              style={{ width: "38px", height: "24px" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
