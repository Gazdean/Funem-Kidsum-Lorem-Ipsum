import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import NavLinks from './NavLinks'

function activePage(isActive) {  
    return `rounded-md px-3 py-2 text-sm font-medium ${isActive ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white'}`
}

export default function Header() {

  const [isOpen, setIsOpen] = useState(false)

  function toggleNav() {
    setIsOpen(!isOpen)
  }

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
      <>
        <div className='flex w-1/3 justify-end'>
          <nav className='hidden w-full justify-between md:flex'>
            <NavLinks />
          </nav>
          <div className="md:hidden">
            <button onClick={toggleNav}>
              {isOpen ? <XMarkIcon aria-hidden="true" className="h-6 w-6" /> : <Bars3Icon aria-hidden="true" className="block h-6 w-6" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <nav className='flex basis-full flex-col items-center md:hidden'>
            <NavLinks />
          </nav>
        )}
      </>
    </header>
  )
}


