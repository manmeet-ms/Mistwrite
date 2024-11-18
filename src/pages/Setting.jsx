import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArticleOutlined } from '@mui/icons-material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import BottomToolbar from '../components/BottomToolbar';
import Header from '../components/Header/Header';
import LogoutButton from '../components/Header/LogoutButton';

const Setting = () => {
    const authStatus = useSelector((state) => state.auth.status);
    const settingPageItemsStyle="w-4 h-4"
    const settingPageItems = [
        {
            name: 'About',
            icon: <ArticleOutlined sx={{fontSize:20}} className={settingPageItemsStyle}/>,
        },

       
    ];


    return (
        <>
            <Header />
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link to="/">Home</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />

                    <BreadcrumbItem>
                        <BreadcrumbPage>Setting</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <section className="container py-6">
                <div className="flex flex-col space-y-2 justify-start items-start">

                    {settingPageItems.map((item) => (
                        <div className='flex border-b border-accent container py-2 text-base justify-between'>
                            <span className="">
                                {item.icon} {item.name}
                            </span>
                            {/* <ChevronRightSharp /> */}
                        </div>
                    ))}

                    <LogoutButton className="container bg-primary"/>
                    {/* {authStatus && <LogoutButton />} */}
                </div>
            </section>
            <BottomToolbar />
        </>
    );
};

export default Setting;
