import React from 'react'

//Router
import { Link } from 'react-router-dom'

export const Parallax = () => {
    return (
        <div className="parallax">
            <video autoPlay loop muted className="parallax__video">
                <source src="/assets/img/video2.webm"/>
            </video>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-auto parallax__body">
                        <h2 className="parallax__title">Brenda Martin</h2>
                        <h3 className="parallax__subTitle">Pediatra Infantil</h3>
                        <p className="parallax__parrafo d-none d-md-block">Para turnos y consultas</p>
                        <Link to="/contacto" className="parallax__boton d-none d-md-inline-block">Contacto</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
