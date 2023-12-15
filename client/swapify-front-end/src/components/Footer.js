import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";
import facebook from '../images/icons/facebook.svg'
import youtube from '../images/icons/youtube.svg'
import instagram from '../images/icons/instagram.svg'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-social">
                <div className="logo-footer">
                    <h2 className="h2-footer">Swapify</h2>
                </div>
                <div className="social-icons">
                    <img src={facebook}></img>
                    <img src={youtube}></img>
                    <img src={instagram}></img>
                </div>
            </section>
            <section className="info-footer">
                <div className="menu-footer-wrapper">
                    <ul className="menu-footer">
                        <li className='nav-item-footer'>
                            <Link to='/' className='nav-links light'>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item-footer'>
                            <Link to='/eventi' className='nav-links light'>
                                Eventi
                            </Link>
                        </li>
                        <li className='nav-item-footer'>
                            <Link to='/about' className='nav-links light'>
                                About
                            </Link>
                        </li>
                        <li className='nav-item-footer'>
                            <Link to='/blog' className='nav-links light'>
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="privacy-contacts-footer">
                    <div className="privacy-wrapper">
                        <ul className="privacy-footer">
                            <li className="privacy-item-footer light">
                                Privacy
                            </li>
                            <li className="privacy-item-footer light">
                                Cookie Policy
                            </li>
                        </ul>
                    </div>
                    <div className="contacts-wrapper">
                        <ul className="contacts-footer">
                            <li className="contacts-item-footer light">
                                info@swapify.it<br></br>
                                +39 3241625067<br></br>
                                Viale dell’Innovazione, 1<br></br>
                                20126, Milano, IT
                            </li>
                            <li className="contacts-item-footer light">
                                ©Swapify 2023
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Footer