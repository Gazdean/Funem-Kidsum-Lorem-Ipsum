import React, { useState } from 'react'
import kidsNames from '../temp-data/kidsNames.js'
import AddButton from '../components/AddButton.jsx'
import InfoButton from '../components/InfoButton.jsx'


export default function AddToKidictionaryKuotes() {
  const [newPerson, setNewPerson] = useState(false)
  const [showInfo, setShowInfo] = useState({showSelectNameInfo: false, showKidismInfo: false, showRealWordInfo: false, showFirstNameInfo: false, showDobInfo: false})


  function handleShowInfo(e) {
   
    const id = e.currentTarget.id
    const capitalisedId = id.slice(0,1).toUpperCase() + id.slice(1)
    const stateToSet = 'show' + capitalisedId
    // set all states to false except current target state
        setShowInfo((prevState)=> 
          Object.keys(prevState).reduce((acc, key) => {
            if(stateToSet === key) {
              acc[key] = !prevState[key]
            }
            else acc[key] = false;
            return acc;
          }, {})
        );
  }
  
  return (

    <div id='add-kidsms-page' className='bg-main h-[100vh] pt-6'>
      <div id='form-container' className='m-4'>
        <div id='add-buttons-container' className='flex justify-start'> 
          <AddButton newPerson={newPerson} setNewPerson={setNewPerson} isNewPersonButton={false} />
          <AddButton newPerson={newPerson} setNewPerson={setNewPerson} isNewPersonButton={true} />
        </div>
        <form id='form' className='border-2 p-4 bg-second flex flex-col'>
          {newPerson ?
            <>
              <div id='first-name-input-container' className='p-2 flex flex-col justify-start'>
                <label htmlFor="first-name-input" className=''>First name:</label>
                <input id='first-name-input' className='border-2 pl-1 pr-1' type='text'></input>
                <InfoButton buttonName={'firstName'} handleShowInfo={handleShowInfo} showInfo={showInfo} infoState={'showFirstNameInfo'}/>
                <p hidden={!showInfo.showFirstNameInfo}>Enables you to select who's kidisms you want in your placeholder text<br/>*Required</p>
              </div>

              <div id='select-dob-container' className='p-2 flex flex-col justify-start'>
                <label htmlFor="select-dob" className=''>DOB:</label>
                <input id='select-dob' className='border-2 pl-1 pr-1' type='date'></input>
                <InfoButton buttonName={'dob'} handleShowInfo={handleShowInfo} showInfo={showInfo} infoState={'showDobInfo'}/>
                <p hidden={!showInfo.showDobInfo}>Enables you to see at what age your kids said this<br/>*Not required</p>
              </div>
            </>
            :
            <div id='select-name-conatiner' className='p-2 flex flex-col justify-start'>
              <label htmlFor="select-name" className=''>Select Name:</label>
              <select id="select-name" className='border-2'>
                {kidsNames.map((name, index) => (
                  <option key={name+index}>{name}</option>)
                )}
              </select>
              <InfoButton buttonName={'selectName'} handleShowInfo={handleShowInfo} showInfo={showInfo} infoState={'showSelectNameInfo'}/>
                <p hidden={!showInfo.showSelectNameInfo}>Select which kid said the kidism<br/>*Required</p>
            </div>
          }
          <div id='new-kidism-container' className='p-2 flex flex-col justify-start'>
            <label htmlFor="new-kidism-input" className=''>Kidism:</label>
            <input id='new-kidism-input' className='border-2'></input>
            <InfoButton buttonName={'Kidism'} handleShowInfo={handleShowInfo} showInfo={showInfo} infoState={'showKidismInfo'}/>
            <p hidden={!showInfo.showKidismInfo}>Enter the word your kid says incorrectly<br/>*Required</p>
          </div>

          <div id='real-word-container' className='p-2 flex flex-col justify-start'>
            <label htmlFor="real-word-input" className=''>Real word:</label>
            <input id='real-word-input' className='border-2' type='text'></input>
            <InfoButton buttonName={'realWord'} handleShowInfo={handleShowInfo} showInfo={showInfo} infoState={'showRealWordInfo'}/>
            <p hidden={!showInfo.showRealWordInfo}>Enter the word your kid is trying to say<br/>*Required</p>
          </div>

          <button className='submit-button bg-main w-16 m-2' type='button'>Submit</button>

        </form>
      </div>
    </div>
  )
}