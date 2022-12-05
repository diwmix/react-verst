import React from 'react'
import videoplayback from '../../../../source/videoplayback.mp4'
import Like from '../../../../source/Like'
import Share from '../../../../source/Share'
import Sort from '../../../../source/Sort'
import Commentary from './component/Commentary'


export default function LeftContent() {
  return (
    <div className='LeftContent'>      
 
      <div className="LeftContent-Video">
      <iframe width="100%" height="480" src="https://www.youtube.com/embed/3MyXX4HhvNM" title="KXLLSWXTCH - WASTE - 1 HOUR" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  
      </div>     
      <div className='LeftContent-VideoInfo'>
        <h1>KXLLSWXTCH - WASTE - 1 HOUR</h1>
        <div className="LeftContent-Action">
          <div className='LeftContent-OwnerAction'>
            <div className='OwnerIcon-Commentary'></div>
            <div className='Owner-Nickname-Subscribers'>
              <a className='Owner-Nickname' href="#">KXLLSWXTCH</a>
              <p className='Owner-Subscribers'>5,5 млн. підписників</p>  
            </div>             
            <div className="Owner-Buttons">
              <button className='LeftContent-Sponsor-Button'>Спонсорувати</button>
              <button className='LeftContent-Subscribe-Button'>Підписатися</button>
            </div>
          </div>
          <div className='Video-Buttons'>
            <div className='Like-Dislike-Button'>
                <button className='Like-Button'><Like/>1.4 млн.</button>
                <span className='Line-LikeDislike'>|</span>
                <button className='Dislike-Button'><Like/></button>
            </div>
            <div className='Share-Button-Div'>
              <button className='Share-Button'><Share/>Поділитися</button>
            </div>
            <div className='Another-Button-Div'>
              <button className='Another-Button'>...</button>
            </div>
          </div>
        </div>
        <div className="LeftContent-VideoStats">
          <div className="Data-Viewed-VideoStats">
            <p className='Viewed-Stats'>136 млн. переглядів</p>
            <p className='Data-Stats'>2 місяці назад</p>
          </div>
          <div className='More-VideoStats'>
            <button className='More-VideoStats-Span'>Ще</button>
          </div>
        </div>
        <div className="Commentary-Content">
          <h2 className='Commentary-Count'>1 Коментарів</h2>
          <div>
            <Sort/>
            <p className='Commentary-Sort'>Упорядкувати</p>
          </div>
        </div>
        <div className="Send-Commentary">
          <div className="OwnerIcon-Commentary"></div>
          <input type="text" placeholder='Введіть текст коментаря'/>
        </div>
        <Commentary/>
      </div>
    </div>
  )
}
