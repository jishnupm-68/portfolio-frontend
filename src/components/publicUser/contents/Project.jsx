import React from 'react'

import { useSelector } from 'react-redux'
import useFetchProject from '../../hooks/useFetchProject'

const Project = () => {
  useFetchProject()
  const project = useSelector((store)=>store.project)
  return (
    <div>
      <h1 className='text-bold text-2xl m-3 pl-5'>Project</h1>

     <div className='flex flex-wrap  m-2 p-2'>
      {project && project.map((item, index)=>{
        const {_id, title, backEndUrl, frontEndUrl, imageUrl, description, liveProjectUrl}  = item
        return(
           <div key={_id} className="card bg-base-100 w-96 shadow-sm m-2">
  <figure>
    <img
      src={imageUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <a href={backEndUrl} className='btn btn-primary' target='new'>Backend Code</a>
      <a href={frontEndUrl} className='btn btn-primary' target='new'>Frontend Code</a>
      <a href={liveProjectUrl} className='btn btn-primary' target='new'>Live demo</a>
    </div>
  </div>
</div>
        )
      })}
     </div>




    </div>
  )
}

export default Project