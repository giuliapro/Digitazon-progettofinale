import React from "react";
import './Home.css'
import { Button } from './Button'

function Info() {
    return (
        <div className="cards">
            <h2 className="info-title">
                Cos'è uno <i>Swap Party</i>?
            </h2>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <div className="info-img-wrap">
                        <p>Lo <strong><i>Swap party</i></strong> è un tipo di evento in cui le persone si ritrovano per scambiarsi oggetti, tipicamente capi d'abbigliamento e accessori di vario tipo, ma anche articoli per la casa, libri e piccoli pezzi di arredamento. E per ognuno di essi, riceveranno <strong><span className="orange">1 Token</span></strong> da poter scambiare con un altro oggetto di pari valore.</p>
                        <Button path='/about' className='btns' buttonStyle='btn--primary'>Scopri di più su di noi</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info