import React, { useState } from 'react';
import styles from './ContactInfoForm.module.css';

const ContactInfoForm = ({ onBack, onSubmit }) => {
    const [contactInfo, setContactInfo] = useState({
        name: '',
        phone: '',
        contactMethod: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleMethodSelect = (method) => {
        setContactInfo(prev => ({ ...prev, contactMethod: method }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(contactInfo);
    };

    return (
        <>
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className={styles.imageName}>
                    <img src='profile.jpg' alt='profile' className={styles.image}></img>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Your name</label>
                        <input
                            type="text"
                            name="name"
                            value={contactInfo.name}
                            onChange={handleChange}
                            className={`${styles.input} ${styles.name}`}
                            placeholder="Enter your name"
                        />
                    </div>
                </div>
                
                {/* Phone Field */}
                <div className={styles.formGroup}>
                    <label className={styles.label}>Phone*</label>
                    <input
                        type="tel"
                        name="phone"
                        value={contactInfo.phone}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="Enter your phone"
                        required
                    />
                </div>

                {/* Contact Method */}
                <div className={styles.formGroup}>
                    <label className={styles.label}>Contact Method</label>
                    <div className={styles.buttonGroup}>
                        {['Phone', 'Erabitaa Chat', 'Both'].map(method => (
                            <button
                                key={method}
                                type="button"
                                className={`${styles.methodButton} ${
                                    contactInfo.contactMethod === method ? styles.active : ''
                                }`}
                                onClick={() => handleMethodSelect(method)}
                            >
                                {method}
                            </button>
                        ))}
                        {/* Hidden input for form submission validation */}
                        <input
                            type="hidden"
                            name="contactMethod"
                            value={contactInfo.contactMethod}
                            required
                        />
                    </div>
                </div>
                <button type="submit" className={styles.submitButton}>
                    Post now
                </button>
            </form>
        </div>
        </>
    );
};

export default ContactInfoForm;