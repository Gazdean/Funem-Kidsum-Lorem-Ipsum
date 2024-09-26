import React from 'react'
import logo from '../assets/images/logo.png'

export default function ({height='h-14', responsiveClasses}) {
  return (
         <img
              alt="Your Company"
              src={logo}
              className={`w-auto rounded-md ${height} ${responsiveClasses}`}
            />
  )
}
