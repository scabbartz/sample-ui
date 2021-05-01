import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


function Header() {
    return (
        <section className="headerMain">
            <nav>
                <a href="index.js">The IT Company</a>
                <div className="nav-links">
                    <FontAwesomeIcon icon={faTimes} visibility="hidden" />
                    <ul>
                        <li><a href="./index.js">HOME</a></li>
                        <li><a href="./index.js">Work</a></li>
                        <li><a href="./index.js">Services</a></li>
                        <li><a href="./index.js">About</a></li>
                        <li><a href="./index.js">StartUps</a></li>
                        <li><a href="./index.js">Let's Talk</a></li>
                    </ul>
                </div>
            </nav>
            <div className="headerBackground" style = {{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/office.jpg'})`}}>
                <div className="textBox">
                    <h1>We are a Modern IT Company</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate. </p>
                </div>
            </div>
        </section>
    )
}

export default Header
