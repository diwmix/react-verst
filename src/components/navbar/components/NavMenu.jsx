 import React from 'react'
import NavHamburger from './NavHamburger'
import NavIcon from './NavIcon'

export default function NavMenu(menuActive, setMenuActive) {
  return (
    <div className='NavMenu'>
        <NavHamburger/>
        <NavIcon/>
    </div>
  )
}
