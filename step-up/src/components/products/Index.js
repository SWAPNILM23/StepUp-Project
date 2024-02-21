import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.css';

const Product = () => {

    const [products, setProducts] = useState([]);

    //   useEffect(() => {
    //     const fetchData = async () => {
    //         let status='popular'
    //       try {
    //         await axios.get(`http://localhost:8080/api/product/status/${status}`).then((res)={
    //             setProducts(res.data)
    //         }).catch ((error) =>{
    //         console.error('Error fetching data:', error);
    //       })
    //     },

    //     fetchData();
    //   }, []);

    let status = 'popular'
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        axios.get(`http://localhost:8080/api/product/status/${status}`).then((res) => {
            // console.log(res.data)
            setProducts(res.data)
        }).catch((err) => {
            console.error('Error fetching data:', err);
        })
    }


    return (

        <div className="card-carousel cardCarousel1">
            {products.map((val, index) => {
                return <div key={val.productId} className="card card1">
                    <img src={val.image} alt={val.productName} />
                    <div className="card-content">
                        <h4>{val.productName}</h4>
                        <p>{val.brand}</p>
                        <span className='price'>₹ {val.price}</span>
                        <strike>₹ {val.discountPrice}</strike>
                        <div className="buttons-container">
                            <Button variant="contained"><ShoppingCartOutlinedIcon/> Add</Button>
                            <Button variant="contained" color="error"><FavoriteBorderOutlinedIcon/> Wishlist</Button>

                        </div>
                    </div>
                </div>
            })}
            {/* <div className='productThumb'>
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

                    <Button className='button ml-auto'><ShoppingCartOutlinedIcon />Add</Button>
                </div>
            </div> */}
        </div>

    )
}

export default Product;



