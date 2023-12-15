import React from "react";
import './Home.css'

function CardFavorite({ eventiFavoriti }) {

    return (
        <div>
            <h2>Eventi aggiunti ai <span>
                <i className="fa-solid fa-heart"></i>
            </span>
                Preferiti</h2>
                <p>Visualizza qui gli eventi che hai inserito nei Preferiti.</p>
            <div className="wrapper-added-events">
                {eventiFavoriti && eventiFavoriti.map((evento, index) => (
                    <div className="cards__item" key={index}>
                        <figure className="cards__item__pic-wrap" data-category={evento.label}>
                            <img
                                src={evento.src}
                                alt="Event image"
                                className="cards__item__img">
                            </img>
                            <span className="cards__item__likes">
                                <img
                                    src={evento.likes}>
                                </img>
                                <p>
                                    {evento.n_likes}
                                </p>
                            </span>

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
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default CardFavorite