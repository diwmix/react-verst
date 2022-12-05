import React from 'react'

export default function NavHamburger({active, setActive}) {
  return (
    <div onClick={() => setActive(!active)} className='HamburgerContainer'>
        <div className='Hamburger'>
            <div className='Ham'></div>
            <div className='Ham'></div>
            <div className='Ham'></div>
        </div>
    </div>
  )
}

