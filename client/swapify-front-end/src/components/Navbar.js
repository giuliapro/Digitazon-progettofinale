import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)


    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                        <img src={logo} alt='logo' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/search' className='nav-links' onClick={closeMobileMenu}>
                                <i className="fa-solid fa-magnifying-glass" />
                            </Link>
                        </li>
                        {/* <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li> */}
                        <li className='nav-item'>
                            <Link to='/eventi' className='nav-links' onClick={closeMobileMenu}>
                                Eventi
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                                Blog
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                                <i className="fa-solid fa-user" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar