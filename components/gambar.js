import React, { useState } from "react";

const Gambar = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageNumber) => {
    setSelectedImage(imageNumber === selectedImage ? null : imageNumber);
  };

  const getImageStyle = (imageNumber) => {
    return selectedImage === imageNumber
      ? { border: '4px solid var(--Primary-100, #004A65)' }
      : {};
  };

  return (
    <div>
      <div
        className="det1dan2 d-lg-flex justify-content-center"
        style={{ marginTop: "20px" }}
      >
        <img
          style={{ marginRight: "10px", ...getImageStyle(1) }}
          src="/asset/detail/gambar23.png"
          className="img-fluid"
          alt="Product Image"
          onClick={() => handleImageClick(1)}
        />
        <img
          style={{ ...getImageStyle(2) }}
          src="/asset/detail/2.png"
          className="img-fluid"
          alt="Product Image"
          onClick={() => handleImageClick(2)}
        />
      </div>

      <div
        className="det1dan2 d-lg-flex justify-content-center"
        style={{ marginTop: "20px" }}
      >
        <img
          style={{ marginRight: "10px", ...getImageStyle(3) }}
          src="/asset/detail/3.png"
          className="img-fluid"
          alt="Product Image"
          onClick={() => handleImageClick(3)}
        />
        <img
          style={{ ...getImageStyle(4) }}
          src="/asset/detail/gambar23.png"
          className="img-fluid"
          alt="Product Image"
          onClick={() => handleImageClick(4)}
        />
      </div>

      <div
        className="det1dan2 d-lg-flex justify-content-center"
        style={{ marginTop: "20px" }}
      >
        <img
          style={{ marginRight: "10px", ...getImageStyle(5) }}
          src="/asset/detail/2.png"
          className="img-fluid"
          alt="Product Image"
          onClick={() => handleImageClick(5)}
        />
        <img
          style={{ ...getImageStyle(6) }}
          src="/asset/detail/3.png"
          className="img-fluid"
          alt="Product Image"
          onClick={() => handleImageClick(6)}
        />
      </div>

      <div
        className="det1dan2 d-lg-flex justify-content-center"
        style={{ marginTop: "20px" }}
      >
        <img
          style={{ marginRight: "10px", ...getImageStyle(7) }}
          src="/asset/detail/3.png"
          className="img-fluid"
          alt="Product Image"
          onClick={() => handleImageClick(7)}
        />
        <img
          style={{ ...getImageStyle(8) }}
          src="/asset/detail/gambar23.png"
          className="img-fluid"
          alt="Product Image"
          onClick={() => handleImageClick(8)}
        />
      </div>
     
    </div>
  );
};

export default Gambar;
