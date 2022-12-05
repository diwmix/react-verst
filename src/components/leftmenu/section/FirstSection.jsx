import React from 'react'
import { AiOutlineYoutube } from 'react-icons/ai'
import { SlHome } from 'react-icons/sl'
import SubscribeIcon from '../../../source/SubscribeIcon'

export default function FirstSection(props) {
    const items = [{main: 'Головна', shorts: 'Shorts', subscribe: 'Підписки'}]
  return (
    <div className="LeftMenu-FirstSector">
    <div className="LeftMenu-MainBtn">
      <div className='Icon-Div'>
        <SlHome size={18}/>
      </div>
      <button>Головна</button>
    </div>
    <div className="LeftMenu-ShortsBtn">
      <div className='Icon-Div'>
        <AiOutlineYoutube size={20.5}/>
      </div>
      <button>Shorts</button>
    </div>
    <div className="LeftMenu-SubscribeBtn">
      <div className='Icon-Div'>
        <SubscribeIcon/>
      </div>
      <button>Підписки</button>
    </div>
  </div>
  )
}
