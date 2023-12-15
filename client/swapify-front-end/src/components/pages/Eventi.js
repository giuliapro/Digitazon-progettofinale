import React, { useState } from 'react';
import '../../App.css'
import '../Eventi.css'
import EventsAll from '../EventsAll'
import Filters from '../Filters'
import Contacts from '../Contacts'

function Eventi({ eventi }) {
    const [currentFilter, setCurrentFilter] = useState("Tutte le categorie")

    return (
        <>
            <div className="cards">
                <div className='wrapper-title'>
                    <h1>Eventi in arrivo</h1>
                    <p>Ecco la lista di <strong>tutti gli eventi disponibili</strong>.<br></br>
                        Esplora il <strong>mondo dello Swap</strong> e <strong>partecipa agli eventi</strong> che ti ispirano di più!<br></br>
                    </p>
                </div>
            </div>
            <Filters setCurrentFilter={setCurrentFilter} currentFilter={currentFilter}/>
            <EventsAll currentFilter={currentFilter} eventi={eventi}/>
            <Contacts />
        </>
    )
}

export default Eventi