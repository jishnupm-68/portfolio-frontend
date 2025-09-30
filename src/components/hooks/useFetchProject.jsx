import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../../utils/constants'
import { useDispatch } from 'react-redux'
import { addProject } from '../../utils/projectSlice'

export const useFetchProject = () => {
    const dispatch = useDispatch()
    const fetchProject = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/projects",
                { withCredentials: true })
            if (res) {
                const { projects } = res?.data?.data
                dispatch(addProject(projects))
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchProject()
    }, [])
    return null
}

export default useFetchProject
