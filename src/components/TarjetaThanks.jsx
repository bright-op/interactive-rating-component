import React from 'react'
import thanksIcon from '../assets/images/illustration-thank-you.svg';


export default function TarjetaThanks({ starSelected, display }) {
    return (
        <div className='thanks-card card-main-content' style={{ display: display }}>
            <div className="img-holder">
                <img src={thanksIcon} alt="" />
                <p className='start-selected'>You selected {starSelected} out of 5</p>
            </div>
            <div className="contenido-tarjeta-thanks">
                <h1 className="titulo-principal">Thank You!</h1>
                <p>We appreciate you taking the time to give a rating. <br />If you ever need more support, don't hesitate to get in touch!</p>
            </div>
        </div>
    )
}
