import React from 'react'
import { Link } from 'react-router-dom'
import logo_b from '../assets/logo_b.png'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">
                    <img src={logo_b} alt="logo" width="100" height="85" />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-link" to="About">About</Link>
                        <Link class="nav-link" to="#">Pricing</Link>
                        <Link class="nav-link" >Disabled</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar