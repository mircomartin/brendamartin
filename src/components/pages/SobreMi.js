import React from 'react';

//Components
import { TituloSeccion } from '../layout/TituloSeccion';

export const SobreMi = () => {
	const titles = {
		title: 'Sobre Mí',
		subTitle: 'Conocéme',
	};

	return (
		<main className="main">
			<div className="container sobreMi" data-aos="zoom-in">
				<TituloSeccion titulos={titles} />

				<div className="row justify-content-center align-items-center sobreMi__wrapperInfo">
					<div className="col-5 mb-3 mb-md-0">
						<img
							src="/assets/img/sobremiUno.webp"
							alt="Brenda Martín"
							className="img-fluid"
						/>
					</div>
					<div className="col-12 col-md-5">
						<h2 className="sobreMi__titleInfo">Sobre Mí</h2>
						<h3 className="sobreMi__subtitleInfo">Mi Historia</h3>
						<p className="sobreMi__parrafoInfo">
							I'm a paragraph. Click here to add your own text and edit me.
							It’s easy. Just click “Edit Text” or double click me to add
							your own content and make changes to the font. I’m a great
							place for you to tell a story and let your users know a little
							more about you.
						</p>
						<p className="sobreMi__parrafoInfo">
							This is a great space to write a long text about your company
							and your services. You can use this space to go into a little
							more detail about your company. Talk about your team and what
							services you provide. Tell your visitors the story of how you
							came up with the idea for your business and what makes you
							different from your competitors.
						</p>
					</div>
				</div>
				<div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-5 order-1 order-md-0">
						<h2 className="sobreMi__titleInfo">Mi CV</h2>
						<h3 className="sobreMi__subtitleInfo">Desarrollo Profesional</h3>
						<p className="sobreMi__parrafoInfo">
							I'm a paragraph. Click here to add your own text and edit me.
							It’s easy. Just click “Edit Text” or double click me to add
							your own content and make changes to the font. I’m a great
							place for you to tell a story and let your users know a little
							more about you.
						</p>
						<p className="sobreMi__parrafoInfo">
							This is a great space to write a long text about your company
							and your services. You can use this space to go into a little
							more detail about your company. Talk about your team and what
							services you provide. Tell your visitors the story of how you
							came up with the idea for your business and what makes you
							different from your competitors.
						</p>
					</div>
					<div className="col-5 order-0 order-md-1 mb-3 mb-md-0">
						<img
							src="/assets/img/sobremiDos.webp"
							alt="Brenda Martín"
							className="img-fluid"
						/>
					</div>
				</div>
			</div>
		</main>
	);
};
