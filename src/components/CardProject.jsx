import React, { useEffect, useState } from 'react'
import "./Styles/CardProject.css"
import data from "../data/projects.json"
import { motion, transform } from "framer-motion"

const CardProject = () => {

const dataInfo = data;

  const cardList = dataInfo.map(dataList =>
    <li className='card_info' key={dataList.id} itemID={dataList.name}>
      <div>
        <header className='card' >
          <img src={dataList.image} className='card_img' alt="" />
        </header>
        <div className='card_body'>
          <ul>
            <li className='card_title'> {dataList.name} </li>
            <li className='card_description'> {dataList.description} </li>
          </ul>
          <div className='card_Links' >
            <div>
              <a href={dataList.Render} target='_blank'>
                <img src="images/IconProject/IconsCard/enlace.png" alt="" />
              </a>
            </div>
            <div>
              <a href={dataList.GitHub} target='_blank'>
                <img src="images/IconProject/IconsCard/github.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </li>)
    

  return (
    <ul
    className='card_container'>
      {cardList}
    </ul>
  )
}

export default CardProject