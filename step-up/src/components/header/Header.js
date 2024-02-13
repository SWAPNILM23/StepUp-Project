import React from 'react'
import '../header/header.css';
import Logo from '../../User/Assets/StepUP.png'
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/Select'


const Header = () => {
    return (
        <div>
            <header>
                <div className='container-fluid'>
                    <div className='row'>

                        {/* logo */}
                        <div className='col-sm-2 logo'>
                            <img src={Logo} alt='Logo'/>
                        </div>  

                        {/* search */}
                        <div className='col-sm-5'>
                            <div className='headerSearch d-flex align-items-center'>
                            <Select/>
                                

                                <div className='search'>
                                    <input type='text' placeholder='Search'/>
                                    <SearchIcon className='searchicon cursor'/>
                                </div>
                            
                            </div>
                        </div>

                    </div>
                </div>    
            </header>
        </div>
    )
}

export default Header
