import React, { useEffect, useState } from 'react'
import { BASE_URL, SKILL_CATEGORIES } from '../../../utils/constants'
import { PROFICIENCY_LEVELS } from '../../../utils/constants'
import DropDown from '../content/DropDown'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'


const AddSkill = () => {
  const [skillCategory, setSkillCategory] =useState("Category")
  const [proficiencyLevel, setProficiencyLevel] = useState('Proficency')
  const [skillName, setSkillName] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  
  const handleAddSkill = async(skillCategory, skillName, proficiencyLevel)=>{
      try {
        if(!skillCategory || !skillName || !proficiencyLevel) return setError("All fields are required")
        const resultAddSkill =await axios.post(BASE_URL+"/user/skill",
          {skillCategory, skillName, proficiencyLevel},
          {withCredentials:true})
          if(resultAddSkill) navigate("/admin/skill")

      } catch (error) {
        console.log(error)
      }
  }
  useEffect(()=>{
    const timer = setTimeout(() => {
      setError("")
    }, 4000);
    return ()=>timer
  },[error])
  return (
    <div className='bg- h-1/3'>
        

        <div className=''>

                    <div className="mx-auto my-32 card card-border shadow-lg dark:border-amber-50 bg-base-200 w-96">
        <div className="card-body">
            <h2 className="card-title">Add new skill</h2>
            <div className='flex flex-row'><p>skill category:  </p>
              <DropDown SKILL_CATEGORIES={SKILL_CATEGORIES}
               category={skillCategory} setCategory={setSkillCategory}/> </div>
               <div className='flex flex-row'>
                <p>Skill Name: </p> <input onChange={(e)=>setSkillName(e.target.value)}
            type="text" placeholder="eg: express" className="input" value={skillName}/>
               </div>
            
            <div className='flex flex-row'>
 <p>Proviciency level: </p> <DropDown SKILL_CATEGORIES={PROFICIENCY_LEVELS} 
            category={proficiencyLevel} setCategory={setProficiencyLevel} />
            </div>
           
   
    


            
            <div className="card-actions justify-end">
            <Link className="btn btn-warning" to={'/admin/skill'}>Cancel</Link>
            <button className="btn btn-primary" onClick={()=>handleAddSkill(skillCategory, skillName, proficiencyLevel)}>Add skill</button>
            
            </div>
            <p className='text-red-500 text-2xl items-center'>{error}</p>
        </div>
        </div>
        </div>

    </div>
  )
}

export default AddSkill