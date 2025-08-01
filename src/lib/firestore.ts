
"use server";

import { db } from './firebase';
import { collection, getDocs, query, Timestamp, orderBy, doc, getDoc } from 'firebase/firestore';

// Define the simplified Article type
export interface Article {
    id: string;
    title: string;
    summary?: string;
    content: string;
    image?: string;
    createdAt: Timestamp;
}

// Function to get all articles from Firestore, ordered by creation date
export async function getArticles(): Promise<Article[]> {
    try {
        if (!db) {
            console.error("Firestore is not initialized. Returning empty array.");
            return [];
        }
        const articlesRef = collection(db, 'artikel');
        const q = query(articlesRef, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const articles: Article[] = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const titleForImage = encodeURIComponent(data.title.split(' ').slice(0, 5).join(' '));
            articles.push({ 
                id: doc.id, 
                title: data.title,
                content: data.content,
                createdAt: data.createdAt,
                summary: data.summary || data.content.slice(0, 150),
                image: data.image || `https://source.unsplash.com/800x400/?${titleForImage}`,
            } as Article);
        });
        return articles;
    } catch (error) {
        console.error("Error fetching articles:", error);
        return [];
    }
}


// Function to get a single article by its document ID
export async function getArticleById(id: string): Promise<Article | null> {
    try {
        if (!db) {
            console.error("Firestore is not initialized. Returning null.");
            return null;
        }
        const docRef = doc(db, 'artikel', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            const titleForImage = encodeURIComponent(data.title.split(' ').slice(0, 5).join(' '));
            return { 
                id: docSnap.id, 
                title: data.title,
                content: data.content,
                createdAt: data.createdAt,
                summary: data.summary || data.content.slice(0, 150),
                image: data.image || `https://source.unsplash.com/800x400/?${titleForImage}`,
            } as Article;
        } else {
            console.warn(`Article with ID "${id}" not found.`);
            return null;
        }
    } catch (error) {
        console.error(`Error fetching article by ID "${id}":`, error);
        return null;
    }
}
