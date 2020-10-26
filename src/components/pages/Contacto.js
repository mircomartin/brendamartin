import React, { useState } from 'react';

//Swal
import Swal from 'sweetalert2';

//Axios
import axios from 'axios';

//Components
import { TituloSeccion } from '../layout/TituloSeccion';

export const Contacto = ({history}) => {
	const titles = {
		title: 'Contacto',
		subTitle: 'Dudas o mas info',
	};

	const [formValues, setFormValues] = useState({
		nombre: '',
		email: '',
		mensaje: '',
	});

	const { nombre, email, mensaje } = formValues;

	const handleInputChange = (e) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if(nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
			
			Swal.fire('Alerta!', 'Todos los campos son obligatorios', 'warning');
			return false

		}else{

			axios.post('https://brendamartindb.herokuapp.com/mensajes/', formValues)

			Swal.fire('Exito!', 'Tu mensaje fue enviado, en breve te responderé!', 'success');

			setFormValues(({
				nombre: '',
				email: '',
				mensaje: '',
			}))

			history.push('/')

		}
	};

	return (
		<main className="main">
			<div className="container contacto" data-aos="zoom-in">
				<TituloSeccion titulos={titles} />

				<div className="row justify-content-center contacto__info">
					<div className="col-12 col-md-6">
						<p className="contacto__parrafo">
							Si tienes alguna pregunta o quieres más información sobre mis
							servicios, por favor contáctame. Responderé a tu mensaje lo
							más pronto posible.
						</p>
						<form className="contacto__formulario" onSubmit={handleSubmit}>
							<div className="row">
								<div className="col-12 col-md-6">
									<input
										type="text"
										placeholder="Nombre"
										className="contacto__inputs"
										value={nombre}
										name="nombre"
										onChange={handleInputChange}
									/>
								</div>
								<div className="col-12 col-md-6">
									<input
										type="email"
										placeholder="Email"
										className="contacto__inputs"
										value={email}
										name="email"
										onChange={handleInputChange}
									/>
								</div>
								<div className="col-12 contacto__wrapperMensaje">
									<textarea
										placeholder="Mensaje..."
										className="contacto__mensaje"
										value={mensaje}
										name="mensaje"
										onChange={handleInputChange}
									></textarea>
									<button className="contacto__boton" type="submit">
										Enviar
									</button>
								</div>
							</div>
						</form>
					</div>
					<div className="col-12 col-md-6">
						<iframe
							title="Mapa"
							className="contacto__mapa"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.8047091078615!2d-60.89522048520747!3d-32.92975757836257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b64bb9a0ca8da1%3A0x607e273643884487!2sAv.%20de%20la%20Paz%202514%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1586621411837!5m2!1ses!2sar"
						></iframe>
					</div>
				</div>
			</div>
		</main>
	);
};
