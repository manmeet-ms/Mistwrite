import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArticleOutlined } from '@mui/icons-material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import BottomToolbar from '../components/BottomToolbar';
import Header from '../components/Header/Header';
import LogoutButton from '../components/Header/LogoutButton';
import globalStyle from '../conf/globalStyle';

const Setting = () => {
    const authStatus = useSelector((state) => state.auth.status);
    const settingPageItemsStyle = 'w-4 h-4';
    const settingPageItems = [
        {
            name: 'About',
            icon: <ArticleOutlined sx={{ fontSize: 20 }} className={settingPageItemsStyle} />,
        },
        {
            name: 'set Theme ',
            icon: <ArticleOutlined sx={{ fontSize: 20 }} className={settingPageItemsStyle} />,
        },
        {
            name: 'Delete all notes',
            icon: <ArticleOutlined sx={{ fontSize: 20 }} className={settingPageItemsStyle} />,
        },
        {
            name: 'logout ',
            icon: <ArticleOutlined sx={{ fontSize: 20 }} className={settingPageItemsStyle} />,
        },
        {
            name: 'Changelog',
            icon: <ArticleOutlined sx={{ fontSize: 20 }} className={settingPageItemsStyle} />,
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
