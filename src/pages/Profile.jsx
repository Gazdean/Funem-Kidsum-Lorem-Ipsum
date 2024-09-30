import React from 'react'

export default function Profile() {
  return (
    <div id="profile-page" className='app columns-1 bg-main min-h-[74vh] w-full overflow-hidden border-r text-center flex flex-col justify-center items-center pt-4 pb-4 md:pt-10 md:pb-10'>
      <div className="border border-red-500 p-6 rounded-xl mb-6">
        <h1 className='text-3xl mb-8'>Profile</h1>
        <ol>
          <div className='flex items-center pb-4'>
            <li className='pr-4'>name: <em>John Johnson</em></li>
            <button className='border border-red-500 px-4 py-1 rounded-lg ml-auto'>Update</button>
          </div>
          <div className='flex items-center pb-4'>
            <li className='pr-4'>email: <em>johnjohnson@email.com</em></li>
            <button className='border border-red-500 px-4 py-1 rounded-lg ml-auto'>Update</button>
          </div>
          <div className='flex items-center pb-4'>
            <li className='pr-4'>Password:</li>
            <button className='border border-red-500 px-4 py-1 rounded-lg ml-auto'>Update</button>
          </div>
          <div className='flex items-center pb-4'>
            <li className='pr-4'>Manage Dictionaries:</li>
            <button className='border border-red-500 px-4 py-1 rounded-lg ml-auto'>View</button>
          </div>
          <div className='flex items-center pb-4'>
            <li className='pr-4'>Delete Profile</li>
            <button className='border border-red-500 px-4 py-1 rounded-lg ml-auto'>Delete</button>
          </div>
        </ol>
      </div>
      <h2>Notes</h2>
      <p>Must enter password to update info</p>
      <p>Must be a private component</p>
      <p>Dictionaries as a carousel?</p>
    </div>
  )
}
