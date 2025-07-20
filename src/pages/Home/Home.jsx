import React from 'react'
import style from './Home.module.css'
import Footer from '../../components/Footer/Footer'
import HomeHeader from '../../components/HomeHeader/HomeHeader'
import Filters from '../../components/Filters/Filters'
import CarList from '../../components/CarList/CarList'
import { carsData } from '../../data/data';

const Home = () => {
    const featuredCars = carsData.slice(0, 4);
    return (
        <>
            <HomeHeader />
            <div className={style.container}>
                <div className={style.content}>
                    <Filters />
                    <CarList cars={featuredCars} />
                    <CarList cars={featuredCars} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home