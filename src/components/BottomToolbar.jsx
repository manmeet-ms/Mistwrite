import React, { Profiler } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { AccountBalance, ArrowOutwardOutlined, HomeMax } from '@mui/icons-material';
import { Home, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const BottomToolbar = () => {
    const bottomNavItems = [
        {
            name: 'Home',
            slug: '/',
            icon: <Home />,
        },
      
        {
            name: 'Notes',
            slug: '/notes',
            icon: <Home />,
        },
        {
            name: 'Settings',
            slug: '/add-note',
            icon: <AccountBalance />,
        },
    ];

    return (
        <>
            {/* <footer>
                <div className="flex w-full container gap-3">
                {bottomNavItems.map((item) => (
                        <Link  className='flex flex-col justify-center items-center' to={item.slug}>
                      <div className="">
                        {item.icon}
                        <span className='text-sm text-primary' >{item.name}</span>
                      </div>
                    </Link>
                ))}
                </div>
            </footer> */}
        </>
    );
};

export default BottomToolbar;
