import React,{ useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import NavMenu from './NavMenu'
import NavLinks from './NavLinks'
import MenuButton from './MenuButton'

import defaultAvatar from '../assets/images/defaultAvatar.jpg'

export default function Header() {

  const [isOpen, setIsOpen] = useState(false)
  
  const menuNavLinkClasses = 'border-2 hover:border-red-500 py-1 px-4 rounded-2xl'
  const logoClasses = 'hover:border-2 hover:border-red-500'

  return (
    <header className="sticky top-0 ">
      <div id="mainBar" className='z-20 relative flex items-center justify-around p-4 bg-gradient-to-t from-main to-second shadow-[0px_15px_38px_-15px_#414529]'>
        <nav className="pl-6">
          <NavLink
            to={'/'}
            id='navbar-home'      
          >
            <Logo height='h-14' logoClasses={logoClasses}/>
          </NavLink>
        </nav>
        <div className='flex w-1/3 justify-end'>
          <nav className='hidden md:flex w-full justify-between' >
              <NavLinks setIsOpen={setIsOpen} classes={menuNavLinkClasses}/>
          </nav>
          <div className="md:hidden">
              <MenuButton isOpen={isOpen} setIsOpen={setIsOpen}/>
          </div>
        </div> 
        <img className="w-10 h-auto rounded-2xl" src={defaultAvatar} alt='profile avatar'></img>
      </div>
     
      <NavMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
      
    </header>
  )
}


