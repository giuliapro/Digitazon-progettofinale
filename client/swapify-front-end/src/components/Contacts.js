import React from "react";
import './Home.css'
import { Button } from './Button'

function Contacts() {
    return (
        <div className="contacts__wrapper">
            <div className="contacts__image">
                <div className="contacts__text">
                    <h2>Vuoi più informazioni?</h2>
                    <p><strong>Se sei interessatə ai nostri eventi e desideri più informazioni a riguardo, non esitare a contattarci.<br></br>
                        Il nostro team è pronto a chiarire ogni tuo dubbio!</strong></p>
                </div>
                <Button onClick={() => window.location = 'mailto:info@swapify.com'} className='btns' buttonStyle='btn--primary'>Contattaci</Button>
            </div>

        </div>
    )
}

export default Contacts