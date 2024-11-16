import "./Styles/CardProject.css"
import { useEffect, useState } from "react";

const CardProject = () => {
  const [dataInfo, setDataInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../projects.json');
        const data = await response.json();
        setDataInfo(data);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };

    fetchData();
  }, []);

  const cardList = dataInfo.map(dataList =>
    <li className='card_info'  key={dataList.id} itemID={dataList.name}>
      <section>
        <header className='card' >
          <img src={dataList.image} className='card_img' alt="" loading="lazy"/>
        </header>
        <article className='card_body'>
          <ul>
            <li className='card_title'> {dataList.name} </li>
            <li className='card_description'> {dataList.description} </li>
          </ul>
          <article className='card_Links' >
            <article>
              <a href={dataList.Render}  target='_blank'  className='icon-links' rel="noreferrer">
              <i className="fa-solid fa-link"></i>
              </a>
            </article>
            <article>
              <a href={dataList.GitHub} target='_blank'  className='icon-links' rel="noreferrer" >
              <i className="fa-brands fa-github"></i>
              </a>
            </article>
          </article>
        </article>
      </section>
      
    </li>)
    
  return (
    <ul
    className='card_container'  loading="lazy" >
      {cardList}
    </ul>
  )
}

export default CardProject