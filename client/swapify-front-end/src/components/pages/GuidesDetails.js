import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import '../ArticlesDetails.css'
import { Button } from "../Button"

function GuidesDetails({ guide }) {
    const { id_guide } = useParams()

    const navigate = useNavigate();


    const selectedGuideIndex = guide.findIndex(guide => guide.path === id_guide);

    if (selectedGuideIndex === -1) {
        return <div>Guida non trovata</div>;
    }

    const selectedGuide = guide[selectedGuideIndex];

    const goToNextGuide = () => {
        const nextGuideIndex = (selectedGuideIndex + 1) % guide.length;
        const nextGuidePath = guide[nextGuideIndex].path;
        navigate(`/blog/guides/${nextGuidePath}`);
    };
    return (
        <>
            <div className="wrapper-article">
                <div className="wrapper-title">
                    <h1 className="article-title">{selectedGuide.title}</h1>
                    <span className="article-source">Fonte: {selectedGuide.source}</span>
                </div>
                <div className="wrapper-banner-article">
                    <img
                        className="banner-article"
                        src={'../' + selectedGuide.src}
                        alt="Article image"
                    ></img>
                </div>
                <div className="wrapper-article-description">
                    <img
                        className="img-article"
                        src={'../' + selectedGuide.img}
                        alt="Article image"
                    >
                    </img>
                    <p className="article-text">{selectedGuide.article}</p>
                </div>
                <div className="wrapper-btn">
                    <Button path={selectedGuide["source"]} className='btns' buttonStyle='btn--primary'>Vai alla guida completa</Button>
                </div>
                <div className="wrapper-btn-next-article">
                    <button className="btn-next-article" onClick={goToNextGuide}>Vai alla guida successiva →</button>
                </div>
            </div>
        </>
    )
}

export default GuidesDetails