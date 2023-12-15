import React, { useState } from 'react';
import '../../App.css';
import '../Search.css';
import CardItem from '../CardItem';
import Contacts from '../Contacts';

function Search({ eventi }) {
    const [search, setSearch] = useState('');
    const [filteredEvents, setFilteredEvents] = useState([]);

    const filterEvents = (query) => {
        const filtered = eventi.filter(
            (item) =>
                item.title.toLowerCase().includes(query) ||
                item.label.toLowerCase().includes(query) ||
                item.place.toLowerCase().includes(query) ||
                item.description.toLowerCase().includes(query)
        );
        setFilteredEvents(filtered);
    };

    const handleSearchChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearch(query);

        if (query.trim() !== '') {
            filterEvents(query);
        } else {
            setFilteredEvents([]);
        }
    };

    return (
        <>
            <div className="cards blog-wrap">
                <div className="wrapper-title">
                    <h1>Cerca gli eventi</h1>
                    <p>
                        Se non sai da dove iniziare, prova a <strong>cercare un evento</strong>.<br></br>
                        Puoi cercare in base alla <strong>città, categoria, tipologia</strong> o{' '}
                        <strong>parole chiave</strong> che sono di tuo interesse.<br></br>
                        <i>Siamo certə che troverai lo Swap più adatto a te!</i>
                    </p>
                </div>

                <div className="cards__container bar">
                    <input
                        className="searchbar"
                        type="text"
                        placeholder="Cerca evento"
                        value={search}
                        onChange={handleSearchChange}
                    ></input>
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            {search.trim() === '' ? (
                                <span className='empty-search'>
                                    <p>Inizia a cercare per visualizzare gli eventi di tuo interesse.</p>
                                </span>
                            ) : (
                                filteredEvents.map((evento, index) => (
                                    <CardItem
                                        key={index}
                                        src={evento.src}
                                        title={evento.title}
                                        date={evento.date}
                                        place={evento.place}
                                        text={evento.text}
                                        label={evento.label}
                                        likes={evento.likes}
                                        n_likes={evento.n_likes}
                                        path={evento.path}
                                    />
                                ))
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <Contacts />
        </>
    );
}

export default Search;
