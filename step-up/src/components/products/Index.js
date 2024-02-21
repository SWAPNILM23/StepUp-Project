import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import React from 'react';
import Img from '../../assets/images/4.jpg';
import './style.css';

const Product = () => {



    return (
        <div className='productThumb'>
            <div className='imgWrapper'>
                <img src={Img} className='w-100'></img>
            </div>  

            <div className='info'>
                <h4 className='title'>DARK BLUE PREMIUM PLAIN OXFORD</h4> 
                <Rating name="read-only" value={4} readOnly />   
                <span className='brand d-block'>By <a className='text-g'>Bata</a></span>                                  
            </div>   

            <div className='d-flex align-items-center'>
                <div className='d-flex align-items-center'>
                    <span className='price'>₹2,500</span><strike className='oldprice'>₹3,250</strike>
                </div>

                <Button className='button ml-auto'><ShoppingCartOutlinedIcon/>Add</Button>
            </div>     
        </div>
    )
}

export default Product;



