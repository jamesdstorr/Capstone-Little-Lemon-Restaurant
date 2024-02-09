import React, { useState } from "react";
import style from "./Gallery.module.css";

const Gallery = () => {
  const images = [
    "/images/restaurant1.jpg",
    "/images/restaurant2.jpg",
    "/images/restaurant3.jpg",
    "/images/restaurant4.jpg",
    "/images/restaurant5.jpg",
    "/images/restaurant6.jpg",
  ];
  const [imageRange, setImageRange] = useState({ from: 0, to: 3 });
  
  const prevImage = () => {
    if (imageRange.from > 0) {
      setImageRange({ from: imageRange.from - 1, to: imageRange.to - 1 });
    }
  };

  const nextImage = () => {
    if (imageRange.to < images.length) {
      setImageRange({ from: imageRange.from + 1, to: imageRange.to + 1 });
    }
  };

  return (
    <div className={style.gallery_section}>
      <div className={style.gallery_content}>
        <div className={style.gallery_images}>
          {images.slice(imageRange.from, imageRange.to).map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              style={{ width: "50%", maxHeight: "250px", objectFit: "cover" }}
            />
          ))}
        </div>
        <div className={style.gallery_buttons}>
          <button onClick={prevImage} disabled={imageRange.from === 0}>
            Previous
          </button>
          <button onClick={nextImage} disabled={imageRange.to === images.length}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
