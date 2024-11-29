import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import BottomToolbar from '../components/BottomToolbar';
import Header from '../components/Header/Header';
import LogoutButton from '../components/Header/LogoutButton';
import globalStyle from '../conf/globalStyle';
import { Home } from 'lucide-react';

const Setting = () => {
    const authStatus = useSelector((state) => state.auth.status);
    const settingPageItemsStyle = 'w-4 h-4';
    const settingPageItems = [
        {
            name: 'About',
            icon: <Home sx={{ fontSize: 20 }} className={settingPageItemsStyle} />,
        },
        {
            name: 'set Theme ',
            icon: <Home sx={{ fontSize: 20 }} className={settingPageItemsStyle} />,
        },
        {
            name: 'Delete all notes',
            icon: <Home sx={{ fontSize: 20 }} className={settingPageItemsStyle} />,
        },
        {
            name: 'logout ',
            icon: <Home sx={{ fontSize: 20 }} className={settingPageItemsStyle} />,
        },
        {
            name: 'Changelog',
            icon: <Home sx={{ fontSize: 20 }} className={settingPageItemsStyle} />,
        },
    ];
const commonItemStyle="px-2"
    return (
        <>
            <Header pagename="Settings" />
      <section className={globalStyle.pageBodyPaddingX}>

{settingPageItems.map((item)=>(
    <p className={`${commonItemStyle}`} >{item.name}</p>
))}




      
            </section>
            
            <BottomToolbar />
        </>
    );
};

export default Setting;
