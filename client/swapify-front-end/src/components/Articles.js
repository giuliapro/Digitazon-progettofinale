import React from 'react'
import ArticleItem from './ArticleItem'
import './Home.css'

function Articles({ articoli }) {
    return (
        <div className="cards">
            <h2 className="info-title2">
                Green Blog
            </h2>
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

export default Articles