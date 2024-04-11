import React from 'react'
import "./Styles/CvDownload.css"
import cesarCv from  "/public/images/CesarCv.pdf"

const CvDownload = () => {

    const cvCesar = cesarCv

    return (
        <>
    <section className='Btn_Cv'>
    <a id="linkDwnId" className='linkDwn' href={cvCesar} download="CesarCv.pdf"></a>
     </section>
    </>
  )
}

export default CvDownload
