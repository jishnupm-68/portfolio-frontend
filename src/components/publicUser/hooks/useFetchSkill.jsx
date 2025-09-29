import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../../../utils/constants'
import { useDispatch } from 'react-redux'
import { addSkill } from '../../../utils/skillSlice'

const useFetchSkill = () => {
    const dispatch = useDispatch()
    const fetchSkill  = async()=>{
        try {
            const res = await axios.get(BASE_URL+"/user/skill",
                {withCredentials:true}
            )
            if(!res) return null
            const {skill} = res.data.data;
            dispatch(addSkill(skill))

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{fetchSkill()},[])
 return null
}

export default useFetchSkill