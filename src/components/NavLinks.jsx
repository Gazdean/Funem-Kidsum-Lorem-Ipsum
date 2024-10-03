import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { NavLink } from 'react-router-dom'

export default function NavLinks({classes, setIsOpen}) {
    const [currentPathname, setCurrentPathname] = useState('')

    const location = useLocation()

    useEffect(()=> {
        setCurrentPathname(location.pathname)
    }, [location])

   
  return (
    <>
        <NavLink
            to={'/sign-in'}
            id='navbar-signin'
            className={`${classes} ${currentPathname === '/sign-in' ? 'bg-second border-blue-500' : 'border-[rgba(59,130,246,0.0)]'}`}
            onClick={()=>setIsOpen(false)}
        >
            Sign in
        </NavLink>
        <NavLink
            to={'/register'}
            id='navbar-register'
            className={`${classes} ${currentPathname === '/register' ? 'bg-second border-blue-500' : 'border-[rgba(59,130,246,0.0)]'}`}
            onClick={()=>setIsOpen(false)}
        >
            Register
        </NavLink>
        <NavLink
            to={'/profile'}
            id='navbar-profile'
            className={`${classes} ${currentPathname === '/profile' ? 'bg-second border-blue-500' : 'border-[rgba(59,130,246,0.0)]'}`}
            onClick={()=>setIsOpen(false)}
        >
            profile
        </NavLink>
    </>
  )
}
