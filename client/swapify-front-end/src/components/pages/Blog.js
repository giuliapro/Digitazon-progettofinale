import React from 'react'
import '../../App.css'
import ArticlesAll from '../ArticlesAll'
import GuidesAll from '../GuidesAll'
import Contacts from '../Contacts'

function Blog({ articoli, guide }) {
    return (
        <>
            <div className='cards blog-wrap'>
            <div className='wrapper-title'>
                <h1>Green Blog</h1>
                <p><i>Tutte le news e le informazioni per vivere in modo green.</i><br></br>
                    Tieniti aggiornatə leggendo gli <strong>Articoli</strong> e seguendo le nostre <strong>Guide</strong> fatte su misura per te, per contribuire anche nel quotidiano ad un mondo più ecosostenibile.</p>
            </div>
            </div>
            <ArticlesAll articoli={articoli}/>
            <GuidesAll guide={guide}/>
            <Contacts />
        </>
    )
}

export default Blog