import React from 'react'
import ThemeToggler from '../ThemeToggler'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'
import { BASE_URL } from '../../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../../utils/userSlice'

const NavbarAdmin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store)=>store?.user)
  const handleLogout= async ()=>{
    try {

      const result = await axios.post(BASE_URL+"/logout", {},{withCredentials:true})
      console.log(result?.data?.status)
      if(result?.data?.status) {
        dispatch(removeUser())
        navigate("/admin/login") 
      }
      
    } catch (error) {
      console.log("error", error, error?.data?.message)
      
    }

  }
  return (
    <div >
<div className="navbar bg-base-100 shadow-sm ">
  <div className="navbar-start">
    {user && <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to={'/admin/profile'}>Profile</Link></li>
        <li>
          <Link to={'/admin/education'} >Education</Link>
          {/* <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul> */}
        </li>
        <li><Link to={'/admin/skill'}>Skill</Link></li>
        <li><Link to={'/admin/project'} >Project</Link></li>
        <li><Link to={'/admin/npmModule'} >Npm module</Link></li>
      </ul>
    </div>}
    <p className="btn btn-ghost text-xl"><Link to={'/admin/profile'}>Admin</Link></p>

  </div>

{user &&
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to={'/admin/profile'}>Profile</Link></li>
      <li><Link to={'/admin/education'} >Education</Link>
        
        
        {/* <details>
          <summary></summary>
          
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details> */}

      </li>
       <li><Link to={'/admin/skill'}>Skill</Link></li>
        <li><Link to={'/admin/project'} >Project</Link></li>
        <li><Link to={'/admin/npmModule'} >Npm module</Link></li>
    </ul>
  </div>}
   <div className="navbar-end">
    <ThemeToggler />

 { user &&  <button onClick={handleLogout} className='btn ml-2'>Logout</button>}
  </div>
  
</div>


    </div>
  )
}

export default NavbarAdmin