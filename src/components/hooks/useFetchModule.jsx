import axios from 'axios'
import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { BASE_URL } from '../../utils/constants'
import { addModule } from '../../utils/npmModuleSlice'


const useFetchModule = () => {
    const dispatch = useDispatch()
    const fetchModule = async ()=>{
        try {
            const res = await axios.get(BASE_URL+"/user/npmModules",
                {withCredentials:true}
            )
            if(!res) return null
             const {techStack } = res?.data?.data
            dispatch(addModule(techStack))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{fetchModule()},[])
  return null
}

export default useFetchModule