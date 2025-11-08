import React, { useState, useMemo } from 'react';
import Header from '../../components/Header/Header'
import { carsData } from '../../data/data';
import Footer from '../../components/Footer/Footer';
import MyPostCard from '../../components/MyPostCard/MyPostCard';
import styles from './MyPosts.module.css';

const MyPosts = () => {
    // For now, using all cars as user's posts. In a real app, this would fetch user's posts from backend
    const [posts] = useState(carsData);

    // Function to format date for grouping
    const getDateLabel = (post) => {
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        
        // For demo purposes, we'll simulate dates based on posted field
        // In real app, you'd have actual post dates
        const posted = post.posted.toLowerCase();
        
        if (posted.includes('today') || posted.includes('1 day ago')) {
            return 'Today';
        } else if (posted.includes('yesterday') || posted.includes('2 days ago')) {
            return 'Yesterday';
        } else {
            // For other dates, format as DD-MM-YYYY
            // For demo, using a simple format
            const daysAgo = parseInt(posted.match(/\d+/)?.[0] || '0');
            if (daysAgo > 2) {
                const date = new Date();
                date.setDate(date.getDate() - daysAgo);
                const day = String(date.getDate()).padStart(2, '0');
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const year = date.getFullYear();
                return `${day}-${month}-${year}`;
            }
            return 'Today';
        }
    };

    // Group posts by date
    const groupedPosts = useMemo(() => {
        const groups = {};
        posts.forEach(post => {
            const dateLabel = getDateLabel(post);
            if (!groups[dateLabel]) {
                groups[dateLabel] = [];
            }
            groups[dateLabel].push(post);
        });
        return groups;
    }, [posts]);

    // Sort date labels: Today, Yesterday, then dates
    const sortedDateLabels = useMemo(() => {
        const labels = Object.keys(groupedPosts);
        const todayIndex = labels.indexOf('Today');
        const yesterdayIndex = labels.indexOf('Yesterday');
        
        const otherDates = labels.filter(label => 
            label !== 'Today' && label !== 'Yesterday'
        ).sort((a, b) => {
            // Sort dates in descending order (newest first)
            const dateA = a.split('-').reverse().join('-');
            const dateB = b.split('-').reverse().join('-');
            return new Date(dateB) - new Date(dateA);
        });
        
        const sorted = [];
        if (todayIndex !== -1) sorted.push('Today');
        if (yesterdayIndex !== -1) sorted.push('Yesterday');
        sorted.push(...otherDates);
        
        return sorted;
    }, [groupedPosts]);

    return (
        <>
            <Header 
                header="Posts"
                backNavigationPath="/settings"
            />
            <div className={styles.contentWrapper}>
                {sortedDateLabels.length === 0 ? (
                    <div className={styles.emptyState}>
                        <p>No posts yet</p>
                    </div>
                ) : (
                    sortedDateLabels.map(dateLabel => (
                        <div key={dateLabel} className={styles.dateGroup}>
                            <h3 className={styles.dateLabel}>{dateLabel}</h3>
                            <div className={styles.postsList}>
                                {groupedPosts[dateLabel].map(post => (
                                    <MyPostCard key={post.id} post={post} />
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
            <Footer/>
        </>
    );
};

export default MyPosts;
