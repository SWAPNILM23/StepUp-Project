import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Signup from '../components/signup/Signup';
import NotFound from '../components/NotFound/NotFound';
import Home from '../components/Home';

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/signup' element={<Signup/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Routing
