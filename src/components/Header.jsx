import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import NavMenu from './NavMenu'

function activePage(isActive) {  
    return `rounded-md px-3 py-2 text-sm font-medium ${isActive ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white'}`
}

export default function Header() {

  return (
    <header className="flex flex-wrap items-center justify-around w-full p-4 bg-second sticky top-0 z-[20] mx-auto">
      <div className="pl-6">
        <nav>
          <NavLink
            to={'/'}
            id='navbar-home'
            className={ ({isActive}) => {activePage(isActive)}}
          >
            <Logo height='h-14'/>
          </NavLink>
        </nav>
        
      </div>
      <NavMenu />
    </header>
  )
}


