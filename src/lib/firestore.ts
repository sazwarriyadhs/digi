
import { collection, getDocs, doc, getDoc, Timestamp, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

export interface Article {
    id: string;
    title: string;
    content: string;
    summary: string;
    author: string;
    category: string;
    image?: string;
    createdAt: any;
}

export interface NewArticle {
    title: string;
    content: string;
    summary: string;
    author: string;
    category: string;
    image?: string;
}

const articlesCollection = collection(db, 'articles');

export async function getArticles(): Promise<Article[]> {
    try {
        const snapshot = await getDocs(articlesCollection);
        const articles = snapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                title: data.title || '',
                content: data.content || '',
                summary: data.summary || '',
                author: data.author || 'Admin',
                category: data.category || 'Uncategorized',
                image: data.image || '',
                createdAt: data.createdAt ? (data.createdAt.toDate ? data.createdAt.toDate().toISOString() : new Date(data.createdAt).toISOString()) : new Date().toISOString()
            };
        });
        return articles.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } catch (error) {
        console.error("Error fetching articles: ", error);
        throw new Error("Could not fetch articles from Firestore.");
    }
}

export async function getArticleById(id: string): Promise<Article | null> {
    try {
        const docRef = doc(db, 'articles', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            return {
                id: docSnap.id,
                title: data.title || '',
                content: data.content || '',
                summary: data.summary || '',
                author: data.author || 'Admin',
                category: data.category || 'Uncategorized',
                image: data.image || '',
                createdAt: data.createdAt || Timestamp.now()
            };
        } else {
            console.log("No such document!");
            return null;
        }
    } catch (error) {
        console.error("Error fetching article by ID: ", error);
        throw new Error("Could not fetch article from Firestore.");
    }
}

export async function addArticle(article: NewArticle): Promise<string> {
    try {
        const docRef = await addDoc(articlesCollection, {
            ...article,
            createdAt: serverTimestamp()
        });
        return docRef.id;
    } catch (error) {
        console.error("Error adding article: ", error);
        throw new Error("Could not add article to Firestore.");
    }
}
