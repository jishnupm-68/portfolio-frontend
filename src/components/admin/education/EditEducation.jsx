import { useEffect, useState } from 'react'
import { BASE_URL } from '../../../utils/constants'
import { Link, useLocation, useNavigate } from 'react-router'
import axios from 'axios'
import InputWithLabel from './InputWithLabel'

const EditEducation = () => {
  const location = useLocation();
  const { institutionNameState, qualificationState, startDateState, endDateState, percentageState, idState } = location?.state || {}
  let [error, setError] = useState("")
  let [institutionName, setInstitutionName] = useState(institutionNameState)
  let [qualification, setQualification] = useState(qualificationState);
  let [startDate, setStartDate] = useState(startDateState)
  let [endDate, setEndDate] = useState(endDateState)
  let [percentageS, setPercentageS] = useState(percentageState)
  let navigate = useNavigate()

  const handleEditEducation = async (institutionName, qualification, startDate, endDate, percentageS) => {
    try {
      const percentage = parseInt(percentageS)
      if (!institutionName || !qualification) return setError("non-optional Field must be filled")
      if (startDate > endDate) return setError("end date mustbe after start date")
      if (percentage < 0 || percentage > 100) return setError("Percentage must be valid")
      const resultAddModule = await axios.patch(BASE_URL + "/user/education/" + idState,
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
            <h2 className="card-title">Edit Education</h2>
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
              <button className="btn btn-primary" onClick={() => handleEditEducation(institutionName, qualification, startDate, endDate, percentageS)}>Save Education</button>
            </div>
            <p className='text-red-500  items-center'>{error}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditEducation






