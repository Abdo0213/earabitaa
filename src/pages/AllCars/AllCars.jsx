// src/pages/AllCarsPage.jsx
import React from 'react';
import { carsData } from '../../data/data';
import CarList from '../../components/CarList/CarList';

const AllCars = () => {
  return (
    <div>
      <CarList cars={carsData} title="All Cars" showAllLink={false} />
    </div>
  );
};

export default AllCars;