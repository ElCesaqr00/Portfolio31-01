import React from 'react'
import dataCertf from "../data/certificates.json"
import "./Styles/CardCertificate.css"

const CardCertificate = () => {
   const data = dataCertf;

    const dataList = data.map( dataInfo => (
        <li key={dataInfo.id} className='Card_Certificate'>
            <header className='header_img'>
                <img className='Card_img'src={dataInfo.url} alt="" />
            </header>
            <h1>{dataInfo.name}</h1>
        </li>
    ));
    
   
  return (
    <ul loading="lazy"  className='card_certificate'>
      {dataList}
    </ul>
  )
}

export default CardCertificate
