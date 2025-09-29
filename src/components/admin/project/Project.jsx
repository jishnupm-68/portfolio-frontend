import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../../utils/constants'
import { useDispatch, useSelector } from 'react-redux'


import { Link, Outlet } from 'react-router'



import ProjectCard from './ProjectCard'
import { addProject } from '../../../utils/projectSlice'





const Project = () => {
  const [error, setError] = useState("");
  const [response,setResponse] = useState("")
  const dispatch = useDispatch()
  const project  = useSelector((store)=>store?.project)
  const fetChProject  = async()=>{
    try {
      const projectResult = await axios.get(BASE_URL+"/user/projects",{withCredentials:true}) 
      const {projects} = projectResult?.data?.data
       dispatch(addProject(projects))
    } catch (error) {
      console.log(error)
    }
  }
  

    useEffect(()=>{
      const timer = setTimeout(() => {
        setError("");
        setResponse("")
      }, 3000);

      return()=>timer
    },[error, response]
  )

  useEffect(()=>{
fetChProject()
  },[])

  return (
    <div >
   {(error||response) &&     <div role="alert" className={"alert "+( error?"alert-error":"alert-success")}>
  <span>{error?error:response}</span>
</div>}
      <div className='p-2'>
        <h1 className='px-3 text-3xl'>Project
          <button className='btn btn-info ml-2'><Link to={'/admin/project/addProject'}>Add Project</Link></button>
          </h1> 
        
        
        <div className='flex flex-wrap p-1'>
    
{project && (project || []).map((item)=>{
  const {_id} = item
 return ( <ProjectCard key={_id} item={item} setError={setError} setResponse={setResponse}/>)
})}
          
        </div>
      </div>
    </div>
  )
}

export default Project





