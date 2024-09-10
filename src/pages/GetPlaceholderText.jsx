import React, { useState } from 'react';
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline';

function numOptions() {
    const optionArr = []
    for(let i = 1; i <= 300; i++) {
      optionArr.push(<option key={`words${i}`} value={i} >{i}</option>)
    }
    return optionArr
}

export default function GetPlaceholderText() {
    const [clipBoard, setClipboard] = useState('')
    const [incKuotes, setIncKuotes] = useState(false)
    const [LoremIpsumEndings, setLoremIpsumEndings] = useState(false)

    return (
        <div className='flex flex-col h-[93vh] pt-6 bg-main items-center'>

            <div id='placeholder-choices'>
                <div id='num-paragraphs-container' className='flex justify-center mb-4'>
                    <p>I would like</p>
                    <label htmlFor="paragraph-options"></label>
                    <select id="paragraph-options" name="paragraph-options" className='ml-2 mr-2'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    </select>
                    <p>paragraphs of text</p>
                </div>

                <div id='num-words-container' className='flex justify-center mb-4'>
                    <p>with</p>
                    <label htmlFor="num-words-options"></label>
                    <select id="num-words-options" name="num-words-options" className='ml-2 mr-2'>
                    {numOptions()}
                    </select>
                    <p>words in each</p>
                </div>
            </div>

            <div id='checkboxes-container' className='flex justify-center items center'>   
                <label htmlFor='kuote-checkbox'className='flex items-center m-3'>
                    Include Kuotes  
                <input
                    id='kuote-checkbox'
                    type='checkbox'
                    value='incKuotes'
                    // checked={selectedOptions.includes('Option1')}
                    // onChange={handleCheckboxChange}
                    className='form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded ml-3'
                />
                </label>

                <label htmlFor='lorem-ipsum-checkbox' className='flex items-center m-3'>
                    Lorem Ipsum Endings
                    <input
                        id='lorem-ipsum-checkbox'
                        type='checkbox'
                        value='LoremIpsumEndings'
                        // checked={selectedOptions.includes('Option1')}
                        // onChange={handleCheckboxChange}
                        className='form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded ml-3'
                    />
                </label>
            </div>

            <div id='placeholder-result-container' className='result flex flex-col h-[93vh] w-[90vw] lg:w-[600px] m-4 border-2 border-second p-4'>          
                <button className='flex justify-end'>
                    <DocumentDuplicateIcon
                        aria-hidden="true"
                        className="h-8 w-8 text-gray-600 cursor-pointer rounded-lg m bg-second"
                    />
                </button>
                <p>kjahkfjhas</p>
            </div>
        </div>
    );
}