import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import { Link } from "react-router-dom";
import "./signin.css";

const Signin = () => {
    return (
        <div className="login-box">
            <h2>Sign in</h2>
            <form>
                <div className="user-box">
                    {/* <label>Username</label>
                    <input type="text" name="" required=""></input> */}
                    <TextField fullWidth
                        id="outlined-basic-error-helper-text"
                        label="Email"
                        variant="outlined"
                        margin="dense"
                        helperText="Incorrect entry."
                    />
                </div>

                <div className="user-box">
                    {/* <label>Password</label>
                    <input type="password" name="" required=""></input> */}
                    <TextField fullWidth
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        margin="dense"
                        autoComplete="current-password"
                    />
                </div>


                {/* <a href="#">
                    Submit
                </a> */}
                <div className='user-button'>
                    <Button component={Link} to={'/'} variant="contained" size="large">Sign in</Button>
                </div>
            </form>
            <h6>New Member <Link to={'/signup'}>Sign Up</Link></h6>
        </div>
    )
}

export default Signin
