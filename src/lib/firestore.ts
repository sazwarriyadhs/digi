
"use server";

import { db } from './firebase';
import { collection, addDoc, getDocs, query, where, Timestamp, orderBy, doc, getDoc } from 'firebase/firestore';

// Define the simplified Article type
export interface Article {
    id: string;
    title: string;
    slug: string;
    summary: string;
    content: string;
    image: string;
    createdAt: Timestamp;
}

// Function to add a new article to Firestore
export async function addArticle(article: Omit<Article, 'id' | 'createdAt' | 'slug'> & { slug: string }) {
    if (!db) {
        console.error("Firestore is not initialized.");
        return { success: false, error: "Firestore not initialized" };
    }
    try {
        const docRef = await addDoc(collection(db, 'articles'), {
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
    const articlesRef = collection(db, 'articles');
    const q = query(articlesRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const articles: Article[] = [];
    querySnapshot.forEach((doc) => {
        articles.push({ id: doc.id, ...doc.data() } as Article);
    });
    return articles;
}

// Function to get a single article by its slug
export async function getArticleBySlug(slug: string): Promise<Article | null> {
    if (!db) {
        console.error("Firestore is not initialized. Returning null.");
        return null;
    }
    const q = query(collection(db, 'articles'), where('slug', '==', slug));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
        return null;
    }
    const docData = querySnapshot.docs[0].data();
    return { id: querySnapshot.docs[0].id, ...docData } as Article;
}

// Function to get a single article by its document ID
export async function getArticleById(id: string): Promise<Article | null> {
    if (!db) {
        console.error("Firestore is not initialized. Returning null.");
        return null;
    }
    const docRef = doc(db, 'articles', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as Article;
    } else {
        return null;
    }
}
