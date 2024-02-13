import React from 'react'
import Admin from '../Admin/Components/admin'
import {Route,Route} from react-router-dom;

const AdminRouter = () => {
    return (
        <div>
            
            <Routes>
                <Route path='/' element={<Admin></Admin>}></Route>
            </Routes>

            
            
        </div>
    )
}

export default AdminRouter
