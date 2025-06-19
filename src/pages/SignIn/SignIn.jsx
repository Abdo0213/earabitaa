import React, { useEffect } from 'react'
import style from './SignIn.module.css'

const SignIn = () => {
    useEffect(() => {
        // This ensures the animation triggers when component mounts
        return () => {
            document.body.style.overflow = ''; // Reset on unmount
        };
    }, []);
    return (
        <>
            <div className={style.container}>
                <div className={style.header}>
                    <p className={style.welcome}>Welcome Back</p>
                    <p className={style.logo}>Earabitaa</p>
                    <p className={style.parag}>Register to manage your account and enjoy Earabitaa service</p>
                </div>
                <form className={style.loginForm}>
                    <div className={style.inputGroup}>
                        <label>Email*</label>
                        <input className={style.inputField} type='email' placeholder='Enter your Email'/>
                    </div>
                    <div className={style.inputGroup}>
                        <label>Password*</label>
                        <input className={style.inputField} type='password' placeholder='Enter your Password'/>
                    </div>
                    
                    <button type="button" className={style.forgotPassword}>
                        Forgot Password
                    </button>

                    <button type='submit' className={style.signInButton}>Sign In</button>

                    <p className={style.signUpText}>
                        Don't have an account? <span ><a href='/register' className={style.signUpLink}>Sign up</a></span>
                    </p>
                </form>
            </div>
        </>
    )
}

export default SignIn