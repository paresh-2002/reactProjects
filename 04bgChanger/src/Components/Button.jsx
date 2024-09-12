import React from 'react'

function Button({setColors, color}) {
  return (
    <button className={`outline-none shadow-lg px-4 py-1 rounded-full 'text-black' `} style={{backgroundColor:color}} onClick={() =>setColors(color)}>{color}</button>
  )
}

export default Button



