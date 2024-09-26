import React, { useState } from 'react'
import NavLinks from './NavLinks'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function NavMenu() {

    const [isOpen, setIsOpen] = useState(false)

    function toggleNav() {
        setIsOpen(!isOpen)
    }

    return (
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
    )
}
