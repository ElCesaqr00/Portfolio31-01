import "./Styles/TecnoCard.css"

const TecnoCard = () => {
  return (
    <section className='containerTec'>
        <article className='tec-container'>
            <h1 className="tecnoContainer">Dominado</h1>
            <section className='img_container'>
                <img loading='lazy' className='img_Tecno' src="/images/Tecnologias/html-5.png" alt="" />
                <img loading='lazy' className='img_Tecno' src="/images/Tecnologias/css-3.png" alt="" />
                <img loading='lazy' className='img_Tecno' src="/images/Tecnologias/js.png" alt="" />
                <img loading='lazy' className='img_Tecno' src="/images/Tecnologias/react.png" alt="" />
                <img loading='lazy' className='img_Tecno' src="/images/Tecnologias/nodejs.png" alt="" />
                <img loading='lazy' className='img_Tecno' src="/images/Tecnologias/postgre.png" alt="" />
            </section>
        </article>
        <article className='tec-container'>
            <h1 className="tecnoContainer">Familiarizado</h1>
            <section className='img_container'>
                <img loading='lazy' className='img_Tecno' src="/images/Tecnologias/bootstrap.png" alt="" />
                <img loading='lazy' className='img_Tecno' src="/images/Tecnologias/tailwin.png" alt="" />
                <img loading='lazy' className='img_Tecno' src="/images/Tecnologias/python.png" alt="" />
                <img loading='lazy' className='img_Tecno' src="/images/Tecnologias/MongoDb.png" alt="" />
                <img loading='lazy' className='img_Tecno' src="/images/Tecnologias/sass.png" alt="" />
            </section>
        </article>
      
    </section>
  )
}

export default TecnoCard
