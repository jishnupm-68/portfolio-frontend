import axios from 'axios';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL, CITY_PREFERENCE, GENDER_OPTIONS, LOCATION_PREFERENCE } from '../../../utils/constants';
import validator from "validator"
import { addUser } from '../../../utils/userSlice';
import DropDown from './DropDown';
import InputWithLabel from '../education/InputWithLabel';

const AdminProfile = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [gender, setGender] = useState("")
  const [description, setDescription] = useState("");
  const [designation, setDesignation] = useState("")
  const [contactEmail, setContactEmail] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [locationPreference, setLocationPreference] = useState("");
  const [cityPreference, setCityPreference] = useState("")
  const [response, setResponse] = useState("")
  const [error, setError] = useState("")
  const dispatch = useDispatch();
  const user = useSelector((store) => store?.user)

  const fetchUser = async () => {
    try {
      const result = await axios.get(BASE_URL + "/user/profile", { withCredentials: true })
      const userResult = result?.data?.data;
      dispatch(addUser(userResult))
      const { name, age, gender, description, designation, contactEmail, profileImageUrl, locationPreference, cityPreference } = userResult
      setName(name)
      setAge(age)
      setGender(gender)
      setDescription(description);
      setDesignation(designation);
      setContactEmail(contactEmail);
      setCityPreference(...cityPreference)
      setProfileImageUrl(...profileImageUrl);
      setLocationPreference(...locationPreference)

    } catch (error) {
      setError(error?.response?.data?.data?.message)
    }
  }
  useEffect(() => {
    fetchUser()
  }, [])

  const validateForm = (name, age, gender, description, designation, contactEmail, profileImageUrl, locationPreference, cityPreference) => {
    try {
      if (!name || !age || !gender || !description || !designation || !contactEmail || !profileImageUrl || !locationPreference || !cityPreference) throw new Error("Field cannot be empty")
      if (!validator.isEmail(contactEmail)) throw new Error("Email is invalid")
      if (!validator.isURL(profileImageUrl)) throw new Error("Profile image url is invalid")
      return true
    } catch (error) {
      setError(error?.message)
    }
  }


  const submitForm = (e) => {
    e.preventDefault();
    const result = validateForm(name, age, gender, description, designation, contactEmail, profileImageUrl, locationPreference, cityPreference)
    const updateUser = async () => {
      try {
        if (result) {
          const updateProfile = await axios.patch(BASE_URL + "/user/profile", { name, age, gender, description, designation, contactEmail, profileImageUrl, locationPreference, cityPreference }, { withCredentials: true })
          setResponse(updateProfile?.data?.message)
        }

      } catch (error) {
        console.log(error)
        setError(error?.response?.data?.message)
      }
    }
    updateUser()
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setError("")
      setResponse("")
    }, 3000);
    return () => timer;
  }, [error, response])

  return (
    <div>

      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight dark:text-white">Profile </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={submitForm}>

           <InputWithLabel Label={"Full Name: "} 
            value={name} setValue = {setName}
            optional={""}
            />

          <InputWithLabel Label={"Age "} 
            value={age} setValue = {setAge}
            optional={""} type={'number'}
            />

               <div className='flex flex-row justify-between'>
             <div >
               <label htmlFor="locationPreference" className="block text-sm/6 font-medium dark:text-gray-100">
                Location Preference
              </label>
             </div>
              <div className="mt-2">
                 <div className="mt-2">
                <DropDown SKILL_CATEGORIES={LOCATION_PREFERENCE} setCategory={setLocationPreference} category={locationPreference}/>
              </div>
              </div>
            </div>


            <div className='flex flex-row justify-between'>
              <div >
                <label htmlFor="cityPreference" className="block text-sm/6 font-medium dark:text-gray-100">
                City Preference
              </label>
              </div>
              <div className="mt-2">
                <DropDown SKILL_CATEGORIES={CITY_PREFERENCE} setCategory={setCityPreference} category={cityPreference}/>
              </div>
            </div>


            <div className='flex flex-row justify-between'>
             <div >
               <label htmlFor="locationPreference" className="block text-sm/6 font-medium dark:text-gray-100">
                Gender
              </label>
             </div>
              <div className="mt-2">
                 <div className="mt-2">
                <DropDown SKILL_CATEGORIES={GENDER_OPTIONS} setCategory={setGender} category={gender}/>
                
              </div>

              </div>

            </div>

            <div>
              <label htmlFor="description" className="block text-sm/6 font-medium dark:text-gray-100">
                Description
              </label>
              <div className="mt-2">
              
                <textarea className="textarea  w-96  block w-full rounded-md bg-white/5 px-3 py-1.5 text-base dark:text-white outline-1 -outline-offset-1 dark:outline-white/ placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                 placeholder="Bio"  value={description}
                  onChange={(e) => setDescription(e.target.value)}></textarea>

              </div>
            </div>

            <InputWithLabel Label={"Designation "} 
            value={designation} setValue = {setDesignation}
            optional={""} 
            />

            <InputWithLabel Label={"Contact Email "} 
            value={contactEmail} setValue = {setContactEmail}
            optional={""} 
            />

            <InputWithLabel Label={"Profile Image Url "} 
            value={profileImageUrl} setValue = {setProfileImageUrl}
            optional={""} 
            />

         


            <div>
              {error && <div role="alert" className="alert alert-vertical alert-error dark:text-gray-50 my-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span >Error! {error}</span>
              </div>}

              {response && <div role="alert" className="alert alert-success my-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{response}</span>
              </div>}
              <button
                type="submit"
                onSubmit={() => { submitForm() }}
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Click here to update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminProfile

