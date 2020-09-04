import { db } from "../Firebase/firebase-config"

export const loadNews = async() => {
    const noticiasSnap = await db.collection("news").get();

    const news = [];

    noticiasSnap.forEach(snapHijo => {
        news.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })

    
    return news;
}