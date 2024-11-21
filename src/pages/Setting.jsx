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
    ];

    return (
        <>
            <Header pagename="Settings" />
      <section className={globalStyle.pageBodyPaddingX}>

      
            </section>
            
            <BottomToolbar />
        </>
    );
};

export default Setting;
