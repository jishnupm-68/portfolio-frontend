
import React from 'react'
import { useSelector } from 'react-redux'
import useFetchEducation from '../../hooks/useFetchEducation';

const EducationTimeLine = () => {
    const options = { month: "long", year: "numeric" };
    useFetchEducation()
    const education  = useSelector((store)=>store.education)
if(!education) return null
  return (
    <div>


        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  
  
  {education && education.map((item, index)=>{
    const {_id, institutionName, qualification, startDate, endDate, percentage} = item;
    
    return (<li key={_id}>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className={(index%2==0?"timeline-start ":"timeline-end ")+"mb-10 md:text-end"}>
      <time className="font-mono italic">{new Date(startDate).toLocaleDateString("en-india", {year:"numeric"})}</time>
      <div className="text-lg font-black">{institutionName}</div>
      {qualification}
     <p >Start : {new Date(startDate).toLocaleDateString("en-india", options)} </p>
      <p >End : {new Date(endDate).toLocaleDateString("en-india", options)} </p>
       <p >Percentage: {percentage}% </p>
    </div>
    <hr />
  </li>)
  })
  
  }




  
</ul>
    </div>
  )
}

export default EducationTimeLine