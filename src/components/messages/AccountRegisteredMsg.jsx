import React from 'react'
import { useNavigate } from 'react-router'


export default function AccountRegisteredMsg({setRegistered}) {
  const navigate = useNavigate()

  const handleOnClick = ()=> {
      setRegistered(false)
      navigate('/sign-in')
  }

  return (
    <div id="verifyAcountMsgContainer" className='absolute z-10 flex flex-col items-center justify-center bg-second md:w-1/4 px-12 py-6 mx-12 rounded-2xl shadow-[20px_25px_40px_-15px_#414529]'>
      <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none" onClick={handleOnClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h1 className='text-2xl mb-6 text-blue-800'>Registered</h1>
      <div className='flex flex-col items-center justify-center text-center'>
        <p>A verification email has been sent</p>
        <p>Please check your inbox and follow the instructions to verify your account before signing in</p>
      </div>
    </div>
  )
}
