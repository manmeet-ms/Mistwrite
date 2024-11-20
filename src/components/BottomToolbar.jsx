// import React from 'react'

// const BottomToolbar = () => {
//   return (
//     <div>BottomToolbar</div>
//   )
// }

// export default BottomToolbar


import { Add, HistoryEdu, HomeOutlined, Info, InfoOutlined, LayersOutlined, PostAdd, ScatterPlotOutlined, TuneOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import {
    AccountCircle,
    AccountTree,
    Email,
    GitHub,
    Home,
    Instagram,
    Layers,
    LinkedIn,
    PersonAddAlt,
    RateReview,
    Store,
    VolunteerActivism
} from '@mui/icons-material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import authService from '../appwrite/auth';

import { useEffect } from 'react';
const BottomToolbar = () => {
    const authStatus = useSelector((state) => state.auth.status);

    

    const commonBottomNavIconStyle = 'bg-primary/0 hover:bg-primary/30 focus:bg-primary/30 px-4 py-1 mb-1  transition-colors duration-500 ease-in-out rounded-full';
    // const commonBottomNavIconStyle = 'bg-primary/0 hover:bg-primary/30  px-4 py-1 rounded-full transition-all duration-500 ease-in-out';
    const commonBottomNavItemNameStyle = ' font-semibold  transition-colors duration-500 ease-in-out';
  
    
    
    const bottomNavItems = [
       
        {
            name: 'Home',
            slug: '/',
            icon: <HomeOutlined />,
        },
        {
            name: 'Create',
            slug: '/add-note',
            icon: <PostAdd />,
        },
        
        
        {
            name: 'Info',
            slug: '/about',
            icon: <InfoOutlined />,
        },
        {
            name: 'Settings',
            slug: '/settings',
            icon: <TuneOutlined
             />,

        },
    ];

    return (
        <>
        <div className="h-16"></div>
            <footer className="fixed bottom-0 px-4 py-2 container bg-background text-secondary-foreground/90  border-t border-accent rounded-tl-xl rounded-tr-xl ">
                <div className="flex justify-between text-xs   font-semibold  items-center">
                    {bottomNavItems.map((item) => (
                        <Link className="flex flex-col hover:text-primary focus:text-primary justify-center items-center" to={item.slug}>
                            <span className={commonBottomNavIconStyle}>{item.icon}</span>
                            <span className={commonBottomNavItemNameStyle}>{item.name}</span>
                        </Link>
                    ))}
                </div>
            </footer>
        </>
    );
};

export default BottomToolbar;
