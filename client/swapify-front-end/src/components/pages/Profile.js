import React, { useState, useEffect } from "react"
import '../Profile.css'
import { useNavigate } from "react-router-dom"
import CardAdded from "../CardAdded"
import CardFavorite from "../CardFavorite"
import tokenImage from '../../images/icons/token.png'

function Profile({ user, setUser }) {
    const [isDeletePopupVisible, setDeletePopupVisibility] = useState(false);

    const navigate = useNavigate()

    useEffect(() => {
        if (!user.email) {
            navigate('/login')
        }
        console.log(user)
    }, [user])


    async function logout() {
        let response = await fetch('http://localhost:3001/logout', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: user.nickname
            })
        })
        setUser({})
        localStorage.removeItem('jwt')
        navigate('/')
    }

    async function handleDeleteAccount() {
        setDeletePopupVisibility(true);
    }


    async function confirmDeleteAccount() {
        try {
            const response = await fetch(`http://localhost:3001/users/${user.nickname}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('jwt')
                }
            })
            if (response.status === 200) {
                // Eliminazione riuscita, esegui azioni necessarie (es. logout)
                localStorage.removeItem('jwt');
                setUser({})
                // Reindirizza l'utente alla home
                navigate('/');
            } else {
                // Altrimenti, gestisci eventuali errori o visualizza un messaggio di errore
                console.error('Errore durante l\'eliminazione dell\'account');
            }
            setDeletePopupVisibility(false); // Chiudi il pop-up dopo l'eliminazione
        }
        catch (error) {
            console.log(error);
        }
    }






    return (
        <div className="wrapper-profile">
            <div className="profile-aside">
                <div className="profile-personal-info">
                    <h1>Profilo</h1>
                    <span className="wrapper-info-profile">
                        <h3 className="nickname">
                            Ciao, <span className="green">{user.nickname}</span>!
                        </h3>
                        <p className="biography">
                            Esplora in questa sezione tutti gli <strong>Eventi in programma</strong> e gli <strong>Eventi aggiunti ai Preferiti.</strong>
                        </p>
                        <br></br>
                        <p className="user-eventi">
                            Attualmente, hai <strong className="green">{user.eventi_in_programma?.length} Eventi in programma</strong> e <strong className="green">{user.eventi_preferiti?.length} Eventi Preferiti</strong>.
                        </p>
                    </span>
                </div>
                <div className="wrapper-half-info">
                    <div className="wrapper-token">
                        <h3 className="token-title">Token</h3>
                        <p className="user-eventi">
                            Controlla il <strong>numero dei tuoi Token</strong> e scambiali agli eventi al posto degli oggetti!
                        </p>
                        <br></br>
                        <div className="wrapper-tot-token">
                            {user.eventi_in_programma &&
                                <div className="wrapper-token-img">
                                    <img src={tokenImage}
                                        alt="Token Image">
                                    </img>
                                    <p>{user.eventi_in_programma?.length}</p>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="wrapper-settings">
                        <h3 className="settings-title">Impostazioni</h3>
                        <p onClick={logout}>
                            Logout
                        </p>
                        <p onClick={handleDeleteAccount}>
                            Elimina account
                        </p>
                        <p>Privacy policy</p>
                    </div>

                    {/* Pop-up di conferma eliminazione */}
                    {isDeletePopupVisible && (
                        <div className="delete-popup">
                            <p>Sei sicuro di voler eliminare il tuo account?</p>
                            <div className="button-wrap">
                                <button className="btn btn--canc" onClick={() => setDeletePopupVisibility(false)}>Annulla</button>
                                <button className="btn btn--primary"onClick={confirmDeleteAccount}>Conferma</button>
                            </div>

                        </div>
                    )}
                </div>

            </div>
            <div className="wrapper-events-profile">
                <div className="wrapper-programmed-events">
                    <CardAdded eventiAggiunti={user.eventi_in_programma} />
                </div>
                <div className="wrapper-fav-events">
                    <CardFavorite eventiFavoriti={user.eventi_preferiti} />
                </div>
            </div>
        </div>
    )
}

export default Profile