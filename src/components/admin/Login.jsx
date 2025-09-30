import { useEffect, useState } from 'react'
import NavbarAdmin from './NavbarAdmin'
import validator from "validator"
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addUser } from '../../utils/userSlice';
import InputWithLabel from './education/InputWithLabel';

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("")
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const validateForm = (email, password, confirmPassword, name, isLoginForm) => {
    try {
      if (!isLoginForm) {
        if (!name) throw new Error("Name is empty")
      }
      if (!email) throw new Error("Email is empty")
      if (!validator.isEmail(email)) throw new Error("Email is invalid")
      if (!password) throw new Error("Password is empty")
      if (!isLoginForm) {
        if (password !== confirmPassword) throw new Error("Password not same")
      }
      if (password.length < 8) throw new Error("Password must be atleast 8 characters")
      return true
    } catch (error) {
      setError(error?.message)
    }
  }

  const login = async (email, password) => {
    try {
      const userResult = await axios.post(BASE_URL + "/login",
        { email, password }, { withCredentials: true })
      const user = userResult?.data?.data
      dispatch(addUser(user))
      navigate("/admin/profile")
    } catch (error) {
      setError(error?.response?.data?.message)
    }
  }

  const signup = async () => {
    try {
      const user = await axios.post(BASE_URL + "/signup",
        { name, email, password }, { withCredentials: true })
    } catch (error) {
      setError(error?.response?.data?.message)
    }
  }

  const submitForm = (e) => {
    e.preventDefault();
    const result = validateForm(email, password, confirmPassword, name, isLoginForm)
    if (result && isLoginForm) login(email, password)
    if (result && !isLoginForm) signup(name, email, password)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setError("")
    }, 3000);
    return () => timer;
  }, [error])

  return (
    <>
      <NavbarAdmin />
      {error && <div role="alert" className="alert alert-error dark:text-gray-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span >Error! {error}</span>
      </div>}
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight dark:text-white">{isLoginForm ? "Sign in" : "Sign up"} </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={submitForm}>
            {!isLoginForm &&
              <div>
                <InputWithLabel Label={"Full Name: "}
                  value={name} setValue={setName}
                  optional={""}
                />
              </div>}
            <div>
              <InputWithLabel Label={"Email address: "}
                value={email} setValue={setEmail}
                optional={""}
              />
            </div>
            <div>
              <InputWithLabel Label={"Password: "}
                value={password} setValue={setPassword}
                optional={""} type={"password"}
              />
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  {isLoginForm && <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                    Forgot password?
                  </a>}
                </div>
              </div>
              {!isLoginForm && <div>
                <InputWithLabel Label={"Confirm Password: "}
                  value={confirmPassword} setValue={setConfirmPassword}
                  optional={""} type={"password"}
                />
              </div>}
            </div>
            <div>
              <button
                type="submit"
                onSubmit={() => { submitForm() }}
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                {isLoginForm ? "Sign in" : "Sign up"}
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm/6 text-gray-400">
            {isLoginForm ? "Not a member? " : "Already a member? "}
            <button className="font-semibold text-indigo-400 cursor-pointer hover:text-indigo-300"
              onClick={() => { setIsLoginForm(!isLoginForm) }}>
              {isLoginForm ? "Signup here" : "Sign in here"}
            </button>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login




  