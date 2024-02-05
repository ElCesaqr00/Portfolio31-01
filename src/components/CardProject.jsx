import React, { useEffect, useState } from 'react'
import "./Styles/CardProject.css"
import data from "../data/projects.json"
import axios from 'axios'

const CardProject = ({jsonData}) => {

  const cardList = data.map(dataList =>
    <li key={dataList.id}>
         <header className='card' >
      <img src={dataList.image} alt="" />
    </header> 
    </li>)

  return (
    <ul className='card_container'>
    { cardList }
    </ul>
  )
}

export default CardProject