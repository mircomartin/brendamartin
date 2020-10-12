import React from 'react';

//Router
import { Link } from 'react-router-dom';

export const AboutIndex = () => {
	return (
		<div className="container aboutIndex">
			<div className="row justify-content-center">
				<figure className="col-12 col-md-4 mb-4 mb-md-0" data-aos="fade-up">
					<img
						src="/assets/img/indexAbout.webp"
						alt="Brenda Martín"
						className="img-fluid"
					/>
				</figure>
				<div className="col-12 col-md-4 aboutIndex__wrapperRight" data-aos="fade-down">
                    <div>
                        <h2 className="aboutIndex__title">Sobre Mi</h2>
                        <h3 className="aboutIndex__subTitle">Brenda Martín</h3>
                        <p>
                            I'm a paragraph. Click here to add your own text and edit me. It’s
                            easy. Just click “Edit Text” or double click me to add your own
                            content and make changes to the font. I’m a great place for you to
                            tell a story and let your users know a little more about you.
                        </p>
                        <Link className="aboutIndex__boton" to="/sobremi">Leer Más</Link>
                    </div>
				</div>
			</div>
		</div>
	);
};
