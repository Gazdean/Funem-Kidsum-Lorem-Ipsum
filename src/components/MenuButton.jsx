import React from 'react'
import { useState } from 'react';

export default function MenuButton({isOpen, setIsOpen}) {
    
    const [topLinePos, setTopLinePos] = useState('M3.75 6.75 h16.5');
    const [bottomLinePos, setBottomLinePos] = useState('M3.75 17.25 h16.5');
    const [midLine1Pos, setMidLine1Pos] = useState('M3.75 12 h16.5');
    const [midLine2Pos, setMidLine2Pos] = useState('M3.75 12 h16.5');
    const [strokeColor, setStrokeColor] = useState('black')
    
    // function toggleNav() {
    //     setIsOpen(!isOpen)
    // }

    function toggleNav() {
      setIsOpen(!isOpen);
    //  if nav is open
      if(!isOpen) {
        setTopLinePos('M2 2.75 h20')
        setBottomLinePos('M2 21.25 h20')
        setMidLine1Pos('M3.75 12 h16.5')
        setMidLine2Pos('M3.75 12 h16.5')
        
      } 
    //   if nav is closed
      if(isOpen) {
        setTopLinePos('M3.75 6.75 h16.5')
        setBottomLinePos('M3.75 17.25 h16.5')
        setMidLine1Pos('M3.75 12 h16.5')
        setMidLine2Pos('M3.75 12 h16.5')
   
      }
    }

  return (
    <button onClick={toggleNav}>
        <svg
        className={`${isOpen ? "h-8" : "h-8"}`}
        fill="none"
        strokeWidth="1.5"
        stroke={strokeColor}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        // aria-hidden="true"
        aria-label="Expand menu button"
        strokeLinecap="round"
        strokeLinejoin="round"
        >

        <path
            id='top-line'
            className={`${
                isOpen
                    ? "transition-all duration-500"
                    : "transition-all duration-500"
                }`}
            d={topLinePos}
            stroke=""
        />

<path
                    id='middle-line-1'
                    className={`${
                        isOpen
                            ? "rotate-45 origin-center transition-all duration-500"
                            : "transition-all duration-500"
                    }`}
                    d={midLine1Pos}
                    style={{
                        transformOrigin: 'center', // Center of the line
                    }}
                />
                <path
                    id='middle-line-2'
                    className={`${
                        isOpen
                            ? "-rotate-45 origin-center transition-all duration-500"
                            : "transition-all duration-500"
                    }`}
                    d={midLine2Pos}
                    style={{
                        transformOrigin: 'center', // Center of the line
                    }}
                />
       

        <path
            id='bottom-line'
            className={`${
                isOpen
                    ? "transition-all duration-500"
                    : "transition-all duration-500"
                }`}
            d={bottomLinePos}
        />
        </svg>
    </button>
  )
}
