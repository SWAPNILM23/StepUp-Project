import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./signin.css";

const Signin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function login(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8081/api/user/login", {
                email: email,
                password: password,
            }).then((res) => {
                console.log(res.data);

                if (res.data.message === "Email not exits") {
                    alert("Email not exits");
                }
                else if (res.data.message === "Login Success") {

                    navigate('/');
                }
                else {
                    alert("Incorrect Email and Password not match");
                }
            }, fail => {
                console.error(fail); // Error!
            });
        }
        catch (err) {
            alert(err);
        }
    }


    return (
        <div className="signin-box">
            <h2>Sign in</h2>
            <form>
                <div className="user-box">
                    {/* Email */}
                    <TextField fullWidth
                        id="outlined-basic-error-helper-text"
                        label="Email"
                        variant="outlined"
                        type='email'
                        name='email'
                        // helperText="Incorrect entry."

                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                    />
                </div>

                <div className="user-box">
                    {/* Password */}
                    <TextField fullWidth
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        name='password'
                        autoComplete="current-password"

                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    />
                </div>

                <div className='user-button'>
                    {/* <Button component={Link} to={'/'} variant="contained" size="large" onClick={login}>Sign in</Button> */}
                    <Button variant="contained" size="large" onClick={login}>Sign in</Button>
                </div>

            </form>

            <h6>New Member <Link to={'/signup'}>Sign Up</Link></h6>

        </div>
    )
}

export default Signin
