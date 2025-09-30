import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addSkill, removeSkill } from '../../../utils/skillSlice'
import SkillCard from './SkillCard'
import { Link, Outlet } from 'react-router'
import useFetchSkill from '../../hooks/useFetchSkill'

const Skill = () => {
  const [error, setError] = useState("");
  const [response,setResponse] = useState("")
  const dispatch = useDispatch()
  const skill  = useSelector((store)=>store?.skill)
  // const fetchSkill  = async()=>{
  //   try {
  //     const skillResult = await axios.get(BASE_URL+"/user/skill",{withCredentials:true})
  //     const {skill} = skillResult?.data?.data
  //     dispatch(addSkill(skill))

  //   } catch (error) {
  //     console.log(Error)
  //   }
  // }

   const deleteSkill = async(_id)=>{
        try {
            const deleteResult = await axios.delete(BASE_URL+"/user/skill/"+_id, {withCredentials:true})
            dispatch(removeSkill())
            dispatch(addSkill(deleteResult?.data?.data?.skill))
            setResponse(deleteResult?.data?.message)
        } catch (error) {
          console.log(error)
          setError(error?.response?.data?.message)
            
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

//   useEffect(()=>{
// fetchSkill()
//   },[])
useFetchSkill()

  return (
    <div>
   {(error||response) &&     <div role="alert" className={"alert "+( error?"alert-error":"alert-success")}>
  <span>{error?error:response}</span>
</div>}
      <div className='p-2'>
        <h1 className='px-3 text-3xl'>Skills 
          <button className='btn btn-info ml-2'><Link to={'/admin/skill/addSkill'}>Add Skill</Link></button>
          </h1> 
        <Outlet />
        <div className='flex flex-wrap p-1'>

          {skill && skill.map((item)=>{ 
            const {_id,skillName, skillCategory, proficiencyLevel} = item
           return(
            <SkillCard key={_id} skillName={skillName} _id={_id} deleteSkill={deleteSkill} skillCategory={skillCategory} proficiencyLevel={proficiencyLevel} />
           )
          })}
        </div>
      </div>
    </div>
  )
}

export default Skill