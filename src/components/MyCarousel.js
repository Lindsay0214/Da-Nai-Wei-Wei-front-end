/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useState, useEffect } from 'react';
import carousel1 from '../image/carousel1.png';
import carousel2 from '../image/carousel2.png';
import carousel3 from '../image/carousel3.png';
import carousel4 from '../image/carousel4.png';
import carousel5 from '../image/carousel5.png';
import carousel6 from '../image/carousel6.png';

const MyCarousel = () => {
  return (
    <div>
      <Carousel
        plugins={[
          'infinite',
          {
            resolve: autoplayPlugin,
            options: {
              interval: 4000
            }
          }
        ]}
        animationSpeed={1000}
        className="m-auto lg:mt-10"
      >
        <img
          className="w-full md:w-160 lg:w-388 lg:rounded-lg"
          src={carousel1}
        />
        <img
          className="w-full md:w-160 lg:w-388 lg:rounded-lg"
          src={carousel2}
        />
        <img
          className="w-full md:w-160 lg:w-388 lg:rounded-lg"
          src={carousel3}
        />
        <img
          className="w-full md:w-160 lg:w-388 lg:rounded-lg"
          src={carousel4}
        />
        <img
          className="w-full md:w-160 lg:w-388 lg:rounded-lg"
          src={carousel5}
        />
        <img
          className="w-full md:w-160 lg:w-388 lg:rounded-lg"
          src={carousel6}
        />
      </Carousel>
    </div>
  );
};

export default MyCarousel;
