import React from 'react'
import Slider from './slider/index';
import Banners from '../../components/banners/Index';
import Product from '../../components/products/Index';
import './style.css'



const Home = () => {
    return (
        <div>
        <Slider/>
        <Banners/>

        <section className='homeProducts'>
            <div className='container-fluid'>
                <h2>Popular Products</h2>
              <div className='row productRow'>
                <div className='item'>
                    <Product/>
                </div>
                <div className='item'>
                    <Product/>
                </div>
                <div className='item'>
                    <Product/>
                </div>
                <div className='item'>
                    <Product/>
                </div>
                
              </div>
            </div>
        </section>
        </div>

    )
}

export default Home;
