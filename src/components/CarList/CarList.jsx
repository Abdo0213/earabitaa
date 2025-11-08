import { useNavigate } from 'react-router-dom';
import CarCard from '../CarCard/CarCard';
import styles from './CarList.module.css';
import CarCardFilter from '../CarCardFilter/CarCardFilter';

const CarList = ({ cars, title = "", showAllLink = true, filterOrAll = false, loading, showSeeAllAtEnd = false }) => {
    
    const navigate = useNavigate();
    
    const handleSeeAll = () => {
        navigate('/cars');
    };

    if (loading) {
        return <h2>Loading......</h2>
    }
    

    return (
        <div className={styles.carList}>
            {!filterOrAll && 
                (<div className={styles.header}>
                    <h2>{title}</h2>
                    {showAllLink && (
                        <button className={styles.seeAllButton} onClick={handleSeeAll}>
                            See All
                        </button>
                    )}
                </div>
            )}
            
            {!filterOrAll && 
                (<div className={styles.grid}>
                    {cars.map((car) => (
                        <CarCard key={car.id} car={car} />
                    ))}
                </div>
            )}
            {filterOrAll && 
                (<>
                    <div className= {styles.CarCardFilter} >
                        {cars.map((car) => (
                            <CarCardFilter key={car.id} car={car} />
                        ))}
                    </div>
                    {showSeeAllAtEnd && (
                        <div className={styles.seeAllEndContainer}>
                            <button className={styles.seeAllButton} onClick={handleSeeAll}>
                                See All
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default CarList;