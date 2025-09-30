
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router'
import { addModule, removeModule } from '../../../utils/npmModuleSlice'
import NpmModuleCard from './NpmModuleCard'
import useFetchModule from '../../hooks/useFetchModule'


const NpmModule = () => {
  const [error, setError] = useState("");
  const [response, setResponse] = useState("")
  const dispatch = useDispatch()
  const npmModule = useSelector((store) => store?.npmModule)
  useFetchModule()
  const deleteNpmModule = async (techstack, name) => {
    try {
      const deleteResult = await axios.delete(BASE_URL + "/user/npmModules/" + techstack + "/" + name,
        { withCredentials: true })
      if (deleteResult) {
        const { techStack } = deleteResult?.data?.data
        dispatch(removeModule())
        dispatch(addModule(techStack))
        setResponse(deleteResult?.data?.message)
      }
    } catch (error) {
      console.log(error)
      setError(error?.response?.data?.message)
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
      setResponse("")
    }, 3000);
    return () => timer
  }, [error, response]
  )

  return (
    <div>
      {(error || response) && <div role="alert" className={"alert " + (error ? "alert-error" : "alert-success")}>
        <span>{error ? error : response}</span>
      </div>}
      <div className='p-2'>
        <h1 className='px-3 text-3xl'>Npm Modules
          <button className='btn btn-info ml-2'><Link to={'/admin/npmModule/addNpmModule'}>Add NPM module</Link></button>
        </h1>
        <Outlet />
        <div className='flex flex-wrap p-1'>
          {npmModule && npmModule.map((item) => {
            const { _id, helperName, techStack } = item
            return (
              <div key={_id}> {helperName.length > 0 && <NpmModuleCard key={_id} _id={_id} helperName={helperName} deleteNpmModule={deleteNpmModule} techStack={techStack} />} </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default NpmModule





