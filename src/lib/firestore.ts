
"use server";

import { db } from './firebase';
import { collection, addDoc, getDocs, query, where, Timestamp, orderBy, doc, getDoc } from 'firebase/firestore';

// Define the simplified Article type
export interface Article {
    id: string;
    title: string;
    summary?: string;
    content: string;
    image?: string;
    createdAt: Timestamp;
}

// Function to add a new article to Firestore
export async function addArticle(article: Omit<Article, 'id' | 'createdAt'>) {
    if (!db) {
        console.error("Firestore is not initialized.");
        return { success: false, error: "Firestore not initialized" };
    }
    try {
        const docRef = await addDoc(collection(db, 'artikel'), {
            ...article,
            createdAt: Timestamp.now()
        });
        return { success: true, id: docRef.id };
    } catch (e) {
        console.error("Error adding document: ", e);
        return { success: false, error: e };
    }
}

// Function to get all articles from Firestore, ordered by creation date
export async function getArticles(): Promise<Article[]> {
    if (!db) {
        console.error("Firestore is not initialized. Returning empty array.");
        return [];
    }
    const articlesRef = collection(db, 'artikel');
    const q = query(articlesRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const articles: Article[] = [];
    querySnapshot.forEach((doc) => {
        articles.push({ id: doc.id, ...doc.data() } as Article);
    });
    return articles;
}


// Function to get a single article by its document ID
export async function getArticleById(id: string): Promise<Article | null> {
    if (!db) {
        console.error("Firestore is not initialized. Returning null.");
        return null;
    }
    const docRef = doc(db, 'artikel', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();
        return { 
            id: docSnap.id, 
            title: data.title,
            content: data.content,
            createdAt: data.createdAt,
            summary: data.summary || data.content.slice(0, 150),
            image: data.image || `https://source.unsplash.com/800x400/?${encodeURIComponent(data.title)}`,
        } as Article;
    } else {
        return null;
    }
}
