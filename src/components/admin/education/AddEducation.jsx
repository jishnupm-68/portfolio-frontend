import { useEffect, useState } from 'react'
import { BASE_URL } from '../../../utils/constants'

import { Link, useNavigate } from 'react-router'
import axios from 'axios'
import InputWithLabel from './InputWithLabel'

const AddEducation = () => {
  const [error, setError] = useState("")
  const [institutionName, setInstitutionName] = useState("")
  const [qualification, setQualification] = useState("");
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [percentageS, setPercentageS] = useState("")
  const navigate = useNavigate()

  const handleAddEducation = async (institutionName, qualification, startDate, endDate, percentageS) => {
    try {
      const percentage = parseInt(percentageS)
      if (!institutionName || !qualification) return setError("non-optional Field must be filled")
      if (startDate > endDate) return setError("end date mustbe after start date")
      const resultAddModule = await axios.post(BASE_URL + "/user/education",
        { institutionName, qualification, startDate, endDate, percentage },
        { withCredentials: true })
      if (resultAddModule) navigate("/admin/education")
    } catch (error) {
      console.log(error)
      setError(error?.response?.data?.message)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setError("")
    }, 4000);
    return () => timer
  }, [error])
  return (
    <div className='bg- h-1/3'>
      <div className=''>
        <div className="mx-auto my-32 card card-border shadow-lg dark:border-amber-50 bg-base-200 w-96">
          <div className="card-body">
            <h2 className="card-title">Add Education</h2>
            <InputWithLabel Label={"Institution Name: "}
              value={institutionName} setValue={setInstitutionName}
              optional={""}
            />
            <InputWithLabel Label={"Qualification: "}
              value={qualification} setValue={setQualification}
              optional={""}
            />
            <InputWithLabel Label={"Start Date: "}
              value={startDate} setValue={setStartDate}
              optional={"optional"} type={"date"}
            />
            <InputWithLabel Label={"End Date: "}
              value={endDate} setValue={setEndDate}
              optional={"optional"}
              type={"date"}
            />
            <InputWithLabel Label={"Percentage: "}
              value={percentageS} setValue={setPercentageS}
              optional={"optional"} type={"number"}
            />
            <div className="card-actions justify-end">
              <Link className="btn btn-warning" to={'/admin/education'}>Cancel</Link>
              <button className="btn btn-primary" onClick={() => handleAddEducation(institutionName, qualification, startDate, endDate, percentageS)}>Add Education</button>
            </div>
            <p className='text-red-500  items-center'>{error}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddEducation





