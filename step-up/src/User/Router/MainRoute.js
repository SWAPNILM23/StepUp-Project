import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginComp from '../Components/LoginComp'
import UserRouter from './UserRouter'

const MainRoute = () => {
    return (
        <div >
            <BrowserRouter>
                <Routes>
                    <Route path='' element={<UserRouter />}></Route>
                    <Route path='login' element={<LoginComp/>}></Route>

                </Routes>
            </BrowserRouter>
        </div>

    )
}

export default MainRoute
