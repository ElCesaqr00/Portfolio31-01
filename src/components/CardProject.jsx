import "./Styles/CardProject.css"
import data from "../data/projects.json"

const CardProject = ({jsonData}) => {

  const cardList = data.map(dataList =>
    <li key={dataList.id}>
         <header className='card' >
      <img src={dataList.image} alt="" />
    </header> 
    <div>
      <h2> {dataList.name} </h2>
      <p> {dataList.description} </p>
    </div>
    </li>)

  return (
    <ul className='card_container'>
    { cardList }
    </ul>
  )
}

export default CardProject