import React from 'react'
import '../../Content.css'
import PlaylistComponent from "./component/PlaylistComponent"

export default function RightContent() {
  return (
    <div className='RightContent'>
      <div className='Playlist'>
        <div className="Playlist-Sort">
          <button autoFocus className='All-Video-Btn'><p className='Playlist-Btn'>Всі відео</p></button>
          <button className='Latest-Video-Btn' ><p className='Playlist-Btn'>Останні опубліковані відео</p></button>
          <button className='Watched-Video-Btn' ><p className='Playlist-Btn'>Переглянуто</p></button>
        </div>
      </div>
      <PlaylistComponent/>
      <PlaylistComponent/>
      <PlaylistComponent/>
      <PlaylistComponent/>
      <PlaylistComponent/>
      <PlaylistComponent/>
      <PlaylistComponent/>
      <PlaylistComponent/>
      <PlaylistComponent/>
    </div>
  )
}
