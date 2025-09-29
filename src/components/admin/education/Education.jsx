import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../../utils/constants'
import { useDispatch, useSelector } from 'react-redux'


import { Link, Outlet } from 'react-router'


import { addEducation } from '../../../utils/education'
import EducationCard from './EducationCard'




const Education = () => {
  const [error, setError] = useState("");
  const [response,setResponse] = useState("")
  const dispatch = useDispatch()
  const education  = useSelector((store)=>store?.education)
  const fetchEducation  = async()=>{
    try {
      const educationResult = await axios.get(BASE_URL+"/user/education",
        {withCredentials:true}) 
      const {education} = educationResult?.data?.data
       dispatch(addEducation(education))
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
fetchEducation()
  },[])

  return (
    <div>
   {(error||response) &&     <div role="alert" className={"alert "+( error?"alert-error":"alert-success")}>
  <span>{error?error:response}</span>
</div>}
      <div className='p-2'>
        <h1 className='px-3 text-3xl'>Education
          <button className='btn btn-info ml-2'><Link to={'/admin/education/addEducation'}>Add Education</Link></button>
          </h1> 
        <Outlet />
        <div className='flex flex-wrap p-1'>
{education && education.map((item)=>{
  const {_id} = item
 return ( <EducationCard key={_id} item={item} setError={setError} setResponse={setResponse}/>)
})}
          
        </div>
      </div>
    </div>
  )
}

export default Education





