import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./adminSignin.css";

const AdminSignin = () => {
    return (
        <div className="signin-box">
            <h2>Admin Sign in</h2>
            <form>
                <div className="box1">
                    {/* Email */}
                    <TextField fullWidth
                        id="outlined-basic-error-helper-text"
                        label="Name"
                        variant="outlined"
                        type='email'
                        name='email'
                        // helperText="Incorrect entry."

                        // value={email}
                        // onChange={(event) => {
                        //     setEmail(event.target.value);
                        // }}
                    />
                </div>

                <div className="box1">
                    {/* Password */}
                    <TextField fullWidth
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        name='password'
                        autoComplete="current-password"

                        // value={password}
                        // onChange={(event) => {
                        //     setPassword(event.target.value);
                        // }}
                    />
                </div>

                <div className='button1'>
                    {/* <Button component={Link} to={'/'} variant="contained" size="large" onClick={login}>Sign in</Button> */}
                    <Button variant="contained" size="large"
                    //  onClick={login}
                     >Sign in</Button>
                </div>
            </form>
        </div>
    )
}

export default AdminSignin
