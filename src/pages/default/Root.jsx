import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './../../components/common/Header';
import Footer from './../../components/common/Footer';
const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;