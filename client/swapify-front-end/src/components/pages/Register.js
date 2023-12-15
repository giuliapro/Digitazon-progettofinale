import React, { useState } from 'react';
import '../Login.css'
import { Link, useNavigate } from 'react-router-dom'

function Register({ user, setUser }) {
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleRegister() {
        try {
            const response = await fetch('http://localhost:3001/register', {
                method: "POST",
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email,
                    nickname,
                    password
                })
            })
            // Controlla la risposta del server
            if (response.status === 201) {
                // Se la registrazione è riuscita, renderizza l'utente alla pagina profile
                navigate('/profile')
            } else if (response.status === 409) {
                // Utente già registrato
                console.error('L\'utente esiste già');
            } else {
                // Altrimenti, gestisci eventuali errori o visualizza un messaggio di errore
                console.error('Errore durante la registrazione');
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='wrapper-register'>
            <div className='wrapper-form'>
                <h2 className='h2-form'>Registrazione</h2>
                <form className='form'
                    action='POST'>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <label>Nickname:</label>
                    <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
                    <br />
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <button className="btn btn--secondary" type="button" onClick={handleRegister}>
                        Registrati
                    </button>
                    <span className='link-alternative'>
                        <span>Oppure</span>
                        <Link className="link-to" to={'/login'}>Login</Link>
                    </span>

                </form>
            </div>


        </div>
    );
}

export default Register;