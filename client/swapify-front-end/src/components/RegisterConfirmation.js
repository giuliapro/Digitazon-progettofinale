import React from 'react';
import './Login.css'
import { Button } from './Button';

function RegisterConfirmation() {
    return (
        <div className='wrapper-register'>
            <div className='wrapper-landing-page'>
                <i class="fa-regular fa-face-smile smiley-icon"></i>
                <h2 className='light'>Registrazione avvenuta con successo!</h2>
                <p className='light'>Utilizza ora i dati inseriti in fase di registrazione per effettuare il Login.</p>
                <p className='light'><i><strong>Have a nice Swap!</strong></i></p>
                <Button path="/login" className="btn btn--primary" >Vai al Login</Button>
            </div>
        </div>
    )
}

export default RegisterConfirmation