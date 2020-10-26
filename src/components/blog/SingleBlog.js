import React, { useEffect, useState } from 'react';

//Router
import { useParams } from 'react-router-dom';

//Axios
import axios from 'axios';

//Markdown
import ReactMarkdown from 'react-markdown';

//Components
import { TituloSeccion } from '../layout/TituloSeccion';
import { Spinner } from '../layout/Spinner';

export const SingleBlog = () => {
	const titleSeccion = {
		title: 'Blog',
		subTitle: 'Articulos y Consejos',
	};

	const [post, setPost] = useState({});
	const [loading, setLoading] = useState();

    const {titulo} = useParams();
    
	const consultaDB = async () => {
		setLoading(true);

		try {
			const { data } = await axios.get(`https://brendamartindb.herokuapp.com/post/${titulo}`);

            setPost(data);
            setLoading(false);
            
		} catch (error) {

			console.log(error);
            setLoading(false);
            
		}
	};

	useEffect(() => {
        consultaDB();
        // eslint-disable-next-line
	}, []);

	return (
		<main className="main">
			<div className="container blog__wrapperSingle">
				<TituloSeccion titulos={titleSeccion} />

				<div className="row justify-content-center">
					{loading ? (
						<Spinner />
					) : (
						<div className="col-12 col-md-10">
							<figure className="blog__singleFigure">
								<img
									src={post.img?.url}
									alt={post.titulo}
									className="img-fluid"
								/>
							</figure>
							<div className="blog__singleBody">
								<h1 className="blog__singleTitle">{post.titulo}</h1>
								<ReactMarkdown
									className="blog__singleParrafo"
									source={post.body}
									escapeHtml={false}
								/>
							</div>
						</div>
					)}
				</div>
			</div>
		</main>
	);
};
