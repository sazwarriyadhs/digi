"use server";

import { answerFAQ } from "@/ai/flows/answer-faq";
import { companyInfo } from "@/lib/data";
import { sendEmail } from "@/lib/email";
import * as z from "zod";

export async function handleFaq(question: string, language: 'id' | 'en') {
  if (!question) {
    return { answer: "Please ask a question.", error: null };
  }

  try {
    const langCompanyInfo = companyInfo[language];
    const servicesText = langCompanyInfo.services.map(s => `${s.title}: ${s.description}`).join('\n');
    const fullCompanyInfo = `About Us: ${langCompanyInfo.about}\n\nOur Services:\n${servicesText}`;
    
    const result = await answerFAQ({
      question: question,
      companyInformation: fullCompanyInfo,
    });

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
