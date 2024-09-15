import React, { useEffect, useRef, useState } from 'react';
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import data from '../temp-data/kidisms.js'
import  {numOptions, createPlaceholderTextArr} from '../../utilities.js'

export default function GetPlaceholderText() {
    const [numParagraphs, setNumParagraphs] = useState(1)
    const [numWords, setNumWords] = useState(0)
    const [incKuotes, setIncKuotes] = useState(false)
    const [loremIpsum, setLoremIpsum] = useState(false)
    const [hideCopied, setHideCopied] = useState(true)
    const [placeHolderTextArr, setplaceHolderTextArr] = useState(['Your text will appear here'])

    const numWordsOptionsArr = numOptions(1, 250)
    const numParasOptionsArr = numOptions(1, 4)

    const textRef = useRef(null);
    
    function copyToClipboard() {
        if (textRef.current) {
            const text = textRef.current.innerText;
            navigator.clipboard.writeText(text)
                .then(() => {
                    setHideCopied(false)
                    setTimeout(()=> {
                        setHideCopied(true)
                    }, 1000)
                })
                .catch(err => {
                    alert.error('Failed to copy text: ', err);
                });
        }
    };

    useEffect(()=> {
        if(numWords === 0 ) return
        const strArr = createPlaceholderTextArr(data, numParagraphs, numWords, loremIpsum)
        setplaceHolderTextArr(strArr)
    },[numWords, numParagraphs, loremIpsum, incKuotes])

    return (
        <div className='flex flex-col h-[93vh] pt-6 bg-main items-center'>

            <div id='placeholder-choices'>
                <div id='num-paragraphs-container' className='flex justify-center mb-4'>
                    <p>I would like</p>
                    <label htmlFor="paragraph-options"></label>
                    <select id="paragraph-options" name="paragraph-options" className='ml-2 mr-2' onChange={e=> setNumParagraphs(Number(e.target.value))}>
                        {numParasOptionsArr.map((option, index) => (
                            <option key={`numParasOption-${index}`} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <p>paragraphs of text</p>
                </div>

                <div id='num-words-container' className='flex justify-center mb-4'>
                    <p>with</p>
                    <label htmlFor="num-words-options"></label>
                    <select id="num-words-options" name="num-words-options" className='ml-2 mr-2' onChange={e=> setNumWords(Number(e.target.value))}>
                        {numWordsOptionsArr.map((option, index) => (
                            <option key={`numWordsOption-${index}`} value={option}>
                                {option}
                            </option>
                        ))}
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
                    onChange={e=> setIncKuotes(e.target.checked)}
                    className='form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded ml-3'
                />
                </label>

                <label htmlFor='lorem-ipsum-checkbox' className='flex items-center m-3'>
                    Lorem Ipsum Endings
                    <input
                        id='lorem-ipsum-checkbox'
                        type='checkbox'
                        value='loremIpsum'
                        onChange={e=> setLoremIpsum(e.target.checked)}
                        className='form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded ml-3'
                    />
                </label>
            </div>

            <div id='placeholder-result-container' className='result flex flex-col h-[93vh] w-[90vw] lg:w-[600px] m-4 border-2 border-second p-4'>         
                <button className='flex justify-end items-center mb-4' onClick={()=>{copyToClipboard()}}>
                    <p className='mr-2 text-xs bg-second rounded-lg p-1' hidden={hideCopied}>copied to clipboard</p>
                    <DocumentDuplicateIcon
                        aria-hidden="true"
                        className="h-8 w-8 text-gray-600 cursor-pointer rounded-lg m bg-second"
                    />
                </button>
                <div ref={textRef} id='complete-placeholder-text'>
                    {placeHolderTextArr && placeHolderTextArr.map((element, index, arr) => (
                            <p key={`para-${index}`} className='mb-6'>
                                {element}
                            </p>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}