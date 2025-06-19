import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import style from './Footer.module.css';

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const currentPath = location.pathname;

    const navItems = [
        { name: 'home', path: '/home', icon: 'home', label: 'Home' },
        { name: 'favourite', path: '/favorites', icon: 'heart', label: 'Favorites' },
        { name: 'sell', path: '/sell', icon: 'plus', label: 'Sell' },
        { name: 'chat', path: '/messages', icon: 'chat', label: 'Chat' },
        { name: 'settings', path: '/settings', icon: 'setting', label: 'Settings' },
    ];

    const isActive = (path) => currentPath === path;

    const getIconSrc = (iconName, path) => {
        return isActive(path)
            ? `${iconName}IconSolid.svg`
            : `${iconName}IconEmpty.svg`;
    };

    return (
        <div className={style.footerContainer}>
            <div className={style.footerContent}>
                {navItems.map(({ name, path, icon, label }) => (
                    <span
                        key={name}
                        onClick={() => navigate(path)}
                        className={isActive(path) ? style.active : ''}
                    >
                        <img
                            src={getIconSrc(icon, path)}
                            alt={name}
                            width="24"
                            height="24"
                        />
                        {isActive(path) && <span>{label}</span>}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Footer;
