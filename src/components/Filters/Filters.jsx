// src/components/Filters/Filters.jsx
import React from 'react';
import styles from './Filters.module.css';

const Filters = ({ onFilterChange }) => {
  const handleFilterChange = (filterType, value) => {
    if (onFilterChange) {
      onFilterChange(filterType, value);
    }
  };

  return (
    <div className={styles.filters}>
      <div className={styles.filterSection}>
        <button 
          className={styles.filterButton}
          onClick={() => handleFilterChange('category', 'all')}
        >
          All
        </button>
        <button 
          className={styles.filterButton}
          onClick={() => handleFilterChange('category', 'country')}
        >
          Country
        </button>
        <button 
          className={styles.filterButton}
          onClick={() => handleFilterChange('category', 'vehicle')}
        >
          Vehicle
        </button>
      </div>
      
      <div className={styles.filterOptions}>
        <select 
          className={styles.filterSelect}
          onChange={(e) => handleFilterChange('price', e.target.value)}
        >
          <option value="">Price</option>
          <option value="0-1000">EGP 0 - 1000</option>
          <option value="1000-3000">EGP 1000 - 3000</option>
          <option value="3000-5000">EGP 3000 - 5000</option>
          <option value="5000+">EGP 5000+</option>
        </select>
        
        <select 
          className={styles.filterSelect}
          onChange={(e) => handleFilterChange('type', e.target.value)}
        >
          <option value="">Type</option>
          <option value="BMW">BMW</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Audi">Audi</option>
          <option value="Porsche">Porsche</option>
          <option value="Other">Other</option>
        </select>
        
        <select 
          className={styles.filterSelect}
          onChange={(e) => handleFilterChange('location', e.target.value)}
        >
          <option value="">Location</option>
          <option value="Cairo">Cairo</option>
          <option value="Giza">Giza</option>
          <option value="Alexandria">Alexandria</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;