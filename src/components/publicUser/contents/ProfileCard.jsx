import React from 'react'
import { useSelector } from 'react-redux'

const ProfileCard = () => {
  const user = useSelector((store) => store.user)
  if (!user) return null
  let { name, description, designation, profileImageUrl, cityPreference, locationPreference } = user
  return (
    <div>
      {user &&
        <div className='flex flex-row'>
          <div className='flex-3 w-96 card-body'>
            <img src={profileImageUrl} alt="" className='' />
          </div>
          <div className="card bg-base-100  flex-9 ">
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>{designation}</p>
              <p>{description}</p>
              <p>City: {cityPreference}</p>
              <p>Open to: {locationPreference == "any" ? "Remote | Hybrid | Onsite" : locationPreference}</p>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default ProfileCard