import "./Styles/CardProject.css";
import data from "../data/projects.json";

const CardProject = ({ jsonData }) => {
  const cardList = data.map((dataList) => (
    <li key={dataList.id}>
      <div className="card">
        <header>
          <img src={dataList.image} alt="" />
        </header>
        <div className="card_body">
          <h2 className="card_body" > {dataList.name}</h2>
          <p className="card_body" > {dataList.description} </p>
        </div>
      </div>
    </li>
  ));

  return <ul className="card_container">{cardList}</ul>;
};

export default CardProject;
