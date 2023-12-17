import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/pages/Home'
import Search from './components/pages/Search';
import Eventi from './components/pages/Eventi';
import EventiDetails from './components/pages/EventiDetails';
import About from './components/pages/About'
import Blog from './components/pages/Blog';
import ArticlesDetails from './components/pages/ArticlesDetails';
import GuidesDetails from './components/pages/GuidesDetails';
import Profile from './components/pages/Profile';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import RegisterConfirmation from './components/RegisterConfirmation';
import Footer from './components/Footer';

function App() {
  const [eventiAggiunti, setEventiAggiunti] = useState([]);
  const [eventiFavoriti, setEventiFavoriti] = useState([])
  const [eventi, setEventi] = useState([])
  const [articoli, setArticoli] = useState([])
  const [guide, setGuide] = useState([])
  const [user, setUser] = useState({})

  let token = localStorage.getItem('jwt')
  console.log(token)

  useEffect(() => {
    async function get() {
      let response = await fetch('http://localhost:3001/eventi')
      let res = await response.json()
      setEventi(res)
      let response1 = await fetch('http://localhost:3001/articoli')
      let res1 = await response1.json()
      setArticoli(res1[0].articoli)
      setGuide(res1[0].guide)
      if (token) {
        let response2 = await fetch(`http://localhost:3001/users/jwt/${token}`)
        let res2 = await response2.json()
         if (res2) {
           setUser(res2)
         }
      }
    }
    get()
  }, [token])


  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home eventi={eventi} articoli={articoli} />} />
          <Route path='/search' element={<Search eventi={eventi} />} />
          <Route path="/eventi" element={<Eventi eventi={eventi} />} />
          <Route path="/eventi/:id_event" element={<EventiDetails
            eventiAggiunti={eventiAggiunti}
            eventi={eventi}
            eventiFavoriti={eventiFavoriti}
            user={user}
            setUser={setUser}
          />} />
          <Route path="/about" Component={About} />
          <Route path="/blog" element={<Blog articoli={articoli} guide={guide} />} />
          <Route path="/blog/articles/:id_article" element={<ArticlesDetails articoli={articoli} />} />
          <Route path="/blog/guides/:id_guide" element={<GuidesDetails guide={guide} />} />
          <Route path='/profile' element={<Profile
            user={user}
            setUser={setUser}
          />} />
          <Route path="/login" element={<Login
            user={user}
            setUser={setUser}
            setEventiAggiunti={setEventiAggiunti}
            setEventiFavoriti={setEventiFavoriti}
          />} />
          <Route path="/register" element={<Register
            user={user}
            setUser={setUser}
          />} />
          <Route path="/register-confirmation" element={<RegisterConfirmation />} />
        </Routes>
        <Footer />
      </Router>

    </>


  );
}

export default App;
