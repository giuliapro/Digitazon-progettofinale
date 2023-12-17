import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import '../EventiDetails.css'
import '../PopUp.css'
import { Link } from 'react-router-dom'
import greenHeartsImage from '../../images/icons/hearts-green.svg'
import { Button } from '../Button'
import CardsSuggested from "../CardsSuggested"
import Contacts from "../Contacts"

function EventiDetails({
    eventiAggiunti,
    eventi,
    eventiFavoriti,
    user,
    setUser
}) {


    const { id_event } = useParams()
    const [partecipaStatus, setPartecipaStatus] = useState(false)
    const [favStatus, setFavStatus] = useState(false)
    const [isPopupVisible, setPopupVisible] = useState(false)
    const [popupMessage, setPopupMessage] = useState('');

    const navigate = useNavigate()


    const selectedEvent = eventi.find(event => event.path === id_event);

    useEffect(() => {
        const savedPartecipaStatus = localStorage.getItem(`partecipaStatus_${id_event}`);
        const savedFavStatus = localStorage.getItem(`favStatus_${id_event}`);
        if (savedPartecipaStatus) {
            setPartecipaStatus(JSON.parse(savedPartecipaStatus));
        }

        if (savedFavStatus) {
            setFavStatus(JSON.parse(savedFavStatus));
        }
    }, [id_event, eventiAggiunti, eventiFavoriti]);




    const aggiungiEventoPreferiti = async () => {
        if (!user.email) {
            navigate('/login')
        }

        let eventiPref = JSON.parse(JSON.stringify(user.eventi_preferiti))


        if (!favStatus) {
            eventiPref.push(selectedEvent)
        } else {
            let index = eventiPref.findIndex(evento => evento.id == selectedEvent.id)
            eventiPref.splice(index, 1)
        }


        const newFavStatus = !favStatus;

        localStorage.setItem(`favStatus_${id_event}`, JSON.stringify(newFavStatus));

        setFavStatus(newFavStatus);

        setUser({ ...user, eventi_preferiti: eventiPref })

        let response2 = await fetch(`http://localhost:3001/users/${user.nickname}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                eventi_preferiti: eventiPref,
            })
        });


    };






    const partecipaAllEvento = async () => {
        if (!user.email) {
            navigate('/login')
        }

        let eventiAgg = JSON.parse(JSON.stringify(user.eventi_in_programma))

        if (!partecipaStatus) {
            eventiAgg.push(selectedEvent)
            setPopupMessage('Evento aggiunto con successo alla tua lista! Hai guadagnato: 1 Token');
        } else {
            let index = eventiAgg.findIndex(evento => evento.id == selectedEvent.id)
            eventiAgg.splice(index, 1)
            setPopupMessage('Evento rimosso dalla tua lista.');
        }

        setPopupVisible(true);

        const newPartecipaStatus = !partecipaStatus;

        localStorage.setItem(`partecipaStatus_${id_event}`, JSON.stringify(newPartecipaStatus));

        setPartecipaStatus(newPartecipaStatus);

        setUser({ ...user, eventi_in_programma: eventiAgg })

        let response2 = await fetch(`http://localhost:3001/users/${user.nickname}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                eventi_in_programma: eventiAgg,
            })
        });



    };


    if (!selectedEvent) {
        return <div>Evento non trovato</div>;
    }


    return (
        <div className="wrapper-event-details">
            <div className="event-details">
                <div className="wrapper-event-action">
                    <div className="event-action">
                        <span className="wrapper-img-event-details">
                            <img
                                className="img-event-details"
                                src={selectedEvent.src}
                                alt="Event image">
                            </img>
                            <button className="button-fav"
                                onClick={aggiungiEventoPreferiti}>
                                <span>
                                    <i className=
                                        {favStatus ? "fa-solid fa-heart fav-icon" : "fa-regular fa-heart fav-icon"}>
                                    </i>
                                </span>
                            </button>
                        </span>
                        <button
                            className={partecipaStatus ? "remove-event" : "add-event"}
                            onClick={partecipaAllEvento}>
                            {partecipaStatus ? "Rimuovi evento in programma" : "Partecipa all'evento"}
                        </button>
                        {isPopupVisible && (
                            <div className="popup">
                                <div className="popup-content">
                                    <h3 className="h3-pop-up"><strong>{popupMessage}</strong></h3>
                                    {partecipaStatus && (
                                        <Link to="/profile">
                                            <button className="btn btn--primary">
                                                Visualizza lista e Token
                                            </button>
                                        </Link>
                                    )}

                                    <button className="close-pop-up" onClick={() => setPopupVisible(false)}>
                                        <i class="fa-solid fa-x"></i>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="wrapper-event-all-info">
                    <h2>Dettagli evento</h2>
                    <div className="wrapper-event-title">
                        <h1>{selectedEvent.title}</h1>
                        <span className="event-tot-likes">
                            <img
                                className="green-hearts"
                                src={greenHeartsImage}
                                alt="likes">
                            </img>
                            <span >
                                {selectedEvent.n_likes}
                            </span>
                        </span>
                    </div>
                    <div className="wrapper-event-info">
                        <span className="event-category">
                            {selectedEvent.label}
                        </span>
                        <span className="event-date">
                            <i className="fa-regular fa-calendar" />
                            {selectedEvent.date}
                        </span>
                        <span className="event-place">
                            <i className="fa-solid fa-location-dot" />
                            {selectedEvent.location}, {selectedEvent.place}
                        </span>
                        <span className="event-time">
                            <i class="fa-regular fa-clock" />
                            {selectedEvent.time}
                        </span>
                    </div>
                    <div className="wrapper-event-description">
                        <h2>Descrizione</h2>
                        <p>{selectedEvent.description}</p>
                    </div>
                    <div className="wrapper-event-location-info">
                        <div className="event-location-info">
                            <span>
                                <h2>Info sul luogo</h2>
                                <p><strong>{selectedEvent.location}</strong></p>
                                <p>{selectedEvent.address}</p>
                            </span>
                            <Button path={selectedEvent["google-maps"]} className='btns' buttonStyle='btn--primary'>Apri in Google Maps</Button>
                        </div>
                        <span>
                            <iframe className="event-map" src={selectedEvent.map} width="406" height="336" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </span>
                    </div>
                </div>
            </div>
            <CardsSuggested eventi={eventi} selectedElement={selectedEvent} />
            <Contacts />
        </div>
    )
}

export default EventiDetails