import React from 'react'
import NavLinks from './NavLinks'


export default function NavMenu({setIsOpen, isOpen}) {

    const navlinksClasses = 'mb-6 text-2xl'

    return (
        <div id="slideover-container" className={`fixed inset-0 w-ful h-full md:hidden ${isOpen ? 'visible' : 'invisible'}`}>
            <div id="slideover-bg" onClick={()=> {setIsOpen(!isOpen)}} className={`absolute duration-500 ease-out transition-all inset-0 w-full h-full bg-gray-900 ${isOpen ? "opacity-50" : "opacity-0"}`}></div>
            <div id="slideover" className={`absolute duration-500 ease-out transition-all w-72 h-full bg-second left-0 top-20 ${isOpen ? 'translate-x-0' : "-translate-x-full"} z-10 pt-6 pb-2 px-6 flex items-center justify-center`}>
                <nav className='flex flex-col'>
                    <button className="text-2xl" onClick={()=> {setIsOpen(!isOpen)}}>X</button>
                    <NavLinks classes={navlinksClasses} setIsOpen={setIsOpen}/>
                </nav>
            </div>
        </div>
    )
}
