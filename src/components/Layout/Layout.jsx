// src/components/Layout.jsx
import React from 'react';
import Footer from './../Footer/Footer';

const Layout = ({ children }) => {
    return (
        <div className="container">
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
