import React from 'react'

export default function VerifyingAccountMsg() {
  return (
    <>
        <h1 className='md:text-2xl text-xl mb-6 text-blue-800'>Verifying your account</h1>
        <span className="relative flex h-6 w-6">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-800"></span>
            <span className="relative inline-flex rounded-full h-6 w-6 bg-sky-500"></span>
        </span>
    </>
  )
}
