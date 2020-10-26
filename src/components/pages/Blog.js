import React, { useEffect, useState } from 'react';

//Component
import { BlogCard } from '../blog/BlogCard';
import { Spinner } from '../layout/Spinner';
import { TituloSeccion } from '../layout/TituloSeccion';
import { Paginacion } from '../layout/Paginacion';

//Axios
import axios from 'axios';

export const Blog = () => {
	const title = {
		title: 'Blog',
		subTitle: 'Articulos y Consejos',
	};

	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState();

	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(6);

	const consultaDB = async () => {
		setLoading(true);
		try {
			const { data } = await axios.get(
				'https://brendamartindb.herokuapp.com/posts',
			);
			setPosts(data);

			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		consultaDB();
	}, []);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<main className="main">
			<div className="container blog" data-aos="zoom-in">
				<TituloSeccion titulos={title} />

				<div className="row">
					{loading ? (
						<Spinner />
					) : posts.length === 0 ? (
						<h2>No hay post</h2>
					) : (
						currentPosts.map((post) => (
							<BlogCard key={post._id} post={post} />
						))
					)}
				</div>

				{posts.length >= 7 && (
					<div className="row align-items-center justify-content-center">
						<Paginacion
							postsPerPage={postsPerPage}
							totalPosts={posts.length}
							paginate={paginate}
						/>
					</div>
				)}
			</div>
		</main>
	);
};
