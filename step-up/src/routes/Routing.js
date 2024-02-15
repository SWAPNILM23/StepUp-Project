import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../Pages/Home/index';
import NotFound from '../components/NotFound/NotFound';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Signin from '../components/signin/Signin';
import Signup from '../components/signup/Signup';
const Routing = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>  
                <Route path='/signin' element={<Signin/>}></Route>
                <Route path='/signup' element={<Signup/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
            
            <Footer />
        </BrowserRouter>
    )
}

export default Routing
