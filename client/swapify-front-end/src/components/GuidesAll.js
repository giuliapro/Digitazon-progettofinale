import React from "react";
import GuideItem from "./GuideItem";
import './Home.css'

function GuidesAll({ guide }) {
    return (
        <div className="cards blog-wrap">
            <h2 className="h2-articles">Guide ad una vita <i>green</i></h2>
            <div className="articles__container">
                <div className="articles__wrapper">
                    <ul className='articles__items'>
                        {guide.map((guide, index) => (
                            <GuideItem
                            key={index}
                            src={guide.src}
                            title={guide.title}
                            text={guide.text}
                            path={guide.path}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default GuidesAll