import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import { Outlet } from "react-router-dom";

const layout = () => {
    return (
        <div className="body"> 
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css"></link>
          <Navigation />
          <div className="container">
            <Header />
            <main>
                <Outlet />
            </main>
          </div>
        </div>
    );
};

export default layout;