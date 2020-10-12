import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <figure className="col-12 col-md-auto header__wrapperImg d-flex align-items-center justify-content-between">
                        <Link to="/"><img src="/assets/img/logo.png" className="img-fluid header__logo" alt="Brenda Martín"/></Link>
                        <h1 className="header__title d-block d-md-none">Brenda Martín</h1>
                        <span className="d-block d-md-none hamburguesaMobile" id="mobileNav"><i className="fas fa-bars" id="icono"></i></span>
                    </figure>
                </div>
                <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-md-3 d-none d-md-block">
                        <p className="header__contact"><i className="fab fa-whatsapp"></i><span>123-456-7890</span></p>
                    </div>
                    <div className="d-none d-md-block col-md-6">
                        <h1 className="header__title">Brenda Martín</h1>
                    </div>
                    <div className="d-none d-md-block col-md-3 header__redes">
                        <a className="header__linkRedes" href="https://www.facebook.com/Pediatra-Brenda-Martin-101641554697709/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                        <a className="header__linkRedes mr-0" href="https://www.instagram.com/brenda.martin.92167" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <nav className="header__nav" id="navbarWrapper">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6">
                            <div className="header__menu d-flex justify-content-md-between flex-column flex-md-row">
                                <NavLink activeClassName="selected" className="header__menuLinks" exact to="/">Inicio</NavLink>
                                <NavLink activeClassName="selected" className="header__menuLinks" exact to="/sobremi">Sobre Mi</NavLink>
                                <NavLink activeClassName="selected" className="header__menuLinks" exact to="/2">Blog</NavLink>
                                <NavLink activeClassName="selected" className="header__menuLinks" exact to="/contacto">Contacto</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
