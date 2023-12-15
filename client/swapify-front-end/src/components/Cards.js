import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";
import './Home.css'

function Cards({ eventi }) {
    const [filteredEvents, setFilteredEvents] = useState([])

    useEffect(() => {
        const evidenceEvents = eventi.filter((evento) => evento.id <= 4)
        setFilteredEvents(evidenceEvents)
    }, [eventi])


    return (
        <div className="cards">
            <h1>Eventi più amati</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {filteredEvents.map((evento, index) => (
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

export default Cards