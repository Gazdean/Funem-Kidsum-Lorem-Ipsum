import React from 'react'

export default function MenuButton({isOpen, setIsOpen}) {
    
  return (
    <>
    <button onClick={() => {setIsOpen(!isOpen)}}>
        <svg
        className={`${isOpen ? "h-8" : "h-8"}`}
        fill="none"
        strokeWidth="1.5"
        stroke='black'
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        aria-label="Expand menu button"
        strokeLinecap="round"
        strokeLinejoin="round"
        >

        <path
            id='top-line'
            className={ `transition-all duration-500 ${
              isOpen
                ? "-translate-y-1"
                : "translate-y-0"
              }`}
            d='M3.75 6.75 h16.5'
            stroke={isOpen ? '#EF4444' : 'black'}
        />

        <path
            id='middle-line-1'
            className={`transition-all duration-500 origin-center ${
                isOpen
                    ? "rotate-45"
                    : "-rotate-0"
            }`}
            d='M3.75 12 h16.5'
        />

        <path
            id='middle-line-2'
            className={`transition-all duration-500 origin-center ${
                isOpen
                    ? "-rotate-45 "
                    : "rotate-0"
            }`}
            d='M3.75 12 h16.5'
        />

        <path
            id='bottom-line'
            className={`transition-all duration-500 ${
                isOpen
                    ? "translate-y-1"
                    : "translate-y-0"
                }`}
            d='M3.75 17.25 h16.5'
            stroke={isOpen ? '#EF4444' : 'black'}
        />
        </svg>
    </button>
    </>
  )
}


