import React, { useState } from 'react'
import NavLinks from './NavLinks'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import MenuButton from './MenuButton'

export default function NavMenu() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className='flex w-1/3 justify-end'>
            <nav className='hidden w-full justify-between md:flex'>
                <NavLinks />
            </nav>
            <div className="md:hidden">
                <MenuButton isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
            </div>
            {isOpen && (
            <nav className='flex basis-full flex-col items-center md:hidden'>
                <NavLinks />
            </nav>
            )}
        </>
    )
}
