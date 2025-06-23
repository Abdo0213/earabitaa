import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ 
    header, 
    trailingIcon, 
    backNavigationPath,
    trailingIconNavigationPath 
}) => {
    const navigate = useNavigate();

    const handleNavigation = (path, isBack = false) => {
        if (!document.startViewTransition) {
            isBack ? navigate(-1) : navigate(path);
            return;
        }

        document.startViewTransition(() => {
            isBack ? navigate(-1) : navigate(path);
        });
    };

    const handleBackClick = () => {
        if (backNavigationPath) {
            handleNavigation(backNavigationPath);
        } else {
            handleNavigation('', true); // Use empty string for back navigation
        }
    };

    const handleTrailingIconClick = () => {
        if (trailingIconNavigationPath) {
            handleNavigation(trailingIconNavigationPath);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.leftContent} onClick={handleBackClick}>
                <img 
                src="invertedArrowIcon.svg" 
                alt="back arrow" 
                width="25" 
                height="25" 
                className={styles.icon}
                />
            </div>
            
            <p className={styles.text}>{header}</p>
            
            <div className={styles.rightContent}>
                {trailingIcon && (
                <img
                    src={trailingIcon}
                    alt="action icon"
                    width="25"
                    height="25"
                    className={styles.icon}
                    onClick={handleTrailingIconClick}
                />
                )}
            </div>
        </div>
    );
};

export default Header;