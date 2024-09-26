import React from 'react';

export default function AddButton({ newPerson, setNewPerson, isNewPersonButton }) {
  const buttonClass = newPerson === isNewPersonButton ? 'bg-second' : 'bg-third';

  return (
    <button 
      className={`${buttonClass} border p-1 rounded-t-lg w-auto`} 
      onClick={() => setNewPerson(isNewPersonButton)} 
      type="button"
    >
      {isNewPersonButton ? 'New Kid' : 'Existing Kid'}
    </button>
  );
}
