import React, { useState } from 'react';

//Router
import { Link, useHistory } from 'react-router-dom';

//Axios
import axios from 'axios';

//Swal
import Swal from 'sweetalert2';

export const Footer = () => {

	const history = useHistory()

	const [formValues, setFormValues] = useState({email:''})

	const handleChange = e => {

		setFormValues({
			...formValues,
			[e.target.name]:e.target.value})
			
	}

	const handleSubmit = e => {
		e.preventDefault();

		if(formValues.email.trim() === '') {
			
			Swal.fire('Alerta!', 'El campo es obligatorio', 'warning');
			return false;

		}else{

			axios.post('https://brendamartindb.herokuapp.com/newsletters', formValues)

			Swal.fire('Exito!', 'Te has registrado de forma exitosa!', 'success');
	
			setFormValues({
				email:'',
			})
			
			history.push('/')

		}

	}

	return (
		<>
			<footer className="footer">
				<div className="container">
					<div className="row footer__wrapperSuperior">
						<div className="col-12 col-md-4 mb-4 mb-md-0">
							<div className="footer__contacto">
								<h3 className="footer__contactoTitle">Contacto</h3>
								<p>Baby Steps Clinic</p>
								<p>500 Francois Street</p>
								<p>San Francisco, CA 94158</p>
							</div>
						</div>
						<div className="col-12 col-md-3 mb-4 mb-md-0">
							<div className="footer__contacto">
								<p>
									<i className="fas fa-phone mr-2"></i> 123-456-7890
								</p>
								<p>
									<i className="far fa-envelope-open mr-2"></i>{' '}
									info@mysite.com
								</p>
								<Link to="/contacto">
									<span>
										<i className="fas fa-pencil-alt mr-2"></i>
									</span>
									Reservá turno
								</Link>
							</div>
						</div>
						<div className="col-12 col-md-5 mb-4 mb-md-0">
							<div className="footer__contacto">
								<p>Suscríbete a mi newsletter</p>
								<form onSubmit={handleSubmit}>
									<input
										type="text"
										className="footer__input"
										placeholder="Tu Email..."
										name="email"
										value={formValues.email}
										onChange={handleChange}
									/>
									<button className="footer__boton">Aceptar</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-auto">
						<p className="firma">
							© 2023 by{' '}
							<a href="https://mmdiseno.netlify.app/">MM Developer</a>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
