/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import React, { useState, useEffect } from 'react';
import carousel1 from '../image/carousel1.webp';
import carousel2 from '../image/carousel2.webp';
import carousel3 from '../image/carousel3.webp';
import carousel4 from '../image/carousel4.webp';
import carousel5 from '../image/carousel5.webp';
import carousel6 from '../image/carousel6.webp';

const MyCarousel = ({
  images = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6],
  autoPlay = true,
  autoPlayTime = 6000,
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
      className="w-full m-auto h-4/12 md:w-160 lg:w-2/3 lg:mt-10 md:rounded-lg wrapper"
      {...props}
    >
      {/* inline-block h-1/2  */}
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
    </div>
  );
};

export default MyCarousel;
