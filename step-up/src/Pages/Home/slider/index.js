import React from 'react'
import Slider from "react-slick";
import './style.css'
import img1 from '../../../assets/images/1.jpg'
import img2 from '../../../assets/images/2.jpg'
import img3 from '../../../assets/images/3.jpg'
import img4 from '../../../assets/images/4.jpg'
import img5 from '../../../assets/images/5.jpg'
import img6 from '../../../assets/images/6.jpg'

const HomeSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className='homeSlider'>
            <div className='container-fluid'>
                <Slider {...settings}>
                    <div>
                        <img src={img1}></img>
                    </div>
                    <div>
                    <img src={img2}></img>
                    </div>
                    <div>
                    <img src={img3}></img>
                    </div>
                    <div>
                    <img src={img4}></img>
                    </div>
                    <div>
                    <img src={img5}></img>
                    </div>
                    <div>
                    <img src={img6}></img>
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default HomeSlider;
