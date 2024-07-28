import CarCard from '../components/CarCardDelete/carCardDelete';
import React, { useState, useEffect } from 'react';
import styles from '../styles/delete.module.css';
import axios from 'axios';
import { useRouter } from 'next/router';

const Cars = () => {
  const router = useRouter();
  const [cars, setCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState('') ;

  const newRequest = axios.create({
    baseURL: 'https://garrymotorsllc.onrender.com/api/car',
    withCredentials: true,
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      const fetchCars = async () => {
        try {
          const response = await newRequest.get('/api/car');
          setCars(response.data);
        } catch (error) {
          console.error('Error fetching cars:', error);
        }
      };

      fetchCars();
    }
  }, [router]);

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  // Ensure car.name exists and is a string before calling toLowerCase()
  const filteredCars = cars.filter((car) =>
    (car.name || '').toLowerCase().includes(searchQuery)
  );

  const deleteCar = async (id) => {
    try {
      await newRequest.delete(`/${id}`);
      setCars(cars.filter((car) => car._id !== id));
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

  return (
    <div className={styles.container}>
      {/* <Search onSearch={handleSearch} /> */}
      {filteredCars.length > 0 ? (
        filteredCars.map((car) => (
          <CarCard key={car._id} car={car} onDelete={deleteCar} />
        ))
      ) : (
        <h2>Awesome Cars are on the way! Check back later.</h2>
      )}
    </div>
  );
};

export default Cars;
