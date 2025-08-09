//import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import Footer from '../../components/Footer/Footer'
import HomeHeader from '../../components/HomeHeader/HomeHeader'
import Filters from '../../components/Filters/Filters'
import CarList from '../../components/CarList/CarList'
//import axios from 'axios';
import { carsData } from '../../data/data';

const Home = () => {
    const featuredCars = carsData.slice(0, 4);
/*
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setLoading(false);
        }

        fetchPosts();
    }, []);
*/
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