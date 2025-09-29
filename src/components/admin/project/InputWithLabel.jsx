

import React from 'react'

const InputWithLabel = ({Label, optional,setValue, value ,type="text"}) => {
  return (
    <div>
            <fieldset className="fieldset">
  <legend className="fieldset-legend">{Label}</legend>
  <input type={type} className="input" placeholder="Type here" value={(new Date(value).toLocaleDateString("en-in"))?value:(new Date(value).toLocaleDateString("en-in"))} onChange={(e)=>setValue(e.target.value)} />
  <p className="label">{optional} {(typeof(new Date(value))=="date")?new Date(value).toLocaleDateString("en-in"):""}</p>
  
</fieldset>
    </div>
  )
}

export default InputWithLabel