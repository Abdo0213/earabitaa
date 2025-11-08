// src/components/HomeHeader/HomeHeader.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomeHeader.module.css';

const HomeHeader = ({ userName = "Mohamed", onSearch }) => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        if (onSearch) {
            onSearch(value);
        }
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate('/cars', { state: { searchQuery } });
        } else {
            // If empty, navigate to filter page
            navigate('/filter');
        }
    };

    return (
        <div className={styles.header}>
            <div className={styles.greeting}>
                <h1>Hi, {userName}</h1>
                <p>Welcome</p>
                <a href='/notifications'><img src='notificationIcon.svg' alt='' className={styles.icon}></img></a>
            </div>
            <form className={styles.searchBar} onSubmit={handleSearchSubmit}>
                <img src='searchIcon.svg' alt='search' className={styles.searchIcon} />
                <input
                    type="text"
                    placeholder="What are you looking for?"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className={styles.searchInput}
                />
            </form>
        </div>
    );
};

export default HomeHeader;