import React from 'react'
import useFetchSkill from '../hooks/useFetchSkill'
import { useSelector } from 'react-redux';
import { PROFICIENCY_LEVELS } from '../../../utils/constants';

const Skill = () => {
  const skillProgressMap = new Map();
  PROFICIENCY_LEVELS.reverse()
  for(let item=0;item<PROFICIENCY_LEVELS.length;item++){
    skillProgressMap.set(PROFICIENCY_LEVELS[item], ((1/(item+1))*100))
  }
  console.log(skillProgressMap)
  useFetchSkill();
  const skill = useSelector((store)=>store?.skill)
  return (
    <div className='flex flex-row' >
      <h1  className='text-bold text-2xl m-3 pl-5' >Skill</h1>

     <div>

       {
        skill && 
        skill.map((item,  index)=>{

          const {_id , skillCategory, skillName, proficiencyLevel} = item;

          return(<div key={_id} className="card bg-base-100 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{skillCategory} : {skillName}</h2>
    
    {/* For TSX uncomment the commented types below */}
<div
  className="radial-progress bg-primary text-primary-content border-primary border-4"
  style={{ "--value": skillProgressMap.get(proficiencyLevel) } /* as React.CSSProperties */ } aria-valuenow={skillProgressMap.get(proficiencyLevel)} role="progressbar">
  {skillProgressMap.get(proficiencyLevel)}%
</div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>)

        })
      }
     </div>

    </div>
  )
}

export default Skill