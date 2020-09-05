import React from 'react';

//Moment Js
import moment from 'moment';
import 'moment/locale/es';

//History para redireccionar
import { useHistory } from 'react-router-dom';

export const NewsScreen = ({ noticia }) => {
	const history = useHistory();
	const { id, img, title, subtitle, date } = noticia;

	moment.locale('es');
	const newsDate = moment(date);

	const handleSingleNews = (id) => {
		history.push(`/blog/entrada/${id}`);
	};

	return (
		<>
			<div className="col-12 col-md-5 mb-5">
				<img src={img} className="img-fluid blog__img" alt={title} />
				<h2 onClick={() => handleSingleNews(id)} className="blog__title my-3">
					{title}
				</h2>
				<p className="blog__parrafo">{subtitle}</p>
				<p className="blog__fecha mt-3">
					<span>Publicado:</span> {newsDate.format('L')}
				</p>
			</div>
		</>
	);
};
