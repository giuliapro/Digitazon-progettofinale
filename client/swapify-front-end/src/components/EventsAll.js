import React from "react";
import CardItem from "./CardItem";
import './Home.css'
import { motion, AnimatePresence } from "framer-motion"

function EventsAll({ currentFilter, eventi }) {
    const filteredEvents = currentFilter === "Tutte le categorie"
        ? eventi
        : eventi.filter(evento => evento.label === currentFilter)

    return (
        <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">
                    <motion.div
                        
                        transition={{ staggerChildren: 0.7 }}
                        className="cards__items">
                        <AnimatePresence>
                            {filteredEvents.map((evento) => (
                                <CardItem
                                    key={evento.id}
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
                        </AnimatePresence>

                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default EventsAll