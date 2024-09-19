import React from 'react'

export default function InfoButton({buttonName, handleShowInfo, showInfo, infoState}) {
  return (
    <button id={`${buttonName}Info`} className='flex border rounded-full w-5 h-5 bg-main text-s mt-2 justify-center items-center' type='button' onClick={(e)=> handleShowInfo(e)}><p className='info-text'>{showInfo[infoState] ? 'X' : '?'}</p></button>
  )
}
