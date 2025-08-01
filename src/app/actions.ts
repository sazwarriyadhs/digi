
"use server";

import { answerFAQ } from "@/ai/flows/answer-faq";
import { answerGeneralQuestion } from "@/ai/flows/general-question";
import { generateArticle, ArticleData } from "@/ai/flows/generate-article";
import { previewArticle, PreviewArticleInput } from "@/ai/flows/preview-article";
import { companyInfo } from "@/lib/data";
import { sendEmail } from "@/lib/email";
import { addArticle } from "@/lib/firestore";
import * as z from "zod";

export async function handleFaq(question: string, language: 'id' | 'en', source: 'faq' | 'aiHelp') {
  if (!question) {
    return { answer: "Please ask a question.", error: null };
  }

  try {
    const langCompanyInfo = companyInfo[language];
    const servicesText = langCompanyInfo.services.map(s => `${s.title}: ${s.description}`).join('\n');
    const fullCompanyInfo = `About Us: ${langCompanyInfo.about}\n\nOur Services:\n${servicesText}`;
    
    let result;
    const input = {
      question: question,
      companyInformation: fullCompanyInfo,
    };

    if (source === 'aiHelp') {
      result = await answerGeneralQuestion(input);
    } else {
      result = await answerFAQ(input);
    }

    return { answer: result.answer, error: null };
  } catch (e) {
    console.error(e);
    return {
      answer: "Sorry, I couldn't process your question at the moment. Please try again later.",
      error: "An error occurred.",
    };
  }
}

const contactFormSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    message: z.string().min(10),
});

export async function handleContactAction(formData: { name: string; email: string; message: string; }) {
    const parsed = contactFormSchema.safeParse(formData);

    if (!parsed.success) {
        return { success: false, message: 'Invalid form data. Please check your inputs.' };
    }

    const { name, email, message } = parsed.data;
    const recipientEmail = process.env.SMTP_FROM_EMAIL;

    if (!recipientEmail) {
        console.error('SMTP_FROM_EMAIL is not set in environment variables.');
        return { success: false, message: 'Server configuration error. Unable to send message.' };
    }

    const emailHtml = `
        <h1>New Contact Form Submission</h1>
        <p>You have received a new message from your website contact form.</p>
        <hr>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
    `;

    try {
        await sendEmail({
            to: recipientEmail,
            subject: `New message from ${name} via Contact Form`,
            html: emailHtml
        });
        return { success: true, message: 'Your message has been sent successfully!' };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'There was an error sending your message. Please try again later.' };
    }
}


const emailSchema = z.string().email();

export async function handleContactCardRequest(email: string) {
    const parsed = emailSchema.safeParse(email);

    if (!parsed.success) {
        return { success: false, message: 'Please enter a valid email address.' };
    }

    const downloadUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://digimediakomunika.cloud'}/contact-cards/azwar-riyadh-card.pdf`;

    const emailHtml = `
        <h1>Your Requested Contact Card</h1>
        <p>Thank you for your interest in connecting with Azwar Riyadh Subarkah.</p>
        <p>You can download his digital contact card by clicking the link below:</p>
        <p><a href="${downloadUrl}" download>Download Contact Card</a></p>
        <p>If you have any issues, please copy and paste this URL into your browser:</p>
        <p>${downloadUrl}</p>
        <hr>
        <p>Best regards,<br>PT Digi Media Komunika</p>
    `;

    try {
        await sendEmail({
            to: parsed.data,
            subject: "Your Digital Contact Card for Azwar Riyadh Subarkah",
            html: emailHtml
        });
        return { success: true, message: 'The download link has been sent to your email!' };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'There was an error sending the email. Please try again later.' };
    }
}

export async function handleGenerateArticle(topic: string) {
    if (!topic) {
        return { success: false, message: "Topic is required." };
    }

    try {
        const articleData: ArticleData = await generateArticle({ topic });
        
        const result = await addArticle(articleData);

        if (result.success) {
            return { success: true, message: `Article "${articleData.title}" has been generated and saved!`, articleId: result.id };
        } else {
            const errorMessage = result.error instanceof Error ? result.error.message : String(result.error);
            throw new Error(errorMessage);
        }
    } catch (e) {
        console.error("Error generating or saving article:", e);
        const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
        return { success: false, message: `An error occurred while generating the article: ${errorMessage}` };
    }
}

// Action to generate a preview of an article without saving it
export async function handlePreviewArticle(input: PreviewArticleInput) {
    try {
        const articleData = await previewArticle(input);
        return { success: true, article: articleData };
    } catch (e) {
        console.error("Error generating article preview:", e);
        const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
        return { success: false, message: `An error occurred while generating the preview: ${errorMessage}` };
    }
}

// Action to save a finalized (and potentially edited) article to Firestore
export async function handleSaveArticle(articleData: ArticleData) {
    try {
        const result = await addArticle(articleData);
        if (result.success) {
            return { success: true, message: `Article "${articleData.title}" has been saved successfully!`, articleId: result.id };
        } else {
            const errorMessage = result.error instanceof Error ? result.error.message : String(result.error);
            throw new Error(errorMessage);
        }
    } catch (e) {
        console.error("Error saving article:", e);
        const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
        return { success: false, message: `An error occurred while saving the article: ${errorMessage}` };
    }
}
