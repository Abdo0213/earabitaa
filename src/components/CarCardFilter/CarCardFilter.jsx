import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CarCardFilter.module.css';

const CarCardFilter = ({ car }) => {
    const navigate = useNavigate();
    const [carData, setCarData] = useState(car);
    
    const handleCardClick = () => {
        navigate(`/car/${car.id}`, { state: { car: carData } });
    };

    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        setCarData(prevCar => ({ ...prevCar, fav: !prevCar.fav }));
    };

    return (
        <div className={styles.card} onClick={handleCardClick}>
            <div className={styles.leftContent}>
                <div>
                    <img src={carData.image[0]} alt={carData.title} className={styles.carImage}/>
                </div>
                <span className={styles.timeAgo}>{carData.posted}</span>
            </div>
            
            <div className={styles.cardContent}>
                <div className={styles.priceFav} >
                    <span className={styles.price}>{carData.price}</span>
                    <span className={styles.favContainer} onClick={handleFavoriteClick}>
                        {carData.fav ? (
                            <img 
                                className={styles.fav} 
                                src={'heartIconSolid.svg'} 
                                alt='Filled heart icon'
                                width={25}
                                height={25}
                            />
                        ) : (
                            <img 
                                className={styles.fav} 
                                src={'heart.svg'} 
                                alt='Empty heart icon' 
                                width={25}
                                height={25}
                            />
                        )}
                    </span>
                </div>
                <div className={styles.headerRow}>
                    <h3 className={styles.title}>{carData.title}</h3>
                </div>

                <div className={styles.location}>
                    <svg width="20" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.locationIcon}>
                        <path d="M8 0C3.85813 0 0.5 3.35813 0.5 7.5C0.5 9.13094 1.03469 10.6275 1.92344 11.8531C1.93938 11.8825 1.94187 11.9153 1.96 11.9434L6.96 19.4434C7.19188 19.7913 7.5825 20 8 20C8.4175 20 8.80812 19.7913 9.04 19.4434L14.04 11.9434C14.0584 11.9153 14.0606 11.8825 14.0766 11.8531C14.9653 10.6275 15.5 9.13094 15.5 7.5C15.5 3.35813 12.1419 0 8 0ZM8 10C6.61937 10 5.5 8.88062 5.5 7.5C5.5 6.11937 6.61937 5 8 5C9.38062 5 10.5 6.11937 10.5 7.5C10.5 8.88062 9.38062 10 8 10Z" fill="black"/>
                    </svg>
                    <span>{carData.location}</span>
                </div>
            </div>
        </div>
    );
};

export default CarCardFilter;