import React from 'react'
import { Link } from 'react-router-dom'
import logo_b_H from '../assets/logo_b_H.png'
// import './Navbar.css';
import './style.css'

function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div class="container">
                <a class="navbar-brand" href="index.html">Appetizer</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                    aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="oi oi-menu"></span> Menu
                </button>

                <div class="collapse navbar-collapse" id="ftco-nav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
                        <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
                        <li class="nav-item"><a href="menu.html" class="nav-link">Menu</a></li>
                        <li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li>
                        <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
                        <li class="nav-item cta"><a href="reservation.html" class="nav-link">Book a table</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        // <nav class="navbar navbar-expand-lg">
        //     <div class="container-fluid">
        //         <Link class="navbar-brand" to="/">
        //             <img src={logo_b_H} alt="logo" width="185" height="55" />
        //         </Link>
        //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div class="nav_itms collapse navbar-collapse" id="navbarNavAltMarkup">
        //             <div class="navbar-nav ms-auto">
        //                 <Link class="nav-link nav-item-custom" to="/">Home</Link>
        //                 <Link class="nav-link nav-item-custom" to="About">About</Link>
        //                 <Link class="nav-link nav-item-custom" to="#">Menu</Link>
        //             </div>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default Navbar