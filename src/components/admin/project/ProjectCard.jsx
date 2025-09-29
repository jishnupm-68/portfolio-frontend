import axios from 'axios'
import React from 'react'
import { CiLink } from "react-icons/ci";
import { BASE_URL } from '../../../utils/constants'
import { Link } from 'react-router'
import { useDispatch } from 'react-redux'
import { addProject, removeProject } from '../../../utils/projectSlice'

const ProjectCard = ({item,setError,setResponse}) => {
    const dispatch = useDispatch()

    const deleteProject = async (_id)=>{
        try {
            const deleteResult = await axios.delete(BASE_URL+"/user/projects/"+_id,
                {withCredentials:true})
            setResponse(deleteResult?.data?.message)
            if(deleteResult){
                dispatch(removeProject())
                 const {projects} = deleteResult?.data?.data
                dispatch(addProject(projects))
            }
            
        } catch (error) {
            setError(error?.response?.data?.message)
            console.log(error)
        }
    }
    const {_id, title, description, imageUrl, liveProjectUrl, frontEndUrl, backEndUrl, technologies, category} = item
  return (
    <div>


          <div className="card card-border shadow-lg bg-base-100 w-72 mx-1 mt-2">
              <div className="card-body">
                <figure>
    <img
      src={imageUrl}
      alt="project image" />
  </figure>
                  
                  <p>Title: {title} <a href={liveProjectUrl} className="link link-primary" target='new'><CiLink size={25}/> </a>  </p>
                  <p>Description: {description}</p>

                  

                   <p>Front end Url : <a href={frontEndUrl} className="link link-primary" target='new'><CiLink size={25}/> </a></p>

                  <p>Backend Url: <a href={backEndUrl} className="link link-primary" target='new'><CiLink size={25}/> </a></p>

                  <p>Technologies: {technologies}</p>
                  <p>Categories: {category}</p>
                  <div>
                    <button  className='btn btn-warning' onClick={()=>deleteProject(_id)}>Delete</button>
                    <button className=' ml-2 btn btn-info'>
                        <Link to={"/admin/project/editProject"}
                        state={{_idState:_id, titleState:title, descriptionState:description, imageUrlState:imageUrl, liveProjectUrlState:liveProjectUrl, frontEndUrlState:frontEndUrl, backEndUrlState:backEndUrl, technologiesState:technologies, categoryState:category,
                            
                        }}
                    >Edit</Link></button>
                  </div>
                  
                 
              </div>
          </div>


    </div>
  )
}

export default ProjectCard