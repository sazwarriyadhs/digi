"use server";

import { db } from './firebase';
import { collection, addDoc, getDocs, query, where, getDoc, doc, Timestamp } from 'firebase/firestore';

// Define the Article type
export interface Article {
    id?: string;
    slug: string;
    imageUrl: string;
    aiHint: string;
    id_title: string;
    id_description: string;
    id_category: string;
    id_author: string;
    id_date: string; 
    id_content: string;
    en_title: string;
    en_description: string;
    en_category: string;
    en_author: string;
    en_date: string;
    en_content: string;
    createdAt?: Timestamp;
}

// Function to add a new article to Firestore
export async function addArticle(article: Omit<Article, 'id'>) {
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

// Function to get all articles from Firestore
export async function getArticles(): Promise<Article[]> {
    const querySnapshot = await getDocs(collection(db, 'articles'));
    const articles: Article[] = [];
    querySnapshot.forEach((doc) => {
        articles.push({ id: doc.id, ...doc.data() } as Article);
    });
    return articles;
}

// Function to get a single article by its slug
export async function getArticleBySlug(slug: string): Promise<Article | null> {
    const q = query(collection(db, 'articles'), where('slug', '==', slug));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
        return null;
    }
    const docData = querySnapshot.docs[0].data();
    return { id: querySnapshot.docs[0].id, ...docData } as Article;
}
