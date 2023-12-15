import React from "react";
import { Button } from "./Button";
import { Link } from 'react-router-dom';

function ArticleItem(props) {
    return (
        <>
            <li className="articles__item">
                <Link className="articles__item__link" to={`/blog/articles/${props.path}`}>
                    <figure className="articles__item__pic-wrap">
                        <img
                            src={props.src}
                            alt="Article Image"
                            className="articles__item__pic"
                        >
                        </img>
                    </figure>
                    <div className="articles__item__info">
                        <h2 className="articles__item__title">
                            {props.title}
                        </h2>
                        <p className="articles__item__text">
                            {props.text}
                        </p>
                        <Button path={`/blog/articles/${props.path}`} className='btns' buttonStyle='btn--primary'>Leggi di più</Button>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default ArticleItem