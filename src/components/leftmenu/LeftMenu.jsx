import React from 'react'
import NavHamburger from '../navbar/components/NavHamburger'
import NavIcon from '../navbar/components/NavIcon'
import FirstSection from './section/FirstSection';
import './LeftMenuStyle.css'

export default function LeftMenu() {

  return (
    <div className='LeftMenu'>
        <div className='LeftMenu-title'>
            <NavHamburger />
            <NavIcon/>
        </div>
        <div className='LeftMenu-Button'>
          <FirstSection/>
        </div>
    </div>
  )
}
