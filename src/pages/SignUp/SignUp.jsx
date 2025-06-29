import React, { useState } from 'react'
import { useAnimatedNavigation } from '../../hooks/useAnimatedNavigation';
import style from './SignUp.module.css'

const SignUp = () => {
    const animatedNavigate = useAnimatedNavigation();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Basic validation - check if passwords match
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData);
        
        // Example API call:
        // fetch('/api/register', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         name: formData.name,
        //         phone: formData.phone,
        //         email: formData.email,
        //         password: formData.password
        //     }),
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Success:', data);
        //     // Handle successful registration (e.g., redirect to login)
        //     animatedNavigate('/login');
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
                <form className={style.registerForm} onSubmit={handleSubmit}>
                    <div className={style.inputGroup}>
                        <label>Name*</label>
                        <input 
                            className={style.inputField} 
                            type='text' 
                            name='name'
                            placeholder='Enter your name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={style.inputGroup}>
                        <label>Phone*</label>
                        <input 
                            className={style.inputField} 
                            type='text' 
                            name='phone'
                            placeholder='Enter your phone'
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
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
                    <div className={style.inputGroup}>
                        <label>Confirm Password*</label>
                        <input 
                            className={style.inputField} 
                            type='password' 
                            name='confirmPassword'
                            placeholder='Confirm your Password'
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type='submit' className={style.signUpButton}>Sign up</button>
                    <p className={style.signInText}>
                        Already have an account? <span>
                            <button 
                                type="button" 
                                className={style.signInLink} 
                                onClick={() => animatedNavigate('/login')}
                            >
                                Sign In
                            </button>
                        </span>
                    </p>
                </form>
            </div>
        </>
    )
}

export default SignUp