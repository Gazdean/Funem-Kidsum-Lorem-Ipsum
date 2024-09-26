import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavLinks() {
  return (
    <>
        <NavLink
            to={'/sign-in'}
            id='navbar-signin'
            className=''
        >
            Sign in
        </NavLink>
        <NavLink
            to={'/register'}
            id='navbar-register'
            className=''
        >
            Register
        </NavLink>
        <NavLink
            to={'/profile'}
            id='navbar-profile'
            className=''
        >
        profile
        </NavLink>
    </>
  )
}
