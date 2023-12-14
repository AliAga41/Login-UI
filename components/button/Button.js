import React from 'react'
import "./button.css"
function Button({onClick}) {
  return (
     <button className='button' onClick={onClick}>Log In</button>
  );
}

export default Button;