import React, { useState } from 'react';
import Header from '../../components/Header/Header'
import { carsData } from '../../data/data';
import CarList from '../../components/CarList/CarList';
import Layout from '../../components/Layout/Layout';
import Pagination from '../../components/Pagination/Pagination';
//import axios from 'axios';

const AllCars = () => {
    //const [posts, setPosts] = useState([]);
    const [posts] = useState(carsData);
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
        <Layout>
            <Header 
                header="All Cars"
            />
            <CarList cars={currentPosts} showAllLink={false} filterOrAll={true} loading={loading} />
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} currentPage={currentPage}/>
        </Layout>
    );
};

export default AllCars;