import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AccountVerifedMsg() {
  return (
    <>
      <h1 className='md:text-2xl text-xl mb-6 text-blue-800'>Your account has been verified</h1>
      <NavLink to="/sign-in">
        <button className='inline-block border-2 text-blue-800 border-blue-800 rounded-lg w-auto p-1 mt-4 mb-3' type="submit">Sign in</button>
      </NavLink>
    </>
  )
}
