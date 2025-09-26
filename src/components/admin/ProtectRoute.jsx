import React from 'react'
import { Navigate, Outlet } from 'react-router';

const ProtectRoute = () => {
 const token = document.cookie;
 return token? <Outlet />:<Navigate to={"/login"} replace />
 
}

export default ProtectRoute