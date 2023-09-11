import React from "react";
const Nav = (props) => {
    return (
    <>
       <nav id="botonera_nav">
        
        <ul className="holder">
            <li><a className="activo" href="index.html">INICIO</a></li>
            <li><a href="servicios.html">SERVICIOS</a></li>
            <li><a href="flota.html">EQUIPOS</a></li>
            <li><a href="cotizador.html">COTIZADOR</a></li>
            <li><a href="Empresa.html">NOSOTROS</a></li>

        </ul>


        </nav>
       
    </>
    );
}   

export default Nav;