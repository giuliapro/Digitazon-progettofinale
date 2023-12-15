const express = require('express')
const app = express()
require('dotenv').config()
const bodyparser = require('body-parser')
app.use(bodyparser.json())
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { v4: uuidv4 } = require('uuid'); // Importa la libreria uuid per generare ID univoci


const cors = require('cors')

const select = require('./src/select-data')
const update = require('./src/update-data')
const insert = require('./src/insert-data')
const del = require('./src/delete-data')


const loggedUsers = []

app.use(cors({ origin: 'http://localhost:3000' }))



// GET Eventi

app.get('/eventi', async (req, res) => {
    const result = await select("Eventi")
    res.json(result)
})


// GET Articoli

app.get('/articoli', async (req, res) => {
    const result = await select("Articoli")
    res.json(result)
})



// GET Utenti

app.get('/users/:user', async (req, res) => {
    const user = req.params.user
    const result = await select("Utenti", { nickname: user })
    res.json(result)
})

app.put('/users/:user', async (req, res) => {
    const user = req.params.user
    const updateData = req.body

    await update("Utenti", { "nickname": user }, updateData)
    res.status(200)
})

app.get('/users/jwt/:jwt', async (req, res) => {
    const jwt = req.params.jwt
    const user_mapping = loggedUsers.find((element) => element.token === jwt)
    if (!user_mapping) {
        return res.status(500)
    }
    const nickname = user_mapping.nickname
    const result = await select("Utenti", { nickname: nickname })
    res.json(result)
})




// POST Login utente

app.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        // Trova l'utente nel database basato sull'email
        const user = await select("Utenti", { email, password });

        if (!user) {
            return res.status(401).json({ message: 'Credenziali non valide' });
        }

        const token = jwt.sign({}, process.env.JWT_SECRET)

        loggedUsers.push({
            nickname: user.nickname,
            token
        })
        console.log(loggedUsers)

        res.status(200).json({ message: 'Login effettuato con successo', token, user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Errore durante il login' });
    }
})



// POST Logout utente

app.post('/logout', async (req, res) => {
    const { username } = req.body
    console.log(username)

    const index = loggedUsers.findIndex(user => user.nickname == username)

    if (index > -1) {
        loggedUsers.splice(index, 1)
        res.status(200).json({ message: 'Logout effettuato con successo.' })
    }
    console.log('ciao')
    console.log(loggedUsers)

})



// POST Registrazione utente

app.post('/register', async (req, res) => {
    const { email, nickname, password } = req.body;

    try {
        // Verifica se l'utente esiste già nel database basato sull'email
        const existingUser = await select("Utenti", { email });

        if (existingUser && existingUser.length) {
            return res.status(409).json({ message: 'L\'utente esiste già' });
        }

        // Genera un ID univoco per il nuovo utente
        const userId = uuidv4();

        // Salva l'utente nel database con ID, eventi_in_programma ed eventi_preferiti inizializzati
        await insert("Utenti", {
            id: userId,
            nickname,
            password,
            eventi_in_programma: [],
            eventi_preferiti: [],
            email
        });

        res.status(201).json({ message: 'Registrazione effettuata con successo' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Errore durante la registrazione' });
    }
});



// DELETE utente

const jwtVerifyMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Token mancante' });
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token non valido' });
    }
};

app.delete('/users/:user', jwtVerifyMiddleware, async (req, res) => {
    const user = req.params.user;

    try {
        // Usa il metodo del per eliminare l'utente dal database
        const deleteResult = await del("Utenti", { "nickname": user });

        if (deleteResult.deletedCount > 0) {
            res.status(200).json({ message: 'Utente eliminato con successo' });
        } else {
            res.status(404).json({ message: 'Utente non trovato' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Errore durante l\'eliminazione dell\'utente' });
    }
});






app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running on port ${process.env.SERVER_PORT}`)
})