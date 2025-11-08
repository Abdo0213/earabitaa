import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { carsData } from '../../data/data';
import styles from './Filter.module.css';

const Filter = () => {
    const navigate = useNavigate();
    const [filters, setFilters] = useState({
        section: 'Vehicle',
        typeOfCar: '',
        location: '',
        priceMin: '',
        priceMax: ''
    });

    // Extract unique values from carsData
    const sections = useMemo(() => {
        const unique = [...new Set(carsData.map(car => car.section).filter(Boolean))];
        return unique;
    }, []);

    const carTypes = useMemo(() => {
        const unique = [...new Set(carsData.map(car => car.carType).filter(Boolean))];
        return unique.sort();
    }, []);

    const locations = useMemo(() => {
        const allLocations = carsData
            .map(car => {
                if (car.location) {
                    // Extract city from "Area, City" format
                    const parts = car.location.split(',');
                    return parts.length > 1 ? parts[1].trim() : car.location.trim();
                }
                return null;
            })
            .filter(Boolean);
        const unique = [...new Set(allLocations)];
        return unique.sort();
    }, []);

    const handleChange = (field, value) => {
        setFilters({ ...filters, [field]: value });
    };

    const handleClearAll = () => {
        setFilters({
            section: '',
            typeOfCar: '',
            location: '',
            priceMin: '',
            priceMax: ''
        });
    };

    const handleSeeResults = () => {
        // Navigate to AllCars with filter parameters
        navigate('/cars', { state: { filters } });
    };

    const handleClose = () => {
        navigate(-1);
    };

    const handleSectionChange = (e) => {
        handleChange('section', e.target.value);
    };

    const handleTypeChange = (e) => {
        handleChange('typeOfCar', e.target.value);
    };

    const handleLocationChange = (e) => {
        handleChange('location', e.target.value);
    };

    return (
        <>
            <Header 
                header=""
                backNavigationPath="/home"
                leftIcon="xIcon.svg"
                onBack={handleClose}
                trailingText="Clear All"
                onTrailingIconClick={handleClearAll}
            />
            <div className={styles.contentWrapper}>
                <h2 className={styles.pageTitle}>Filter</h2>

                <div className={styles.filterSection}>
                    <div className={styles.filterItem}>
                        <div className={styles.filterLabel}>
                            <span className={styles.labelText}>Section</span>
                            <div className={styles.selectedValue}>
                                <img src="gridIcon.svg" alt="grid" className={styles.icon} />
                                <select
                                    className={styles.selectInput}
                                    value={filters.section}
                                    onChange={handleSectionChange}
                                >
                                    <option value="">Select</option>
                                    {sections.map(section => (
                                        <option key={section} value={section}>{section}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <button className={styles.changeButton} onClick={() => {/* Could open modal or dropdown */}}>
                            Change
                        </button>
                    </div>

                    <div className={styles.filterItem}>
                        <div className={styles.filterLabel}>
                            <span className={styles.labelText}>Type of car</span>
                            <select
                                className={styles.selectInput}
                                value={filters.typeOfCar}
                                onChange={handleTypeChange}
                            >
                                <option value="">Select</option>
                                {carTypes.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                        <button 
                            className={styles.arrowButton}
                            onClick={() => {/* Could open modal or dropdown */}}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18L15 12L9 6" stroke="#222831" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>

                    <div className={styles.filterItem}>
                        <div className={styles.filterLabel}>
                            <span className={styles.labelText}>Location</span>
                            <select
                                className={styles.selectInput}
                                value={filters.location}
                                onChange={handleLocationChange}
                            >
                                <option value="">Select</option>
                                {locations.map(location => (
                                    <option key={location} value={location}>{location}</option>
                                ))}
                            </select>
                        </div>
                        <button 
                            className={styles.arrowButton}
                            onClick={() => {/* Could open modal or dropdown */}}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18L15 12L9 6" stroke="#222831" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>

                    <div className={styles.filterItem}>
                        <div className={styles.filterLabel}>
                            <span className={styles.labelText}>Price</span>
                            <div className={styles.priceInputs}>
                                <input
                                    type="number"
                                    className={styles.priceInput}
                                    placeholder="Min"
                                    value={filters.priceMin}
                                    onChange={(e) => handleChange('priceMin', e.target.value)}
                                />
                                <input
                                    type="number"
                                    className={styles.priceInput}
                                    placeholder="Max"
                                    value={filters.priceMax}
                                    onChange={(e) => handleChange('priceMax', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <button className={styles.resultsButton} onClick={handleSeeResults}>
                    See 100+ results
                </button>
            </div>
            <Footer/>
        </>
    );
};

export default Filter;

