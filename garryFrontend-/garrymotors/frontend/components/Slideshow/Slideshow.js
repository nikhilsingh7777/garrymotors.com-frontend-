import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import styles from './Slideshow.module.css';
import Image from 'next/image';

const fadeImages = [
  {
    url: '/s1ref.png', 
  },
  {
    url: '/s2.png',
  },
  {
    url: '/s3.png',
  },
];

const buttonStyle = {
  width: '25px',
  background: 'none',
  border: '0px',
};

const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
        <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
      </svg>
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
        <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
      </svg>
    </button>
  ),
};

const Slideshow = () => {
  return (
    <div className={`${styles.slider} slide-container`}>
      <Fade {...properties} pauseOnHover={false}>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <Image
              src={fadeImage.url}
              alt={`Slide ${index + 1}`}
              width={800} 
              height={450}
              layout="responsive"
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
