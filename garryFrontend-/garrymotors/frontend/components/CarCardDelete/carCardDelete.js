import React from 'react';
import styles from '../../styles/carCardDelete.module.css';
import PropTypes from 'prop-types';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
const carCardDelete = ({ car, onDelete }) => {

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

  const handleDelete = () => {
    if (onDelete && typeof onDelete === 'function') {
      onDelete(car._id);
    } else {
      console.error('onDelete is not a function');
    }
  };
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{car.car}</h2>
      <div className={styles.content}>
        <div className={styles.image}>
          <Slide {...properties} pauseOnHover={false}>
            {images.map((fadeImage, index) => (
              <div key={index}>
                <img style={{ width: '100%' }} src={fadeImage.url} />
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
          <p className={styles.desc}>Description: {car.description}</p>
        </div>
        <div className={styles.right}>
          <div className={styles.contact}>
            <button className={styles.delete} onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};
carCardDelete.propTypes={
  car: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    car: PropTypes.string.isRequired,
    picturelink: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    vin: PropTypes.string.isRequired,
    secondhand: PropTypes.bool.isRequired,
    extcolor: PropTypes.string.isRequired,
    intcolor: PropTypes.string.isRequired,
    drivetrain: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default carCardDelete ;
