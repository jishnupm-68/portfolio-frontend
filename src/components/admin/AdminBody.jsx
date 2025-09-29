import React from 'react'

import { Outlet } from 'react-router'
import NavbarAdmin  from '../admin/NavbarAdmin'


const AdminBody = () => {
  return (
    <div>
      <NavbarAdmin />
       <Outlet />
       
        <div>
       </div>
    </div>
  )
}

export default AdminBody