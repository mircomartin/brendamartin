import React from 'react';

export const Testimonios = () => {
	return (
		<div className="container testimonios">
			<div className="row testimonios__wrapperTitles" data-aos="zoom-in">
				<div className="col-12">
					<h2 className="testimonios__title">Testimonios</h2>
					<h3 className="testimonios__subTitle">
						Recomendaciones de padres y madres
					</h3>
				</div>
			</div>
			<div className="row justify-content-center testimonios__wrapperOpiniones">
				<div className="col-12 col-md-4 mb-3 mb-md-0" data-aos="flip-left">
                    <img src="/assets/img/quotes.png" className="testimonios__img" alt="quote"/>
					<h6 className="testimonios__persona">Florencia D'Espósito</h6>
					<p className="testimonios__parrafo">"Excelente pediatra, totalmente recomendable"</p>
				</div>
                <div className="col-12 col-md-4 mb-3 mb-md-0" data-aos="flip-up">
                    <img src="/assets/img/quotes.png" className="testimonios__img" alt="quote"/>
					<h6 className="testimonios__persona">Gloria Giorgio</h6>
					<p className="testimonios__parrafo">"La mejor pediatra que he conocido en años no sólo como pediatra sino también como persona, genia"</p>
				</div>
                <div className="col-12 col-md-4 mb-3 mb-md-0" data-aos="flip-right">
                    <img src="/assets/img/quotes.png" className="testimonios__img" alt="quote"/>
					<h6 className="testimonios__persona">Matilde Diaz</h6>
					<p className="testimonios__parrafo">"Excelente, es la mejor!"</p>
				</div>
			</div>
		</div>
	);
};
