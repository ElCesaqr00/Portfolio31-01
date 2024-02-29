import "./Styles/CardProject.css"
import data from "../data/projects.json"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

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
              <a href={dataList.Render}  target='_blank'  className='icon-links' >
              <i class="fa-solid fa-link"></i>
              </a>
            </div>
            <div>
              <a href={dataList.GitHub} target='_blank'  className='icon-links' >
              <i class="fa-brands fa-github"></i>
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