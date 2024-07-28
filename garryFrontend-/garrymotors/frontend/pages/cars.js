import CarCard from '@/components/CarCard/CarCard';
import React, { useState, useEffect } from 'react';
import styles from "@/styles/Cars.module.css";
import newRequest from '../utils/newRequest';
import Search from '@/components/Search/Search';
import Image from 'next/image';

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await newRequest.get('/');
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchCars();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };


  const filteredCars = cars.filter(car => 
    (car.name || '').toLowerCase().includes(searchQuery)
  );

  return (
    <div className={styles.container}>
      <Image src="/garage.png" alt="Garage" className={styles.carimg} width={800} height={400} />
      <Image src="/garages.png" alt="Garages" className={styles.carimgs} width={800} height={400} />
      <Search onSearch={handleSearch}/>
      {filteredCars.length > 0 ? (
        filteredCars.map(car => <CarCard key={car._id} car={car} />)
      ) : (
        <h2>Awesome Cars are on the way! Check back later.</h2>
      )}
    </div>
  );
}

export default Cars;
