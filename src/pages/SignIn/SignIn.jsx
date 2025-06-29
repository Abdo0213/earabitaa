import React, { useEffect, useState } from 'react'
import { useAnimatedNavigation } from '../../hooks/useAnimatedNavigation';
import style from './SignIn.module.css'

const SignIn = () => {
    const animatedNavigate = useAnimatedNavigation();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData);
        // Example API call (you would replace this with your actual API call):
        // fetch('/api/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Success:', data);
        //     // Handle successful login (e.g., redirect, store token, etc.)
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        // });
    };

    return (
        <>
            <div className={style.container}>
                <div className={style.header}>
                    <p className={style.welcome}>Welcome Back</p>
                    <p className={style.logo}>Earabitaa</p>
                    <p className={style.parag}>Register to manage your account and enjoy Earabitaa service</p>
                </div>
                <form className={style.loginForm} onSubmit={handleSubmit}>
                    <div className={style.inputGroup}>
                        <label>Email*</label>
                        <input 
                            className={style.inputField} 
                            type='email' 
                            name='email'
                            placeholder='Enter your Email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={style.inputGroup}>
                        <label>Password*</label>
                        <input 
                            className={style.inputField} 
                            type='password' 
                            name='password'
                            placeholder='Enter your Password'
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <button type="button" className={style.forgotPassword}>
                        Forgot Password
                    </button>

                    <button type='submit' className={style.signInButton}>Sign In</button>

                    <p className={style.signUpText}>
                        Don't have an account? <span>
                            <button 
                                type="button" 
                                className={style.signUpLink} 
                                onClick={() => animatedNavigate('/register')}
                            >
                                Sign up
                            </button>
                        </span>
                    </p>
                </form>
            </div>
        </>
    )
}

export default SignIn