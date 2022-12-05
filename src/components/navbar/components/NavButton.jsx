import React from 'react'
import { TfiUpload } from 'react-icons/tfi'
import { BsBell } from 'react-icons/bs'

export default function NavButton() {
  return (
    <div className='NavButton'>
      <div className='NavButton-Upload-Div'>
        <button title='Добавити відео' className='NavButton-Upload'><TfiUpload size={17}/></button>
      </div>
      <div className='NavButton-Notification-Div'>
        <button className='NavButton-Notification'><BsBell/></button>
      </div>
      <div className='NavButton-Profile-Div'>
        <div className="NavButton-Profile"></div>
      </div>
    </div>
  )
}
