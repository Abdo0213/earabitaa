import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className={styles.pagination}>
            {/* Previous Arrow */}
            <button
                className={styles.arrow}
                onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <svg width="11" height="20" viewBox="0 0 11 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 1.5L2 11.5L9.5 21.5" stroke="#222831" stroke-width="3"/>
                </svg>

            </button>

            {/* Page Numbers */}
            {pageNumbers.map((number) => (
                <button
                    key={number}
                    className={`${styles.pageButton} ${
                        currentPage === number ? styles.active : ''
                    }`}
                    onClick={() => paginate(number)}
                >
                    {number}
                </button>
            ))}

        {/* Next Arrow */}
            <button
                className={styles.arrow}
                onClick={() => currentPage < pageNumbers.length && paginate(currentPage + 1)}
                disabled={currentPage === pageNumbers.length}
            >
                <svg width="11" height="20" viewBox="0 0 11 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 1.5L9 11.5L1.5 21.5" stroke="#222831" stroke-width="3"/>
                </svg>
            </button>
        </div>
    );
};

export default Pagination;
