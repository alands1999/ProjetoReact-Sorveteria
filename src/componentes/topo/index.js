import React from "react"
import {Link} from "react-router-dom";
import './style.css';

export default function Topo () {
    return (
    <header className="topo">

        <div className="container-topo limitar-secao">
        <img src={`${process.env.PUBLIC_URL}/Assets/logo.png`} alt="Logo" className="logo-topo" />

            <nav className="container-logos">
                <Link to="/" className="links">Home</Link>
                <Link to="/sabores" className="links">Sabores</Link>
                <Link to="/sobre" className="links">Sobre</Link>
            </nav>
           
        </div>

    </header>
    )
}
