import React from 'react'
import style from './Home.module.css'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style.content}>Home</div>
            </div>
            <Footer />
        </>
    )
}

export default Home