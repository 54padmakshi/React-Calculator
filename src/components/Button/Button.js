import React from 'react'


function Button({label,handleOperation}) {
  return (
    <button name = {label} onClick={handleOperation}  > 
    {label}
    </button>
  )
}

export default Button