// src/components/CarList/CarList.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CarCard from '../CarCard/CarCard';
import styles from './CarList.module.css';

const CarList = ({ cars, title = "Cars for Sale", showAllLink = true }) => {
  const navigate = useNavigate();
  
  const handleSeeAll = () => {
    navigate('/cars');
  };

  return (
    <div className={styles.carList}>
      <div className={styles.header}>
        <h2>{title}</h2>
        {showAllLink && (
          <button className={styles.seeAllButton} onClick={handleSeeAll}>
            See All
          </button>
        )}
      </div>
      
      <div className={styles.grid}>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarList;