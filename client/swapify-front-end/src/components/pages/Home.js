import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards'
import Info from '../Info'
import Articles from '../Articles'
import Contacts from '../Contacts'
import { Button } from '../Button'


function Home({ eventi, articoli }) {
    return (
        <>
            <HeroSection />
            <Cards eventi={eventi}/>
            <div className='wrapper-cta__text'>
                <p><strong>Tutti gli eventi di Swap a portata di un <i>click</i>:</strong><br></br>
                    trova quelli più vicini a te e dai una nuova vita ai tuoi oggetti.</p>
                <Button path='/eventi' className='btns' buttonStyle='btn--primary'>Scopri gli eventi</Button>
            </div>
            <Info />
            <Articles articoli={articoli}/>
            <div className='wrapper-cta__text'>
                <p><strong>Il classico blog, ma totalmente Green:</strong><br></br>
                tantissimi articoli e guide su misura per vivere in maniera più ecosostenibile.</p>
                <Button path='/blog' className='btns' buttonStyle='btn--primary'>Vai al Blog</Button>
            </div>
            <Contacts />
        </>
    )
}

export default Home