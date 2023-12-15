import React from 'react';
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'

function HeroSection() {
    return (
        <>
            <div className='hero-container'>
                <h1 className='hero-text'>
                    Reduce,<br></br>
                    Reuse,<br></br>
                    Recycle.
                </h1>
                <p className='light-text'>Una modalità di scambio <strong>accessibile</strong> a tutti: qualunque categoria, qualunque classe sociale, senza escluderne alcuna.<br></br>
                    <i><strong>Lo Swap è il futuro.</strong></i></p>
                <div className='hero-btns'>
                    <Button className='btns' path="/about" buttonStyle='btn--primary'>Scopri di più</Button>
                </div>
                
            </div>


        </>
    )
}

export default HeroSection