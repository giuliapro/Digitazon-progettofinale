import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import '../ArticlesDetails.css'
import { Button } from "../Button"

function ArticlesDetails({ articoli }) {
    const { id_article } = useParams()
    const navigate = useNavigate();


    const selectedArticleIndex = articoli.findIndex(article => article.path === id_article);

    if (selectedArticleIndex === -1) {
        return <div>Articolo non trovato</div>;
    }

    const selectedArticle = articoli[selectedArticleIndex];

    const goToNextArticle = () => {
        const nextArticleIndex = (selectedArticleIndex + 1) % articoli.length;
        const nextArticlePath = articoli[nextArticleIndex].path;
        navigate(`/blog/articles/${nextArticlePath}`);
    };

    return (
        <>
            <div className="wrapper-article">
                <div className="wrapper-title">
                    <h1 className="article-title">{selectedArticle.title}</h1>
                    <span className="article-source">Fonte: {selectedArticle.source}</span>
                </div>
                <div className="wrapper-banner-article">
                    <img
                        className="banner-article"
                        src={'../' + selectedArticle.src}
                        alt="Article image"
                    ></img>
                </div>
                <div className="wrapper-article-description">
                    <img
                        className="img-article"
                        src={'../' + selectedArticle.img}
                        alt="Article image"
                    >
                    </img>
                    <p className="article-text">{selectedArticle.article}</p>
                </div>
                <div className="wrapper-btn">
                    <Button path={selectedArticle["source"]} className='btns' buttonStyle='btn--primary'>Vai all'articolo completo</Button>
                </div>
                <div className="wrapper-btn-next-article">
                    <button className="btn-next-article" onClick={goToNextArticle}>Vai all'articolo successivo →</button>
                </div>
            </div>
        </>
    )
}

export default ArticlesDetails