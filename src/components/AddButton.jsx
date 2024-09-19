import React from 'react';

export default function AddButton({ newPerson, setNewPerson, isNewPersonButton }) {
  return (
    <button 
      className={`bg-${newPerson === isNewPersonButton ? 'second' : 'third'} border p-1 rounded-t-lg w-auto`} 
      onClick={() => setNewPerson(isNewPersonButton)} 
      type="button"
    >
      {isNewPersonButton ? 'New Kid' : 'Existing Kid'}
    </button>
  );
}