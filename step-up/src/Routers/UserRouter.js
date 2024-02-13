import React from 'react'
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import HomePage from '../User/Components/HomePage';
const UserRouter = () => {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" elements={<HomePage/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default UserRouter
