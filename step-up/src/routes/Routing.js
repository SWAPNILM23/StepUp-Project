import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import NotFound from '../components/NotFound/NotFound';

import Home from '../Pages/Home';
import Signin from '../components/signin/Signin';


const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='signin' element={<Signin/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
            
            <Footer />
        </BrowserRouter>
    )
}

export default Routing
