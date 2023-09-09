import React, { useState, useEffect } from "react";

const ImageAutoSlide = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="flex overflow-hidden w-screen relative text-[--bg-dark] shadow-lg rounded-[8px]">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.imgPath}
          alt={image.imgPath}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.6s ease 0.4s",
          }}
          className="min-w-full"
        />
      ))}
      <div className="absolute flex h-full">
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.6s ease 0.4s",
            }}
            className="h-full flex flex-col justify-center w-screen px-2 text-[0.75rem] md:text-2xl lg:text-3xl font-semibold">
            {image.label.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageAutoSlide;
