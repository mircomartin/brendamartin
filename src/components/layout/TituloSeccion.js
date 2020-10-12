import React from 'react';

export const TituloSeccion = ({titulos}) => {

	return (
		<div className="row tituloSeccion">
			<div className="col-12">
				<h1 className="tituloSeccion__title">{titulos.title}</h1>
				<h3 className="tituloSeccion__subTitle">{titulos.subTitle}</h3>
			</div>
		</div>
	);
};
