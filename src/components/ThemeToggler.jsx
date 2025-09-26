import React, { useEffect, useState } from 'react'
import { CgDarkMode } from "react-icons/cg";
const ThemeToggler = () => {
    const handleThemeClick =()=>{
        setDark(!dark)
    }
    const root = document.documentElement
    const [dark, setDark] = useState(false);
    useEffect(()=>{
       root.setAttribute("data-theme",root.getAttribute("data-theme")==="dark"?"light":"dark")
    },[dark]);
  return (
    <div onClick={handleThemeClick} className='text-2xl'><CgDarkMode /></div>
  )
}

export default ThemeToggler