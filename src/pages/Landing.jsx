import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Landing() {
  return (
    <div className='app columns-1 bg-[#ccd97a] min-h-screen w-full overflow-hidden border-r text-center flex flex-col items-center'>
      <h1 className='text-3xl sm:text-5xl pt-2 ml-3 mr-3'>Funem Kidsum Lorem Ipsum</h1>
      <div className='app-intro bg-[#ecf4ba] m-6 p-5 rounded-3xl shadow-[20px_25px_40px_-15px_#414529] text-start max-w-2xl flex flex-col justify-center content-center'>  
        <p>Everyone knows place holder text can be just plain boring</p>
        <p>Everyone also knows kids say the funniest things</p>
        <p>If you have children and you use lorem ipsum this could be the app for you</p>
        <p>Simply upload your kidisms, then use the simple instructions to create your placeholder text, guaranteed to bring a smile to your face</p>
      </div>
      <div className='pb-3 flex'>
        <NavLink  to={'/sign-in'}>
          <button className='sign-button bg-[#7ca17e] text-[#ecf4ba] p-1.5 pr-3.5 pl-3.5 mr-3 rounded-lg shadow-[20px_25px_40px_-15px_#414529]' >Sign in</button>
        </NavLink>
        <NavLink  to={'/sign-up'}>
          <button className='sign-button bg-[#7ca17e] text-[#ecf4ba] p-1.5 pr-3.5 pl-3.5 ml-3 rounded-lg shadow-[20px_25px_40px_-15px_#414529]' >Sign up</button>
        </NavLink>
      </div>
      <div className='ml-6 mr-6'> 
        <p className='text-xl font-bold'>or</p>
        <p>just create non personalised placeholder text from our data base</p>
      </div>
      <NavLink  to={'/get-place-holder-text'}>
        <button className='sign-button bg-[#7ca17e] text-[#ecf4ba] p-1.5 pr-3.5 pl-3.5 mt-4 rounded-lg shadow-[20px_25px_40px_-15px_#414529]'>Get PlaceHolder Text</button> 
      </NavLink>
      <div className='kidism-def bg-[#ecf4ba] m-6 p-5 rounded-3xl shadow-[20px_25px_40px_-15px_#414529] max-w-2xl'>
        <p><em><strong>Kidism (noun):</strong></em> A charming or humorous linguistic mistake made by children when they mispronounce or incorrectly use words as they learn to speak. These errors often result in creative, cute, or funny versions of the intended words or phrases. Kidisms are a natural part of language development and are usually endearing to parents and adults. Examples include saying "carnack" instead of "car snack" or "choclick" instead of "chocolate"</p>
      </div>
    </div>
  )
}
