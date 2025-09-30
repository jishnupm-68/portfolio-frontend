import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../../../utils/constants'
import { Link, useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { addEducation, removeEducation } from '../../../utils/education'

const EducationCard = ({ item, setError, setResponse }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const deleteEducation = async (_id) => {
        try {
            const deleteResult = await axios.delete(BASE_URL + "/user/education/" + _id,
                { withCredentials: true })
            setResponse(deleteResult?.data?.message)
            if (deleteResult) {
                dispatch(removeEducation())
                const { education } = deleteResult?.data?.data
                dispatch(addEducation(education))
            }
        } catch (error) {
            setError(error?.response?.data?.message)
            console.log(error)
        }
    }
    const { _id, institutionName, qualification, startDate, endDate, percentage } = item
    return (
        <div>
            <div className="card card-border shadow-lg bg-base-100 w-72 mx-1 mt-2">
                <div className="card-body">
                    <p>Institution Name: {institutionName} </p>
                    <p>Qualification: {qualification}</p>
                    <p>Start Date: {startDate && new Date(startDate).toLocaleDateString("en-in")}</p>
                    <p>Start Date: {endDate && new Date(endDate).toLocaleDateString("en-in")}</p>
                    <p>Percentage: {percentage}</p>
                    <div>
                        <button className='btn btn-warning' onClick={() => deleteEducation(_id)}>Delete</button>
                        <button className=' ml-2 btn btn-info'>
                            <Link to={"/admin/education/editEducation"}
                                state={{ idState: _id, institutionNameState: institutionName, qualificationState: qualification, startDateState: startDate, endDateState: endDate, percentageState: percentage }}
                            >Edit</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationCard