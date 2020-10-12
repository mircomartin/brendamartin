import React from 'react'

//Components
import { TituloSeccion } from '../layout/TituloSeccion'

export const Contacto = () => {

    const titles = {
		title: 'Contacto',
		subTitle: 'Dudas o mas info',
    };
    
    return (
        <main className="main">
            <div className="container contacto" data-aos="zoom-in">
                <TituloSeccion titulos={titles}/>

                <div className="row justify-content-center contacto__info">
                    <div className="col-auto">
                        <p>Si tienes alguna pregunta o quieres más información sobre mis servicios, por favor contáctame. Responderé a tu mensaje lo más pronto posible.</p>
                    </div>
                </div>
                <form className="row justify-content-center contacto__formulario">
                    <div className="col-12 col-md-5">
                        <input type="text" placeholder="Nombre" className="contacto__inputs"/>
                    </div>
                    <div className="col-12 col-md-5">
                        <input type="email" placeholder="Email"className="contacto__inputs"/>
                    </div>
                    <div className="col-12 col-md-10 contacto__wrapperMensaje">
                        <textarea placeholder="Mensaje..."
                        className="contacto__mensaje"></textarea>
                        <button className="contacto__boton" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </main>
    )
}
