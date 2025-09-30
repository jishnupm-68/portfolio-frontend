import axios from 'axios'
import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { BASE_URL } from '../../utils/constants'
import { addEducation } from '../../utils/education'


const useFetchEducation = () => {
    const dispatch = useDispatch()
    const fetchEducaion = async()=>{
        try {
            const res = await axios.get(BASE_URL+"/user/education",
                {withCredentials:true}
            )
            if(!res) throw new Error("data fetching failed")
            const {education} = res?.data?.data
            dispatch(addEducation(education))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{fetchEducaion()},[])

  return null
}

export default useFetchEducation