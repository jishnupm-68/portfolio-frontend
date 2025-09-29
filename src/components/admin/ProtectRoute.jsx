import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Navigate, Outlet } from 'react-router';
import { BASE_URL } from '../../utils/constants';
import { addUser } from '../../utils/userSlice';
const ProtectRoute = () => {
    const dispatch = useDispatch()
    const fetchUser = async () => {
        try {
         
          const result = await axios.get(BASE_URL + "/user/profile", { withCredentials: true })
          const userResult = result?.data?.data;
          dispatch(addUser(userResult))
        } catch (error) {
          console.log(error)
        }
      }

      useEffect(()=>{
        fetchUser()
      },[])
 const token = document.cookie;
 return token.length>=4? <Outlet />:<Navigate to={"/admin/login"} replace />
}

export default ProtectRoute