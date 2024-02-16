
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Home from '../Pages/Home/index';
import NotFound from '../components/NotFound/NotFound';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Signin from '../Pages/signin/Signin';
import Signup from '../Pages/signup/Signup';
import AdminSignin from '../Pages/Admin/AdminSignin';

const Routing = () => {

    const location = useLocation();
    const isAdminPage = () => {
        const { pathname } = location;
        return pathname.startsWith('/admin') || pathname==='/user/signin' || pathname==='/user/signup';
    };

    return (
        <div>
            {!isAdminPage() && <Header />}

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/user/signin' element={<Signin />} />
                <Route path='/user/signup' element={<Signup />} />
                <Route path='/admin/signin' element={<AdminSignin />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            {!isAdminPage() && <Footer />}
        </div>
    )
}

export default Routing;
