import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import styles from './Slideshow.module.css';
import Image from 'next/image';

const fadeImages = [
  {
    url: '/s1.png', // Use relative paths for static files in the 'public' directory
  },
  {
    url: '/s2.png',
  },
  {
    url: '/s3.png',
  },
  // Uncomment and replace with your actual image URLs if needed
  // {
  //   url: 'https://images.pexels.com/photos/326259/pexels-photo-326259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  // },
  // {
  //   url: 'https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  // },
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
              width={800} // Adjust the width and height as per your design requirements
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
