import React from 'react'

function InputField({label,type}) {
 
  return (
    <div>
       <label htmlFor="Name">{label} </label>
        <input type={type} />
    </div>
  )
}

export default InputField
