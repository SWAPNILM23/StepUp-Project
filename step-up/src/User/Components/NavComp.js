import React from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../Assets/StepUP-02.png';
import '../Components/navComp.css';

const NavComp = () => {

    const [Men, setMen] = React.useState('');
    const [Women, setWomen] = React.useState('');
    const [Service, setService] = React.useState('');

    const handleDropdownMen = (event) => {
        setMen(event.target.value);
    };

    const handleDropdownWomen = (event) => {
        setWomen(event.target.value);
    };

    const handleDropdownService = (event) => {
        setService(event.target.value);
    };

    return (
        <div className='navBar'>
            <div>
                <img src={logo} alt="logo" style={{ "width": "100px", "height": "90px" }}></img>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <Dropdown onSelect={handleDropdownMen}>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            Men
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item value="1">Shoe</Dropdown.Item>
                            <Dropdown.Item value="2">Slipper</Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className="col-md-4">
                    <Dropdown onSelect={handleDropdownWomen}>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            Women
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item value="4">Shoe</Dropdown.Item>
                            <Dropdown.Item value="5">Slipper</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className="col-md-4">
                    <Dropdown onSelect={handleDropdownService}>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            Service
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item value="7">Wash Shoe</Dropdown.Item>
                            <Dropdown.Item value="8">Customize Shoe</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>


            <form id="search-form">
                <div class="search">
                    <input type="text" name="search" class="round" />
                    <Button type="submit" className='btn'>Search</Button>
                </div>
            </form>

            <div>
                <Link to="/login" className='btn btn-outline-primary btn-sm'>Login</Link>
                <Button >Logout</Button>
            </div>
        </div>
    )
}

export default NavComp
