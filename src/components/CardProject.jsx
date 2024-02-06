import React, { useEffect, useState } from 'react'
import "./Styles/CardProject.css"
import data from "../data/projects.json"

const CardProject = () => {

  const cardList = data.map(dataList =>
    <li className='card_info' key={dataList.id}>
      <div>
         <header className='card' >
          <img src={dataList.image} className='card_img' alt="" />
    </header>
    <div className='card_body'>
      <ul>
        <li className='card_title'> {dataList.name} </li>
        <li className='card_description'> {dataList.description} </li>
      </ul>
    </div>
     </div>
    </li>)

  return (
    <ul className='card_container'>
    { cardList }
    </ul>
  )
}

export default CardProject