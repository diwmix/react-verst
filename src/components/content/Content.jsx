import React from 'react'
import LeftContent from './component/leftcontent/LeftContent'
import RightContent from './component/rightcontent/RightContent'
import './Content.css'

export default function Content() {
  return (
    <div className='Content'> 
        <LeftContent/>
        <RightContent/>
    </div>
  )
}
