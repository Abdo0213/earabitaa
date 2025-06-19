import React from 'react'
import style from './SignUp.module.css'

const SignUp = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style.header}>
                    <p className={style.welcome}>Welcome Back</p>
                    <p className={style.logo}>Earabitaa</p>
                    <p className={style.parag}>Register to manage your account and enjoy Earabitaa service</p>
                </div>
                <form className={style.registerForm}>
                    <div className={style.inputGroup}>
                        <label>Name*</label>
                        <input className={style.inputField} type='text' placeholder='Enter your name'/>
                    </div>
                    <div className={style.inputGroup}>
                        <label>Phone*</label>
                        <input className={style.inputField} type='text' placeholder='Enter your phone'/>
                    </div>
                    <div className={style.inputGroup}>
                        <label>Email*</label>
                        <input className={style.inputField} type='email' placeholder='Enter your Email'/>
                    </div>
                    <div className={style.inputGroup}>
                        <label>Password*</label>
                        <input className={style.inputField} type='password' placeholder='Enter your Password'/>
                    </div>
                    <div className={style.inputGroup}>
                        <label>Confirm Password*</label>
                        <input className={style.inputField} type='password' placeholder='Enter your Password'/>
                    </div>

                    <button type='submit' className={style.signUpButton}>Sign up</button>

                    <p className={style.signInText}>
                        Already have an account? <span ><a href='/login' className={style.signInLink}>Sign In</a></span>
                    </p>
                </form>
            </div>
        </>
    )
}

export default SignUp