import { useEffect, useState } from 'react'
import { BASE_URL, PROJECT_CATEGORY, TECH_STACK } from '../../../utils/constants'
import { Link, useLocation, useNavigate } from 'react-router'
import axios from 'axios'
import InputWithLabel from './InputWithLabel'
import DropDown from '../content/DropDown'
import { useDispatch, useSelector } from 'react-redux'
import { addProject, removeProject } from '../../../utils/projectSlice'

const EditProject = () => {
  const location = useLocation();
  const dispatch = useDispatch()
  const { _idState, titleState, descriptionState, imageUrlState, liveProjectUrlState, frontEndUrlState, backEndUrlState, technologiesState, categoryState } = location?.state || {}
  const project = useSelector((store) => store?.project)
  let [errorLocal, setErrorLocal] = useState("")
  let [title, setTitle] = useState(titleState)
  let [description, setDescription] = useState(descriptionState);
  let [imageUrl, setImageUrl] = useState(imageUrlState)
  let [liveProjectUrl, setLiveProjectUrl] = useState(liveProjectUrlState);
  let [frontEndUrl, setFrontEndUrl] = useState(frontEndUrlState);
  let [backEndUrl, setBackEndUrl] = useState(backEndUrlState);
  let [technologies, setTechnologies] = useState(technologiesState);
  let [category, setCategory] = useState(categoryState);
  let navigate = useNavigate()

  const handleEditProject = async (_idState, title, description, imageUrl, liveProjectUrl, frontEndUrl, backEndUrl, technologies, category) => {
    try {
      const _id = _idState
      if (!title || !description || !liveProjectUrl || !frontEndUrl || !backEndUrl || !technologies || !category) return setError("All Field must be filled")
      const resultEditProject = await axios.patch(BASE_URL + "/user/projects",
        { _id, title, description, imageUrl, liveProjectUrl, frontEndUrl, backEndUrl, technologies, category },
        { withCredentials: true })
      if (resultEditProject) {
        setErrorLocal(resultEditProject?.data?.message)
        const { projects } = resultEditProject?.data
        dispatch(removeProject())
        dispatch(addProject(projects))
        navigate("/admin/project")
      }
    } catch (error) {
      console.log(error)
      setErrorLocal(error?.response?.data?.message)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorLocal("")
    }, 4000);
    return () => timer
  }, [errorLocal])
  return (
    <div className='bg- h-1/3'>
      <div className=''>
        <div className="mx-auto my-32 card card-border shadow-lg dark:border-amber-50 bg-base-200 w-96">
          <div className="card-body">
            <h2 className="card-title">Edit Project</h2>
            <InputWithLabel Label={"Title: "}
              value={title} setValue={setTitle}
              optional={""}
            />
            <div>
              <label className="block text-sm/6 font-medium dark:text-gray-100">
                Description
              </label>
              <div className="mt-2">
                <textarea className="textarea  w-96  block w-full rounded-md bg-white/5 px-3 py-1.5 text-base dark:text-white outline-1 -outline-offset-1 dark:outline-white/ placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  placeholder="Bio" value={description}
                  onChange={(e) => setDescription(e.target.value)}></textarea>
              </div>
            </div>
            <InputWithLabel Label={"Image url"}
              value={imageUrl} setValue={setImageUrl}
              optional={""}
            />
            <InputWithLabel Label={"Live project url "}
              value={liveProjectUrl} setValue={setLiveProjectUrl}
              optional={""}
            />
            <InputWithLabel Label={"Frontend Url: "}
              value={frontEndUrl} setValue={setFrontEndUrl}
              optional={""}
            />
            <InputWithLabel Label={"Backend Url: "}
              value={backEndUrl} setValue={setBackEndUrl}
              optional={""}
            />
            <InputWithLabel Label={"Technologies: "}
              value={technologies} setValue={setTechnologies}
              optional={""}
            />
            <div className='flex flex-row'>
              <p>Category: </p> <DropDown SKILL_CATEGORIES={PROJECT_CATEGORY}
                category={category} setCategory={setCategory} />
            </div>
            <div className="card-actions justify-end">
              <Link className="btn btn-warning" to={'/admin/project'}>Cancel</Link>
              <button className="btn btn-primary" onClick={() => handleEditProject(_idState, title, description, imageUrl, liveProjectUrl, frontEndUrl, backEndUrl, technologies, category)}>Save Project</button>
            </div>
            <p className='text-red-500  items-center'>{errorLocal}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProject
