import React, { useState } from 'react';
import { useLocation} from 'react-router-dom';
import styles from './CarDetailPage.module.css';
import Layout from '../../components/Layout/Layout';
import Header from '../../components/Header/Header';
import Popup from '../../components/Popup/Popup';

const CarDetail = () => {
    //const { id } = useParams();
    const location = useLocation();
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [isReportOpen, setReportOpen] = useState(false);
    const [car, setCar] = useState(location.state?.car || {}); // Your initial cars state

    const toggleFavorite = () => {
        setCar(prevCar => ({ ...prevCar, fav: !prevCar.fav }));
    };

    const handleReportClick = (e) => {
        e.stopPropagation(); // Prevent event bubbling
        setReportOpen(true);
    };

    const handleScroll = (e) => {
        const container = e.target;
        const scrollPosition = container.scrollLeft;
        const imageWidth = container.scrollWidth / car.image.length;
        const newIndex = Math.round(scrollPosition / imageWidth);
        setActiveImageIndex(newIndex);
    };
    const getImagePath = (img) => {
        // If image is already a full URL, use it as-is
        if (img.startsWith('http') || img.startsWith('data:')) {
            return img;
        }
        // Otherwise, assume it's in the public folder
        return process.env.PUBLIC_URL + '/' + img;
    };

    return (
        <Layout>
            <Header header={car.title || "Car Details"}/>
            <div className={styles.carDetail}>
                {/* Image Gallery Section */}
                <div className={styles.imageGallery}>
                    <div className={styles.imageContainer} onScroll={handleScroll}>
                        {car.image.map((img, index) => (
                            <img 
                                key={index} 
                                src={getImagePath(img)} 
                                alt={`${car.carType} ${index + 1}`} 
                                className={styles.carImage}
                            />
                        ))}
                    </div>
                    <div className={styles.imageIndicators}>
                        {car.image.map((_, index) => (
                            <div 
                                key={index} 
                                className={`${styles.indicator} ${activeImageIndex === index ? styles.active : ''}`}
                                onClick={() => {
                                    const container = document.querySelector(`.${styles.imageContainer}`);
                                    container.scrollTo({
                                        left: (container.scrollWidth / car.image.length) * index,
                                        behavior: 'smooth'
                                    });
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Car Info Section */}
                <div className={styles.carInfo}>
                    <h1 className={styles.carTitle}>{car.title}</h1>
                    <p className={styles.carDescription}>
                        {car.description || 'The car combines power, agility, and elegant design.'}
                    </p>
                    
                    <div className={styles.priceSection}>
                        <span className={styles.price}>{car.price || 'EGP5000'}</span>
                        <span 
                            className={styles.favContainer}
                            onClick={toggleFavorite}
                            style={{ cursor: 'pointer' }} // Add pointer cursor for better UX
                            >
                            {car.fav ? (
                                <img 
                                className={styles.fav} 
                                src={getImagePath('heartIconSolid.svg')} 
                                alt='Filled heart icon' 
                                />
                            ) : (
                                <img 
                                className={styles.fav} 
                                src={getImagePath('heart.svg')} 
                                alt='Empty heart icon' 
                                />
                            )}
                        </span>
                    </div>

                    <div className={styles.specsSection}>
                        <div className={styles.specItem}>
                            Status: <span className={styles.value} >{car.status}</span>
                        </div>
                        <div className={styles.specItem}>
                            Section: <span className={styles.value} >{car.section}</span>
                        </div>
                    </div>

                    <div className={styles.locationSection}>
                        <div className={styles.specItem2}>
                            <img src={getImagePath('location.svg') } alt='location.svg'/><span className={styles.value} >{car.location}</span>
                        </div>
                        <div className={styles.specItem}>
                            <span className={styles.valueTime} >{car.posted}</span>
                        </div>
                    </div>

                    <div className={styles.contactSection}>
                        <div className={styles.contactContent}>
                            <p className={styles.contactItem}>
                                {car.phone || '+201008205312'}
                            </p>
                            <span className={styles.contactIcon}>
                                <img src={getImagePath("phone.svg")} alt='Phone' />
                                <img src={getImagePath("whatsapp.svg")} alt='WhatsApp' />
                            </span>
                        </div>
                    </div>

                    <div className={styles.reportProduct} onClick={handleReportClick} >
                        <span> <img src={getImagePath('flag.svg')} alt='' /> </span>
                        <button className={styles.reportButton}>Report this Product</button>
                    </div>
                    <Popup isOpen={isReportOpen} onClose={() => setReportOpen(false)}>
                        <form className={styles.messageForm}>
                            <label className={styles.formLabel}>Write your message</label>
                            <textarea 
                                className={styles.messageInput}
                                placeholder="Enter your message"
                            />
                            <button type="submit" className={styles.submitButton}>
                                Send
                            </button>
                        </form>
                    </Popup>
                </div>
            </div>
        </Layout>
    );
};

export default CarDetail;