import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavLinks({classes, setIsOpen}) {

  return (
    <>
        <NavLink
            to={'/sign-in'}
            id='navbar-signin'
            className={classes}
            onClick={()=>setIsOpen(false)}
        >
            Sign in
        </NavLink>
        <NavLink
            to={'/register'}
            id='navbar-register'
            className={classes}
            onClick={()=>setIsOpen(false)}
        >
            Register
        </NavLink>
        <NavLink
            to={'/profile'}
            id='navbar-profile'
            className={classes}
            onClick={()=>setIsOpen(false)}
        >
            profile
        </NavLink>
    </>
  )
}
