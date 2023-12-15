import React from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

function CardItem(props) {
    return (
        <>
            <motion.div
            variants={{
                hidden: { opacity: 0, y: 0 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              exit="visible"
            
            className="cards__item">
                <Link className="cards__item__link" to={`/eventi/${props.path}`}>
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img
                            src={props.src}
                            alt="Event image"
                            className="cards__item__img">
                        </img>
                        <span className="cards__item__likes">
                            <img
                                src={props.likes}>
                            </img>
                            <span >
                                {props.n_likes}
                            </span>
                        </span>

                    </figure>
                    <div className="cards__item__info">
                        <h2 className="cards__item__title">
                            {props.title}
                        </h2>
                        <span className="cards__item__date">
                            <i className="fa-regular fa-calendar card-icon" />
                            {props.date}
                        </span>
                        <span className="cards__item__place">
                            <i className="fa-solid fa-location-dot card-icon" />
                            {props.place}
                        </span>
                        <p className="cards__item__text">
                            {props.text}
                        </p>
                    </div>
                </Link>
            </motion.div>
        </>
    )
}

export default CardItem