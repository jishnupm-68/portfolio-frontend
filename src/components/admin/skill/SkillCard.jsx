import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../../../utils/constants'

const SkillCard = ({_id, skillCategory, skillName, proficiencyLevel, deleteSkill}) => {

   

  return (
    <div>


          <div className="card card-border shadow-lg bg-base-100 w-72 mx-1 mt-2">
              <div className="card-body">
                  
                  <p>Skill Category: {skillCategory} </p>
                  <p>Skill name: {skillName} </p>
                  <p>Proviciency Level: {proficiencyLevel} </p>
                  <div className="card-actions justify-end">
                      <button className="btn btn-warning" onClick={()=>deleteSkill(_id)}>Delete</button>
                  </div>
              </div>
          </div>


    </div>
  )
}

export default SkillCard