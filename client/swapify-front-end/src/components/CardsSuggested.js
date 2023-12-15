import React from "react";
import CardItem from "./CardItem";
import './Home.css'
import './EventiDetails.css'

function CardsSuggested({ eventi, selectedElement}) {
    const suggestedEvents = eventi.filter(
        (event) => event.label === selectedElement.label && event.id !== selectedElement.id
    )
    return (
        <div className="cards">
            <h2>Eventi correlati</h2>
            <div className="cards__container">
                <div className="cards__wrapper suggested">
                    <ul className="cards__items">
                        {suggestedEvents.map((evento, index) => (
                            <CardItem
                                key={index}
                                src={evento.src}
                                title={evento.title}
                                date={evento.date}
                                place={evento.place}
                                text={evento.text}
                                label={evento.label}
                                likes={evento.likes}
                                n_likes={evento.n_likes}
                                path={evento.path}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardsSuggested