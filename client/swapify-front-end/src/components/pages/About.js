import React from 'react'
import '../../App.css'
import '../About.css'
import Contacts from '../Contacts'
import HeroSectionAbout from '../HeroSectionAbout'
import imageAbout1 from '../../images/img1-about.png'
import imageAbout2 from '../../images/img2-about.png'
import imageAbout3 from '../../images/img3-about.png'

function About() {
    return (
        <>
            <HeroSectionAbout />
            <div className='wrapper-info-about'>
                <div className='wrapper-mission'>
                    <h2 className='title-mission'>La mission</h2>
                    <p>Spesso le persone non sanno dell’esistenza di degli Swap party, perciò un punto focale su cui concentrarsi è <strong>fare informazione</strong> preliminare sull’esistenza di questi eventi.<br></br>
                        In secondo luogo, anche chi è a conoscenza della loro esistenza, spesso non riesce a prenderne parte perché sono realtà piccole e difficili da trovare senza passaparola diretto o ricerca specifica.<br></br>
                        <br></br>
                        Il nostro obiettivo con è proprio quello di <strong>fornire una piattaforma che possa mappare questo tipo di eventi</strong>, per rimanere aggiornati su tutte le iniziative e le news inerenti.<br></br>
                        <strong>“Accessibilità”</strong> è la nostra parola d’ordine: gli swap party sono pensati per essere accessibili a tutti, indipendentemente dalla classe sociale a cui appartengono.
                    </p>
                </div>
                <div className='wrapper-img-mission'>
                    <img
                    src={imageAbout1}
                    alt="Image mission"
                    ></img>
                    <img
                    src={imageAbout2}
                    alt="Image mission"
                    ></img>
                    <img
                    src={imageAbout3}
                    alt="Image mission"
                    ></img>
                </div>
            </div>
            <div className='wrapper-card-numbers'>
                    <div className='card-numbers'>
                        <div className='numbers-title'>
                            <h3>Alcuni numeri</h3>
                        </div>
                        <div className='wrapper-numbers'>
                            <div className='single-numbers'>
                                <span className='light-green-text'>più di</span>
                                <h3 className='numbers'>150</h3>
                                <span className='deep-green-text'>Eventi</span>
                            </div>
                            <div className='single-numbers'>
                                <span className='light-green-text'>più di</span>
                                <h3 className='numbers'>400</h3>
                                <span className='deep-green-text'>Utenti</span>
                            </div>
                            <div className='single-numbers'>
                                <span className='light-green-text'>più di</span>
                                <h3 className='numbers'>650</h3>
                                <span className='deep-green-text'>Recensioni</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Contacts />
        </>
    )
}

export default About