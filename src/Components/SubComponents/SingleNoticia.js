import React from 'react';

export const SingleNoticia = ({ noticia }) => {
	const { body, img, title } = noticia;
	return (
		<>
			<div className="col-12 col-md-5 mb-3">
				<img src={img} className="img-fluid" alt ={title} />
				<h2 className="blog__title my-3">{title}</h2>
				<p className="blog__parrafo">{body}</p>
			</div>
		</>
	);
};
