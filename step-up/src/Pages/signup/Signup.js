import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

const genderOption = [
    {
        value: 'male',
        label: 'Male',
    },
    {
        value: 'female',
        label: 'Female',
    },
];

const Signup = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneno, setPhoneno] = useState("");
    const [gender, setGender] = useState("");

    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/user/addUser", {
                firstName: firstname,
                lastName: lastname,
                email: email,
                password: password,
                phoneNo: phoneno,
                gender: gender
            });
            alert("User Registation Successfully");
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className='signup-box'>
            <h2>Sign up</h2>
            <form>
                <div className='box1'>
                    {/* First Name */}
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                        type='text'
                        name='firstname'
                        value={firstname}
                        onChange={(event) => {
                            setFirstname(event.target.value);
                        }} />

                    {/* Last Name */}
                    <TextField
                        fullWidth
                        className='input'
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                        type='text'
                        name='lastName'
                        value={lastname}
                        onChange={(event) => {
                            setLastname(event.target.value);
                        }} />
                </div>

                <div className='box1'>
                    {/* Emali */}
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        type='email'
                        name='email'
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }} />

                    {/* Password */}
                    <TextField
                        fullWidth
                        className='input'
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        type='password'
                        name='password'
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }} />
                </div>

                <div className='box1'>
                    {/* Phone No */}
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Phone"
                        variant="outlined"
                        type='number'
                        name='phoneNo'
                        value={phoneno}
                        onChange={(event) => {
                            setPhoneno(event.target.value);
                        }}
                    />

                    <TextField fullWidth
                        className='input'
                        id="outlined-select-currency"
                        select
                        label="Gender"
                        defaultValue="male"
                        name='gender'
                        value={gender}
                        onChange={(event) => {
                            setGender(event.target.value);
                        }}
                    // helperText="Please select your currency"
                    >
                        {genderOption.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>

                <div className='address-box1'>
                    <TextField
                        fullWidth
                        id="outlined-multiline-static"
                        label="Address"
                        multiline
                        rows={2}
                    />
                </div>

                <div className='box1'>
                    <TextField fullWidth id="outlined-basic" label="Area" variant="outlined" type='text' name='area' />

                    <TextField fullWidth className='input' id="outlined-basic" label="City" variant="outlined" type='text' name='city' />
                </div>

                <div className='box1'>
                    <TextField fullWidth id="outlined-basic" label="State" variant="outlined" type='text' name='state' />

                    <TextField fullWidth className='input' id="outlined-basic" label="Pincode" variant="outlined" type='text' name='pincode' />
                </div>

                <div className='user-button'>
                    <Button component={Link} to={'/user/signin'} variant="contained" size="large" onClick={save}>Sign up</Button>
                </div>

            </form>
        </div>
    )
}

export default Signup
