import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../../../utils/constants'

const NpmModuleCard = ({_id,helperName, techStack, deleteNpmModule }) => {

   

  return (
    <div>


          <div className="card card-border shadow-lg bg-base-100 w-72 mx-1 mt-2">
              <div className="card-body">
                  
                  <p>Tech Stack: {techStack} </p>
                  <p>Helper name: {helperName.map((item, index)=>{
                    return (<button key={index} className='btn btn-error p-1 m-1' onClick={()=>deleteNpmModule(techStack,item)}>{item}</button>)
                  })} </p>
                 
                  <p className='text-warning'>Click on the module name to delete skill</p>
              </div>
          </div>


    </div>
  )
}

export default NpmModuleCard