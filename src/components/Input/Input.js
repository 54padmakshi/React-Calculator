import React from 'react'
import "./Input.css"

function Input({name,value,onChange,placeholder}) {
  return (
    <div>
   <input className='inp'
   type="text"
   name={name}
   value={value}
   onChange={onChange}
   placeholder={placeholder}
    />
   </div>
  )
}

export default Input