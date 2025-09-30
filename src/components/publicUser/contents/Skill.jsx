import React from 'react'

import { useSelector } from 'react-redux';
import { PROFICIENCY_LEVELS } from '../../../utils/constants';
import useFetchSkill from '../../hooks/useFetchSkill';

const Skill = () => {
  const skillProgressMap = new Map();
  PROFICIENCY_LEVELS.reverse()
  for(let item=0;item<PROFICIENCY_LEVELS.length;item++){
    skillProgressMap.set(PROFICIENCY_LEVELS[item], ((1/(item+1))*100))
  }

  useFetchSkill();
  const skill = useSelector((store)=>store?.skill)
  return (
    <div >
      <h1  className='text-bold text-2xl m-3 pl-5' >Skill</h1>

     <div >



      <div>

      

            <div  className=''>


              <div  className="card bg-base-100 w-72 shadow-sm p-1 m-2 mx-auto my-auto">
                 {
        skill && 
        skill.map((item,  index)=>{

          const {_id , skillCategory, skillName, proficiencyLevel} = item;

          return(
  <div key={_id} className="card-body">
    <h2 className="card-title">{skillCategory} : {skillName}</h2>

  <progress className="progress progress-primary w-56 " value={skillProgressMap.get(proficiencyLevel)} max="100"></progress>
  </div>
     )

        })
      }
</div>
              </div>
       
     </div>


     </div>

    </div>
  )
}

export default Skill