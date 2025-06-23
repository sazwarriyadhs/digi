"use server";

import { answerFAQ } from "@/ai/flows/answer-faq";
import { companyInfo } from "@/components/sections/about-section";

export async function handleFaq(question: string) {
  if (!question) {
    return { answer: "Please ask a question.", error: null };
  }

  try {
    const servicesText = companyInfo.services.map(s => `${s.title}: ${s.description}`).join('\n');
    const fullCompanyInfo = `About Us: ${companyInfo.about}\n\nOur Services:\n${servicesText}`;
    
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
