import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import style from './EditAccount.module.css'
import PasswordReset from '../../components/PasswordReset/PasswordReset';

const EditAccount = () => {
    const [isResetOpen, setIsResetOpen] = useState(false);
    return (
        <>
            <Header 
                    header="Edit"
                    backNavigationPath="/account"
            />
            <div className={style.container}>
                <div className={style.header}>
                    <img src='profile.jpg' alt='profile' className={style.image}></img>
                </div>
                <form className={style.accountForm} onSubmit={(e) => e.preventDefault()}>
                    <div className={style.inputGroup}>
                        <label>Name</label>
                        <input className={style.inputField} type='text' value="Ayman Ibrahim" placeholder='Enter you name'/>
                    </div>
                    <div className={style.inputGroup}>
                        <label>Email Address</label>
                        <input className={style.inputField} type='emai' value="Unmesh@mail.com" placeholder='Enter you email'/>
                    </div>
                    <div className={style.inputGroup}>
                        <label>Phone Number</label>
                        <span className={style.codeNumber}>(+2)</span> <input className={style.inputField} type='text' value="1259379328" placeholder='Enter your number'/>
                    </div>
                    <div className={style.inputGroup}>
                        <label>Change Password</label>
                        <input className={`${style.inputField} ${style.first}`} type='password' value="" placeholder='Current Password'/>
                        <span><button className={style.forgetButton}  onClick={() => setIsResetOpen(true)}>Forget Password</button></span>
                        <input className={style.inputField} type='password' value="" placeholder='New Password'/>
                        <input className={style.inputField} type='password' value="" placeholder='Confirm Password'/>
                    </div>
                    <button type='submit' className={style.submitButton}>Update account</button>
                </form>
                <PasswordReset 
                    isOpen={isResetOpen} 
                    onClose={() => setIsResetOpen(false)}
                />
            </div>
        </>
    )
}

export default EditAccount