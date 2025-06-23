import React from 'react'
import style from './Settings.module.css'
import AccountMenu from '../../components/AccountMenu/AccountMenu'
import Footer from '../../components/Footer/Footer'

const Settings = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style.header}>
                    <p className={style.headerText}>Settings</p>
                    <img src='profile.jpg' alt='peofile' className={style.image}></img>
                    <p className={style.headerName}>Ayman Ibrahim</p>
                </div>
                <div className={style.content}><AccountMenu/></div>
            </div>
            <Footer />
        </>
    )
}

export default Settings