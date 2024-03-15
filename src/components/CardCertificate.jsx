import React, { useEffect, useState } from 'react'
import "./Styles/CardCertificate.css"

const CardCertificate = () => {
  const [dataJson, setDataJson] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../certificates.json');
        const data = await response.json();
        setDataJson(data);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };

    fetchData();
  }, []);

    const dataList = dataJson.map( dataInfo => (
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
