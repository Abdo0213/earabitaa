// src/components/HomeHeader/HomeHeader.jsx
import React from 'react';
import styles from './HomeHeader.module.css';

const HomeHeader = ({ userName = "Mohamed" }) => {
    return (
        <div className={styles.header}>
            <div className={styles.greeting}>
                <h1>Hi, {userName}</h1>
                <p>Welcome</p>
                <img src='notificationIcon.svg' alt='' className={styles.icon}></img>
            </div>
        </div>
    );
};

export default HomeHeader;