
import { useSelector } from 'react-redux';
import useFetchSkill from '../../hooks/useFetchSkill';

const Skill = () => {
  const levels = new Map([
    ["beginner", 25],
    ["intermediate", 50],
    ["advanced", 75],
    ["expert", 100]
  ]);

  useFetchSkill();
  const skill = useSelector((store) => store?.skill)
  return (
    <div >
      <h1 className='text-bold text-2xl m-3 pl-5' >Skill</h1>
      <div >
        <div>
          <div className='flex flex-wrap'>
            {
              skill &&
              skill.map((item, index) => {
                const { _id, skillCategory, skillName, proficiencyLevel } = item;
                return (
                  <div key={_id} className="card  bg-base-500 w-72 shadow-sm p-1 m-2 mx-auto my-3  ">
                    <div key={_id} className="card-body ">
                      <h2 className="card-title">{skillCategory} : {skillName} </h2>
                      <progress className="progress progress-primary w-56 " value={levels.get(proficiencyLevel)} max="100"></progress>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill