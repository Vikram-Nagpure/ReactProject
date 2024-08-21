import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Login from '../Components/Login'

import SignUp from '../Components/SignUp'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            {/* <Route path='/services' element={<Services />}></Route> */}
            <Route path='/login' element={<Login />}></Route>
            <Route path='/sign-up' element={<SignUp />}></Route>
           
        </Routes>
    )
}

export default AllRoutes
