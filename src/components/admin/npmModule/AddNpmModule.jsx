import React, { useState } from 'react'
import { BASE_URL, TECH_STACK } from '../../../utils/constants'

import DropDown from '../content/DropDown'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'


const AddNpmModule = () => {
  const [techStack, setTechStack] =useState("Tech stack")
  const [helper, setHelper] = useState([""])
  const [error, setError] = useState("")
  const navigate = useNavigate()
  
  const handleAddModule = async(techStack,helper )=>{
      try {
        const helperName = helper.split(',')
        const resultAddModule =await axios.patch(BASE_URL+"/user/npmModules",
          {helperName, techStack},
          {withCredentials:true})
          if(resultAddModule) navigate("/admin/npmModule")

      } catch (error) {
        console.log(error)
        setError(error?.response?.data?.message)
      }
  }
  return (
    <div className='bg- h-1/3'>
        

        <div className=''>

                    <div className="mx-auto my-32 card card-border shadow-lg dark:border-amber-50 bg-base-200 w-96">
        <div className="card-body">
            <h2 className="card-title">Add new npm Module</h2>
            <div className='flex flex-row'><p>Tech category:  </p>
              <DropDown SKILL_CATEGORIES={TECH_STACK}
               category={techStack} setCategory={setTechStack}/> </div>
               <div className='flex flex-row'>
                <p>Module Name: </p> <input onChange={(e)=>setHelper(e.target.value)}
            type="text" placeholder="eg: express" className="input" value={helper}/>
               </div>
          


            <p className='text-primary'>Add more module using "," seperated</p>
            <div className="card-actions justify-end">
            <Link className="btn btn-warning" to={'/admin/npmModule'}>Cancel</Link>
            <button className="btn btn-primary" onClick={()=>handleAddModule(techStack, helper)}>Add Npm module</button>
            
            </div>
            <p className='text-red-500 text-2xl items-center'>{error}</p>
        </div>
        </div>
        </div>

    </div>
  )
}

export default AddNpmModule