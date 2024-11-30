// import React from 'react'

// const BottomToolbar = () => {
//   return (
//     <div>BottomToolbar</div>
//   )
// }

// export default BottomToolbar

import { Bolt, Home, Info, Plus, SquarePlus } from 'lucide-react';

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BottomToolbar = () => {
    const authStatus = useSelector((state) => state.auth.status);

    const commonBottomNavIconStyle = 'bg-primary/0 hover:bg-primary/30 focus:bg-primary/30 px-4 py-1 mb-1  transition-colors duration-500 ease-in-out rounded-full';
    // const commonBottomNavIconStyle = 'bg-primary/0 hover:bg-primary/30  px-4 py-1 rounded-full transition-all duration-500 ease-in-out';
    const commonBottomNavItemNameStyle = ' font-semibold  transition-colors duration-500 ease-in-out';

    const bottomNavItems = [
        {
            name: 'Home',
            slug: '/',
            icon: <Home />,
        },
        {
            name: 'Create',
            slug: '/add-note',
            icon: <SquarePlus />,
        },

        {
            name: 'Info',
            slug: '/about',
            icon: <Info />,
        },
        {
            name: 'Settings',
            slug: '/settings',
            icon: <Bolt />,
        },
    ];

    return (
        <>
            {/* <Link to="/add-note" className="fixed bottom-8 right-4 rounded-xl bg-blue-900  text-blue-300 dark:bg-blue-400  dark:text-blue-950 p-4 "> */}
            <Link to="/add-note" className="fixed bottom-8 right-4 rounded-xl  bg-primary  text-primary-foreground p-4 ">
                <Plus size={24} strokeWidth={2.5} />
            </Link>

            <main className="hidden">
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
            </main>
        </>
    );
};

export default BottomToolbar;
