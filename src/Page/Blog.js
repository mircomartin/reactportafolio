import React, { useState, useEffect } from 'react';

import WrapperBlue from '../Components/WrapperBlue';
import { SingleNoticia } from '../Components/SubComponents/SingleNoticia';
import { loadNews } from '../helpers/loadNews';

export const Blog = () => {
	const [news, setNews] = useState([]);

	const listarProductos = async () => {
		const resp = await loadNews();
		setNews(resp);
	};

	useEffect(() => {
		listarProductos();
	}, []);

	return (
		<>
			<WrapperBlue titulo="Blog" />

			<main className="container">
				<div className="row py-4 blog justify-content-around">
					{news.map((noticia) => (
						<SingleNoticia key={noticia.id} noticia={noticia} />
					))}
				</div>
			</main>
		</>
	);
};
