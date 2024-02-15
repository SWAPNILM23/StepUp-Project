import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../assets/images/StepUP.png';
import '../header/header.css';
import Select from '../selectDrop/Select';

const Header = () => {

    const [isOpenDropDown, setisOpenDropDown] = useState(false);
    const [isOpenDropDown1, setisOpenDropDown1] = useState(false);

    const [categories, setcategories] = useState([
        'All',
        'Formals',
        'Casuals',
        'Sports',
        'Sandals',
        'Flip-Flops',
        'Clogs',
        'Heels'
    ]);

    return (
        <div>
            <header>
                <div className='container-fluid'>
                    <div className='row'>

                        {/* logo */}
                        <div className='col-sm-2 logo'>
                            <Link to={'/'}><img src={Logo} alt='Logo' /></Link> 
                            {/* <img src={Logo} alt='Logo' /> */}
                        </div>

                        {/* search */}
                        <div className='col-sm-5'>
                            <div className='headerSearch d-flex align-items-center'>
                                <Select data={categories} />


                                <div className='search'>
                                    <input type='text' placeholder='Search' />
                                    <SearchIcon className='searchicon cursor' />
                                </div>

                            </div>
                        </div>

                        <div className='col-sm-5 d-flex align-items-center'>
                            <div className='ml-auto d-flex align-items-center'>
                                
                                    <ul className='list list-inline mb-5 headertabs'>
                                    <ClickAwayListener onClickAway={() => setisOpenDropDown1(false)}> 
                                        <li className='list-inline-item'>
                        
                                            <span onClick={() => setisOpenDropDown1(!isOpenDropDown1)}><AutoAwesomeOutlinedIcon/> Services</span>
                                            {
                                                isOpenDropDown1 !== false &&
                                                <ul className='dropdownmenu'>
                                                    <li><Button className='align-items-center'> <AssignmentIndOutlinedIcon /> Washing</Button></li>
                                                    <li><Button className='align-items-center'><PinDropOutlinedIcon /> Coustomize</Button></li>
                                                </ul>

                                            }
                                        </li>
                                    </ClickAwayListener>    

                                        <li className='list-inline-item'>
                                            <span><FavoriteBorderIcon /> Wishlist</span>
                                        </li>

                                        <li className='list-inline-item'>
                                            <span><ShoppingCartOutlinedIcon /> Cart<span className='badge bg-primary rounded-circle'> </span></span>
                                        </li>
                                        <ClickAwayListener onClickAway={() => setisOpenDropDown(false)}>    
                                        <li className='list-inline-item' >

                                            <span onClick={() => setisOpenDropDown(!isOpenDropDown)}><PersonIcon /> Account</span>
                                            {
                                                isOpenDropDown !== false &&
                                                <ul className='dropdownmenu'>
                                                    <li><Button className='align-items-center'> <AssignmentIndOutlinedIcon /> Profile</Button></li>
                                                    <li><Button><PinDropOutlinedIcon /> Tracking</Button></li>
                                                    <li><Button><FavoriteBorderIcon /> My Wishlist</Button></li>
                                                    <li><Button><LogoutOutlinedIcon /> Sign out</Button></li>
                                                </ul>

                                            }
                                        </li>
                                        </ClickAwayListener>       
                                    </ul>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
