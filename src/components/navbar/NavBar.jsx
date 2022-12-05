import React from 'react'
import NavButton from './components/NavButton'
import NavMenu from './components/NavMenu'
import NavSearch from './components/NavSearch'
import './NavBarStyle.css'

export default function NavBar() {
  return (
    <div className='NavBar'>
        <NavMenu/>
        <NavSearch/>
        <NavButton/>
    </div>
  )
}
