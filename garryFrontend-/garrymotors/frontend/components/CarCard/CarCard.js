import React from 'react';
import styles from "./CarCard.module.css";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
const CarCard = ({ car }) => {
  const getImages = (car) => {
    return Object.keys(car)
      .filter(key => key.startsWith('picturelink') && car[key])
      .map(key => ({ url: car[key] }));
  };
  const images = getImages(car);

  const buttonStyle = {
    width: "20px",
    background: 'none',
    border: '10px'
  };

  const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" /></svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z" /></svg></button>
  }

  const handleImageClick = (url) => {
    window.open(url, '_blank').focus();
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{car.car}</h2>
      <div className={styles.content}>
        <div className={styles.image}>
          <Slide {...properties} pauseOnHover={false}>
            {images.map((fadeImage, index) => (
              <div key={index}>
                <img style={{ width: '100%' }} src={fadeImage.url} onClick={() => handleImageClick(fadeImage.url)} />
              </div>
            ))}
          </Slide>
        </div>
        <div className={styles.specs}>
          <p>Mileage: {car.mileage} miles/litre</p>
          <p>VIN: {car.vin}</p>
          <p>Second Hand: {car.secondhand ? 'Yes' : 'No'}</p>
          <p>Exterior Color: {car.extcolor}</p>
          <p>Interior Color: {car.intcolor}</p>
          <p>Drivetrain: {car.drivetrain}</p>
          <hr className={styles.hr} />
          <p className={styles.desc}>Description:{car.description}</p>
        </div>
        <div className={styles.right}>
          <h2>Price: ${car.price}</h2>
          <div className={styles.contact}>
            <h2>Contact Now!</h2>
            <p>Call:<a href="tel:+1 (253) 886-4485">+1 (253) 886-4485</a></p>
            <p>Email:<a href="mailto:Garrymotors.LLC@gmail.com">Garrymotors.LLC@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
