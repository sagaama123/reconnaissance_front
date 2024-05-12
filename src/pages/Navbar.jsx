import React from 'react'
import { Link } from 'react-router-dom'



export const Navbar =()=>{
    return(
        <div class="Nav sticky-top ">
        <div class="">
            <nav class="navbar navbar-expand-lg  p-5">
                <a  class="navbar-brand">
                    <h1 class="text-blue">Validcheck<span class="text-blue">.</span>ID</h1>
                </a>
                <button type="button" class="navbar-toggler ms-auto me-0" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto text-black">
                        <Link to="/" className=" nav-item nav-link">Accueil</Link>
                        <a href="#car" class="nav-item nav-link ">Caracteristiques</a>
                        <a href="#sol" class="nav-item nav-link ">Solutions</a>
                        <a href="#fon" class="nav-item nav-link ">Fonctionnement</a>
                        <a href="#foo" class="nav-item nav-link ">À propos</a>
                        <Link to="/Login" className="start-now nav-item nav-link">Commencer</Link>
                    </div>
                    
                </div>
            </nav>
        </div>
    </div>

    )
}