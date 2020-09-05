import React, { useState, useEffect } from 'react';

//Components
import WrapperBlue from '../Components/WrapperBlue';
import { NewsScreen } from '../Components/SubComponents/NewsScreen';
import { loadNews } from '../helpers/loadNews';
import { Spinner } from '../Components/SubComponents/Spinner';

export const Blog = () => {
	const [news, setNews] = useState([]);

	const listarNoticias = async () => {
		const resp = await loadNews();
		setNews(resp);
	};

	useEffect(() => {
		listarNoticias();
	}, []);

	return (
		<>
			<WrapperBlue titulo="Blog" />

			{news.length === 0 ? (
				<Spinner />
			) : (
				<main className="container mt-4">
					<div className="row blog justify-content-around">
						{news.map((noticia) => (
							<NewsScreen key={noticia.id} noticia={noticia} />
						))}
					</div>
				</main>
			)}
		</>
	);
};
