import React from "react";
import { Link } from "react-router-dom";
const Nav = (props) => {
    return (
    <>
       <nav id="botonera_nav">
        
        <ul className="holder">
            <li><Link to= "/">Inicio</Link></li>
            <li><Link to= "/Servicios">Servicios</Link></li>
            <li><Link to= "/Equipos">Equipos</Link></li>
            <li><Link to= "/Cotizador">Cotizador</Link></li>
            <li><Link to= "/Nosotros">Nosotros</Link></li>


        </ul>


        </nav>
       
    </>
    );
}   

export default Nav;