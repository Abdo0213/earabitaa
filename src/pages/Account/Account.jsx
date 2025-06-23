import React from 'react'
import style from './Account.module.css'
import Header from '../../components/Header/Header'

const Account = () => {
    return (
        <>
            <Header 
                header="Account information"
                trailingIcon="editIcon.svg"
                trailingIconNavigationPath="/home"
                backNavigationPath="/settings"
            />
            <div className={style.container}>
                <div className={style.header}>
                    <img src='profile.jpg' alt='profile' className={style.image}></img>
                </div>
                <form className={style.accountForm}>
                    <div className={style.inputGroup}>
                        <label>Name</label>
                        <input className={style.inputField} type='text' value="Ayman Ibrahim" disabled/>
                    </div>
                    <div className={style.inputGroup}>
                        <label>Email Address</label>
                        <input className={style.inputField} type='emai' value="Unmesh@mail.com" disabled/>
                    </div>
                    <div className={style.inputGroup}>
                        <label>Phone Number</label>
                        <span className={style.codeNumber}>(+2)</span> <input className={style.inputField} type='text' value="1259379328" disabled/>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Account