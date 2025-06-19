import React, { useEffect } from 'react'
import style from './LogoPage.module.css'
import { useNavigate } from 'react-router-dom';

const LogoPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Set background color
        document.body.style.background = '#DC510A';
        // Navigate after animation completes (3 seconds)
        const timer = setTimeout(() => {
        navigate('/login'); // Change to your desired route
        }, 2300);

        // Cleanup
        return () => {
        document.body.style.background = '';
        clearTimeout(timer);
        };
    }, [navigate]);

    return (
        <div className={style.pageContainer}>
            <div className={style.logoContainer}>
                <img 
                className={style.logo}
                src="/logo.png" 
                alt="Logo" 
                />
            </div>
        </div>
    )
}

export default LogoPage