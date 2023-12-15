import React from "react";
import ArticleItem from './ArticleItem';
import './Home.css'

function ArticlesAll({ articoli }) {
    return (
        <div className="cards blog-wrap">
            <h2 className="h2-articles">Articoli sulla sostenibilità</h2>
            <div className="articles__container">
                <div className="articles__wrapper">
                    <ul className='articles__items'>
                        {articoli.map((article, index) => (
                            <ArticleItem
                            key={index}
                            src={article.src}
                            title={article.title}
                            text={article.text}
                            path={article.path}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ArticlesAll