import React,{ useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import NavMenu from './NavMenu'
import NavLinks from './NavLinks'
import MenuButton from './MenuButton'

// function activePage(isActive) {  
//     return `rounded-md px-3 py-2 text-sm font-medium ${isActive ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white'}`
// }

export default function Header() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 ">
      <div id="mainBar" className='z-20 relative flex items-center justify-around p-4 bg-gradient-to-t from-main to-second shadow-[0px_15px_38px_-15px_#414529]'>
        <nav className="pl-6">
          <NavLink
            to={'/'}
            id='navbar-home'
            // className={ ({isActive}) => {activePage(isActive)}}
          >
            <Logo height='h-14'/>
          </NavLink>
        </nav>
        <div className='flex w-1/3 justify-end'>
          <nav className='hidden md:flex w-full justify-between'>
              <NavLinks />
          </nav>
          <div className="md:hidden">
              <MenuButton isOpen={isOpen} setIsOpen={setIsOpen}/>
          </div>
        </div>
      </div>
      
      <NavMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
      
    </header>
  )
}


