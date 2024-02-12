import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginComp from '../Components/LoginComp'
import NavComp from '../Components/NavComp'

const UserRouter = () => {
    return (
        <div>
             <div>
                {/*header Part */}
                <NavComp></NavComp> 
            </div>
                
            <div>
                {/* Body Part */}
                
                <Routes>
                    <Route path='login' element={<LoginComp/>}></Route>
                </Routes>
            </div>

        </div>
    )
}

export default UserRouter
