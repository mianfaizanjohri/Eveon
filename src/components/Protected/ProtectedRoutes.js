import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {
    const Getuser = sessionStorage.getItem('user')
    return Getuser ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoutes
