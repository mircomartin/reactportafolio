import React, { useContext, useEffect } from 'react';

//Components
import WrapperBlue from '../components/WrapperBlue';
import { NewsScreen } from '../components/subcomponents/NewsScreen';
import { Spinner } from '../components/subcomponents/Spinner';

//Context
import { AuthContext } from '../context/AuthContext';

export const Blog = () => {
	const { news, startListNews } = useContext(AuthContext)

	useEffect(() => {
		startListNews();
		// eslint-disable-next-line
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
