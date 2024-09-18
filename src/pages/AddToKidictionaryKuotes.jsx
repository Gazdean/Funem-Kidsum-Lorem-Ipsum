import React, { useState } from 'react'

const kidsNames = ['Dave', 'Cindy', 'Sandy']

export default function AddToKidictionaryKuotes() {
  const [newPerson, setNewPerson] = useState(false)
  return (

   <div className='m-48'> 
   <button className='bg-second border p-1 rounded-t-lg w-auto' onClick={() => setNewPerson(!newPerson)}>{newPerson ? 'Existing Kid' : 'New Kid'}</button>
    <form className='border-2 p-4'>
      {newPerson ? 
        <span id='name-container' className='p-2'>
          <label htmlFor="name-input">Name:</label>
          <input id='name-input' className='border-2 pl-1 pr-1'></input>
        </span>
        :
        <span id='select-name-conatiner'>
          <label htmlFor="select-name">select name:</label>
          <select id="select-name">
            {kidsNames.map((name, index) => (
              <option key={name+index}>{name}</option>)
            )}
          </select>
        </span>
      }
      <span id='new-kidism-container' className='p-2'>
        <label htmlFor="new-kidism">Kidism:</label>
        <input id='new-kidism' className='border-2'></input>
      </span>
      <span id='real-woed-container' className='p-2 '>
        <label htmlFor="real-word">Real word:</label>
        <input id='real-word' className='border-2'></input>
      </span>
    </form>
   </div>
  )
}