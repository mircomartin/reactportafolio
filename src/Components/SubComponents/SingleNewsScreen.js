import React, { useState, useEffect } from 'react';

//Moment Js -> Convierto la fecha y la paso a español
import moment from 'moment';
import 'moment/locale/es';

//Obtengo el Id del producto clickado
import { useParams } from 'react-router-dom';

//Firebase
import { db } from '../../firebase/firebase-config';

//Components
import WrapperBlue from '../WrapperBlue';
import { Spinner } from './Spinner';

export const SingleNewsScreen = () => {
	const [notice, setNotice] = useState({});

	const { id } = useParams();

	useEffect(() => {
		newsActive(id);
	}, [id]);

	const { title, body, date, img } = notice;

	moment.locale('es');
	const newsDate = moment(date);

	const newsActive = async (id) => {
		try {
			const newsQuery = await db.collection('news').doc(id);

			const news = await newsQuery.get();
			setNotice(news.data());
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<WrapperBlue titulo="Blog" />

			{Object.keys(notice).length === 0 ? (
				<Spinner />
			) : (
				<main className="container my-4">
					<div className="row justify-content-center single">
						<div className="col-10">
							<figure className="single__wrapperImg">
								<img src={img} alt={title} className="img-fluid" />
							</figure>
							<h1 className="single__title">{title}</h1>
							<p className="single__fecha">
								<span>Publicado:</span> {newsDate.format('L')}
							</p>
							<p className="single__body">{body}</p>
						</div>
					</div>
				</main>
			)}
		</>
	);
};
