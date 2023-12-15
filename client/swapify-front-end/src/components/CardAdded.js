import React from "react";
import { useState } from "react";
import './PopUp.css'
import qrCodeImage from '../images/qr-code.png'

function CardAdded({ eventiAggiunti }) {
  const [isPopupVisible, setPopupVisible] = useState(false)

  const seeQrCode = async () => {
    setPopupVisible(true);
  }
  

  return (
    <div>
      <h2>Eventi in programma</h2>
      <p>Visualizza qui gli eventi a cui parteciperai.</p>
      <div className="wrapper-added-events">
        {eventiAggiunti && eventiAggiunti.map((evento, index) => (
          <div className="cards__item" key={index}>
            <figure className="cards__item__pic-wrap" data-category={evento.label}>
              <img
                src={evento.src}
                alt="Event image"
                className="cards__item__img">
              </img>
            </figure>
            <div className="cards__item__info">
              <h2 className="cards__item__title">
                {evento.title}
              </h2>
              <span className="cards__item__date">
                <i className="fa-regular fa-calendar card-icon" />
                {evento.date}
              </span>
              <span className="cards__item__place">
                <i className="fa-solid fa-location-dot card-icon" />
                {evento.place}
              </span>
              <p className="cards__item__text">
                {evento.text}
              </p>
              <button
                className="btn qr-code-button btn--secondary"
                onClick={seeQrCode}>
                Visualizza QR code
              </button>
              {isPopupVisible && (
                <div className="popup qr-code">
                  <div className="popup-content">
                    <h3 className="h3-pop-up"><strong>{evento.title}</strong></h3>
                    <img
                    className="qr-code-img"
                    src={qrCodeImage}
                    alt="qr-code">
                    </img>
                    <button className="close-pop-up" onClick={() => setPopupVisible(false)}>
                      <i class="fa-solid fa-x"></i>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default CardAdded