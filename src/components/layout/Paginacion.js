import React from 'react';

export const Paginacion = ({ postsPerPage, totalPosts, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	const link = document.querySelector("#link")

	if(link){
		link.addEventListener('click', () => {
			window.scroll(0,0)
		})
	}

	return (
		<nav className="col-auto">
			<ul className="pagination" id="link">
				{pageNumbers.map((number) => (
					<li key={number} className="pagination__item">
						<button onClick={() => paginate(number)} className="pagination__link">
							{number}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};