import "./Styles/CardProject.css"
import { useEffect, useState } from "react";

const CardProject = () => {
  const [dataInfo, setDataInfo] = useState([]);
  const [selected, setSelected] = useState(null)
  const [openModal, setOpenModal] = useState(false)

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

  const handleClick = (id) =>{
    setSelected(id)
    setOpenModal(true)
   }

   const closeModal = () => {
    setSelected(null);
    setOpenModal(false)
   }


   const selectedProject = dataInfo.find(project =>  project.id === selected)
   console.log(selectedProject?.name)


  const cardList = dataInfo.map(dataList =>
    <li className='card_info' id="card_info" onClick={() => handleClick(dataList.id)} key={dataList.id} itemID={dataList.name}>
      <section>
        <header className='card' >
          <img src={dataList.image} className='card_img' alt="" loading="lazy"/>
        </header>
        <article className='card_body'>
          <ul id="Card_target">
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
  <>
    <ul
    className='card_container'  loading="lazy" >
      {cardList}
    </ul>
    {openModal && selectedProject && (
        <div className="modal_overlay" onClick={closeModal}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <button className="modal_close" onClick={closeModal}>
              &times;
            </button>
            <img
              src={selectedProject?.image}
              alt={selectedProject?.name}
              className="modal_image"
            />
            <h2>{selectedProject?.name}</h2>
            <p>{selectedProject?.description}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default CardProject