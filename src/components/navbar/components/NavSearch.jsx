import React from 'react'
import { IoIosSearch } from 'react-icons/io';
import { FaKeyboard } from 'react-icons/fa';
import Microphone from '../../../source/Microphone.jsx';


export default function NavSearch() {

  return (
    <form action="">
      <div className='NavSearch'>
        <div className='Search'>
            <div className='SearchInput'>
              <input 
                className='inputNavSearch' 
                placeholder='Введіть запит' 
                type="text" 
              />
              <div className="SearchInput-Button">
                <button className='NavSearch-Keyboard'><FaKeyboard size={15} style={{fill: '#A0A0A0', width: '20px'}}/></button>
                <button type='reset' className='NavSearch-Clear'>Q</button>
              </div>
            </div>
          <button className='SearchButton'><IoIosSearch size={24}/></button>
        </div>
        <button><Microphone fill='white'/></button>
      </div>
    </form>
  )
}
