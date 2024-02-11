import React from 'react';
import './LoginComp.css';

export const LoginComp = () => {

    return (<div class='main vh-100'>
        <h1>Step-Up</h1>  
        <div class="container">
            <h3>Login</h3>
            <div class="loginForm">
                <form method='post'>
                    <input placeholder='Email' name="email"></input>
                    <input placeholder='password' name="password"></input>
                    <a href='#'>Forgot Password</a>
                    <button type="submit">Login</button>
                    <a href='#'>Create Account</a>

                </form>
            </div>
        </div>
    </div>
    )
}
