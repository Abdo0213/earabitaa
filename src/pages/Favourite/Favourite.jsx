import React, { useState } from 'react';
import Header from '../../components/Header/Header'
import { carsData } from '../../data/data';
import CarList from '../../components/CarList/CarList';
import Footer from '../../components/Footer/Footer';
import Pagination from '../../components/Pagination/Pagination';
import styles from './Favourite.module.css';
//import axios from 'axios';

const Favourite = () => {
    //const [posts, setPosts] = useState([]);
    const [posts] = useState(carsData.filter(car => car.fav === true));
    //const [loading, setLoading] = useState(false);
    const [loading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    // for call the backend
    /*
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
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <>
            <Header 
                header="Favourite item"
                backNavigationPath="/home"
            />
            <div className={styles.contentWrapper}>
                <CarList cars={currentPosts} showAllLink={false} filterOrAll={true} loading={loading} showSeeAllAtEnd={true} />
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} currentPage={currentPage}/>
            </div>
            <Footer/>
        </>
    );
};

export default Favourite;