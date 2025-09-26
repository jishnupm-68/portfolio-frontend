import React from 'react'

import { Outlet } from 'react-router'
import NavbarAdmin  from '../admin/NavbarAdmin'
import Login from './Login'
import SidebarAdmin from './SidebarAdmin'
import Navbar from '../publicUser/Navbar'

const AdminBody = () => {
  return (
    <div>
       
       <NavbarAdmin />
       
       
        
       
        <div>
         <Outlet />
        
       </div>
      
    </div>
  )
}

export default AdminBody