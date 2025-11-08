// src/components/Filters/Filters.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Filters.module.css";

const Filters = () => {
  const navigate = useNavigate();

  const handleFiltersClick = () => {
    navigate("/filter");
  };

  return (
    <button className={styles.filtersButton} onClick={handleFiltersClick}>
      <img src="/filter.svg" alt="Filters" className={styles.filterIcon} />
      <span>Filters</span>
    </button>
  );
};

export default Filters;
