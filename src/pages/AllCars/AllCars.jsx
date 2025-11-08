import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header'
import { carsData } from '../../data/data';
import CarList from '../../components/CarList/CarList';
import Layout from '../../components/Layout/Layout';
import Pagination from '../../components/Pagination/Pagination';
//import axios from 'axios';

const AllCars = () => {
    const location = useLocation();
    const [allPosts] = useState(carsData);
    const [loading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    // Get filters and search query from navigation state
    const filters = location.state?.filters || {};
    const searchQuery = location.state?.searchQuery || '';

    // Filter posts based on search and filters
    const filteredPosts = useMemo(() => {
        let filtered = [...allPosts];

        // Apply search query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(car => 
                car.title.toLowerCase().includes(query) ||
                car.description?.toLowerCase().includes(query) ||
                car.location?.toLowerCase().includes(query)
            );
        }

        // Apply filters
        if (filters.section) {
            filtered = filtered.filter(car => car.section === filters.section);
        }
        if (filters.typeOfCar) {
            filtered = filtered.filter(car => car.carType === filters.typeOfCar);
        }
        if (filters.location) {
            filtered = filtered.filter(car => car.location?.includes(filters.location));
        }
        if (filters.priceMin || filters.priceMax) {
            filtered = filtered.filter(car => {
                const priceMatch = car.price.match(/\d+/);
                const price = priceMatch ? parseInt(priceMatch[0]) : 0;
                const min = filters.priceMin ? parseInt(filters.priceMin) : 0;
                const max = filters.priceMax ? parseInt(filters.priceMax) : Infinity;
                return price >= min && price <= max;
            });
        }

        return filtered;
    }, [allPosts, filters, searchQuery]);

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
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <Layout>
            <Header 
                header="All Cars"
            />
            <CarList cars={currentPosts} showAllLink={false} filterOrAll={true} loading={loading} />
            <Pagination postsPerPage={postsPerPage} totalPosts={filteredPosts.length} paginate={paginate} currentPage={currentPage}/>
        </Layout>
    );
};

export default AllCars;