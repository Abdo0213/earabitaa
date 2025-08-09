import React from 'react';
import { useLocation } from 'react-router-dom';
import style from './Footer.module.css';
import { useAnimatedNavigation } from '../../hooks/useAnimatedNavigation';


const Footer = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const navItems = [
        { name: 'home', path: '/home', icon: 'home', label: 'Home' },
        { name: 'favourite', path: '/favourites', icon: 'heart', label: 'Favourites' },
        { name: 'sell', path: '/sell', icon: 'plus', label: 'Sell' },
        { name: 'chat', path: '/messages', icon: 'chat', label: 'Chat' },
        { name: 'settings', path: '/settings', icon: 'setting', label: 'Settings' },
    ];
    const animatedNavigate = useAnimatedNavigation();

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
                        onClick={() => animatedNavigate(path)}
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
