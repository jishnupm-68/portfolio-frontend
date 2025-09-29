

import React from 'react'

const InputWithLabel = ({Label, optional,setValue, value ,type="text"}) => {
  return (
    <div>
            <fieldset className="fieldset">
  <legend className="fieldset-legend">{Label}</legend>
  <input type={type} className="input w-96 block w-full rounded-md bg-white/5 px-3 py-1.5 text-base dark:text-white outline-1 -outline-offset-1 dark:outline-white/ placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" placeholder="Type here" value={(new Date(value).toLocaleDateString("en-in"))?value:(new Date(value).toLocaleDateString("en-in"))} onChange={(e)=>setValue(e.target.value)} />
  <p className="label">{optional} { typeof(new Date(value).toLocaleDateString("en-in"))=="object"? new Date(value).toLocaleDateString("en-in"):""}</p>
  
</fieldset>
    </div>
  )
}

export default InputWithLabel