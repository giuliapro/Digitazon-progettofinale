import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import '../Login.css'

function Login({ user, setUser, setEventiAggiunti, setEventiFavoriti }) {
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        if (user.email) {
            navigate('/profile')
        }
    }, [user])

    async function handleLogin() {
        try {
            const response = await fetch("http://localhost:3001/login", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            console.log(response.status)

            // Controlla la risposta del server
            if (response.status === 200) {
                let res = await response.json()
                localStorage.setItem('jwt', res.token);
                console.log(res.token)
                console.log('login response')
                console.log(res.user)
                setUser(res.user)
                setEventiFavoriti(res.user.eventi_preferiti)
                setEventiAggiunti(res.user.eventi_in_programma)
                // Se il login è riuscito, reindirizza l'utente alla pagina /profile
                navigate('/profile');
            } else {
                // Altrimenti, gestisci eventuali errori o visualizza un messaggio di errore
                
                console.error('Errore durante il login');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='wrapper-login'>
            <div className='wrapper-form'>
                <h2 className='h2-form'>Login</h2>
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
                    <button className="btn btn--primary" type="button" onClick={handleLogin}>
                        Login
                    </button>
                    <span className='link-alternative'>
                        <span>Oppure</span>
                        <Link className="link-to" to={'/register'}>Registrati</Link>
                    </span>

                </form>
            </div>


        </div>
    );
}

export default Login;