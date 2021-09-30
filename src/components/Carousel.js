/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import carousel1 from '../image/carousel1.png';
import carousel2 from '../image/carousel2.png';
import carousel3 from '../image/carousel3.png';
import carousel4 from '../image/carousel4.png';
import carousel5 from '../image/carousel5.png';
import carousel6 from '../image/carousel6.png';

const Carousel = ({
  images = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6],
  autoPlay = true,
  autoPlayTime = 6000,
  children,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide(slideIndex = currentSlide + 1) {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;

    setCurrentSlide(newSlideIndex);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, autoPlayTime);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div
      className="m-auto md:rounded-lg md:w-160 lg:w-270 lg:mt-10 h-1/2 wrapper"
      {...props}
    >
      {images.map((imageUrl, index) => (
        <div
          className="slide"
          key={index}
          style={{
            backgroundImage: `url(${imageUrl})`,
            marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined
          }}
        ></div>
      ))}
      <div className="childrenWrapper">{children}</div>
    </div>
  );
};

export default Carousel;
