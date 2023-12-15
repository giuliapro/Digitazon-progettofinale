import React from "react";
import { Button } from "./Button";
import { Link } from 'react-router-dom';

function GuideItem(props) {
    return (
        <>
            <li className="articles__item">
                <Link className="guides__item__link" to={`/blog/guides/${props.path}`}>
                    <div className="guides__item__info">
                        <h2 className="articles__item__title">
                            {props.title}
                        </h2>
                        <p className="articles__item__text">
                            {props.text}
                        </p>
                        <Button path={`/blog/guides/${props.path}`} className='btns' buttonStyle='btn--primary'>Leggi di più</Button>
                    </div>
                    <figure className="articles__item__pic-wrap">
                        <img
                            src={props.src}
                            alt="Article Image"
                            className="articles__item__pic"
                        >
                        </img>
                    </figure>
                </Link>
            </li>
        </>
    )
}

export default GuideItem