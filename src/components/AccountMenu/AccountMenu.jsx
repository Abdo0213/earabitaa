import React, { useState } from 'react';
import styles from './AccountMenu.module.css';
import { useAnimatedNavigation } from '../../hooks/useAnimatedNavigation';
import Logout from '../Logout/Logout';

const AccountMenu = () => {
    const animatedNavigate = useAnimatedNavigation();
    const [isLogoutOpen, setLogoutOpen] = useState(false);

    const menuItems = [
        { id: 1, label: 'Account information', icon: 'accountIcon.svg', path: '/account' },
        { id: 2, label: 'Posts', icon: 'postsIcon.svg', path: '/home' },
        { id: 3, label: 'Privacy policy', icon: 'privacyIcon.svg', path: '/home' },
        { id: 4, label: 'About Earabitaa', icon: 'aboutIcon.svg', path: '/home' },
        { id: 5, label: 'Help', icon: 'helpIcon.svg', path: '/home' },
        { id: 6, label: 'Log out', icon: 'logoutIcon.svg', path: '/home' }
    ];

    const handleClick = (path) => {
        animatedNavigate(path);
    };

    const handleLogoutClick = (e) => {
        e.stopPropagation(); // Prevent event bubbling
        setLogoutOpen(true);
    };

    const handleLogoutConfirm = () => {
        console.log("Logout logic here");
        // Add your actual logout logic (clear auth tokens, redirect, etc.)
        setLogoutOpen(false);
    };

    return (
        <>
            <ul className={styles.menuList}>
                {menuItems.map((item) => (
                    <li 
                        key={item.id} 
                        className={styles.menuItem} 
                        onClick={item.id === 6 ? handleLogoutClick : () => handleClick(item.path)}
                    >
                        <span className={styles.icon}>
                            <img
                                src={item.icon}
                                alt={item.label}
                                width="25"
                                height="25"
                            />
                        </span>
                        {item.label}
                        <span className={styles.arrow}>
                            <img
                                src='arrowIcon.svg'
                                alt='arrow'
                                width="10"
                                height="10"
                            />
                        </span>
                    </li>
                ))}
            </ul>
            <Logout
                isOpen={isLogoutOpen}
                onClose={() => setLogoutOpen(false)}
                onLogout={handleLogoutConfirm}
            />
        </>
    );
};

export default AccountMenu;