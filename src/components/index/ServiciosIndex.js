import React from 'react';

//Router
import { Link } from 'react-router-dom';

export const ServiciosIndex = () => {
	return (
		<div className="container serviciosIndex">
			<div className="row serviciosIndex__wrapperTitle" data-aos="zoom-in">
				<div className="col-12">
					<h2 className="serviciosIndex__title">Servicios</h2>
					<h3 className="serviciosIndex__subTitle">
						Obras Sociales y Particulares
					</h3>
				</div>
			</div>
			<div className="row align-items-center justify-content-between serviciosIndex__servicesZone">
				<div className="col-12 col-md-auto serviciosIndex__consultas" data-aos="flip-left">
					<div>
						<img
							src="/assets/img/articulo.png"
							alt="Consultas"
							className="serviciosIndex__img"
						/>
						<h4 className="serviciosIndex__titleConsultaArticulos">Consultas</h4>
						<p>
							Podés consultar por tu Obra Social o tambien atiendo de forma particular.
						</p>
						<Link to="/" className="serviciosIndex__boton">Leer Más</Link>
					</div>
				</div>
				<div className="col-12 col-md-auto serviciosIndex__blog" data-aos="flip-right">
					<div>
						<img
							src="/assets/img/consulta.png"
							alt="Blog"
							className="serviciosIndex__img"
						/>
						<h4 className="serviciosIndex__titleConsultaArticulos">Aritculos</h4>
						<p>
							Podrás encontrar diversos articulos relacionados, consejos para cuidar a los niños y muchas más.
						</p>
						<Link to="/" className="serviciosIndex__boton">Leer Más</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
