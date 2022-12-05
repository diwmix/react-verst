import React from 'react'
import Like from '../../../../../source/Like'

export default function Commentary() {
  return (
    <div className='Commentary'>
        <div className='OwnerIcon-Commentary'></div>
        <div>
            <div className='OwnerNickname-CommentaryDate'>
                <p className='OwnerNickname'>@diwmix</p>
                <p className='CommentaryDate'>9 днів назад</p>
            </div>
            <div className='CommentaryText-Div'>
                <p className='CommentaryText'>Відео гамно, моя бабка краще робить!!!!!!! аооаоаоаоаоаоа</p>
            </div>
            <div className='Commentary-Action'>
                <div className='Commentarylike'><Like/><p>12</p></div>
                <div className='CommentaryDislike'><Like/></div>
                <div className='CommentaryReply'>Відповісти</div>
            </div>
        </div>

    </div>
  )
}
