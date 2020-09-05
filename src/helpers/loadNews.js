import { db } from '../firebase/firebase-config';

export const loadNews = async () => {
	const noticiasSnap = await db.collection('news').orderBy('date', 'desc').get();

	const news = [];

	noticiasSnap.forEach((snapHijo) => {
		news.push({
			id: snapHijo.id,
			...snapHijo.data(),
		});
	});

	return news;
};
