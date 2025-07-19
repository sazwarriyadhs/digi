# Application Features

This document details the key features of the PT Digi Media Komunika company profile website.

## 1. Core Features

- **Responsive Design:** Fully adaptive layout for optimal viewing on desktops, tablets, and mobile devices.
- **Multi-Language Support:** Content is available in both Bahasa Indonesia (ID) and English (EN), easily switchable via a header control.
- **Multi-Currency Support:** Service pricing can be displayed in Indonesian Rupiah (IDR) and US Dollars (USD), with real-time conversion.

## 2. Main Pages & Sections

- **Homepage:**
  - Autoplaying carousel hero section with dynamic content.
  - Sections for About, Services, Portfolio, FAQ, and Contact.
- **About Section:**
  - Company overview and mission.
  - High-quality image representing the team/company.
- **Services Section:**
  - Accordion-style list of all services with detailed descriptions.
  - Clear pricing information for each service.
  - Packaged deals for bundled services.
- **Portfolio & Demo Gallery:**
  - Dedicated page showcasing client projects and case studies.
  - Embedded live demos of web applications.
- **Team Page:**
  - Profiles for key team members.
  - Pop-up dialogs with detailed bios.
  - Social media links.
- **Contact Page:**
  - Contact form with validation and email notification (via Nodemailer).
  - Company contact information (phone, email, address).
  - Embedded map image.

## 3. AI & Interactivity

- **AI-Powered FAQ:**
  - Users can ask questions in natural language.
  - Powered by Google Genkit, trained on company-specific information.
  - Provides instant, context-aware answers.
- **General AI Help:**
  - A separate AI assistant page for broader, general questions.
- **Digital vCard Download:**
  - A dedicated page for CTO Azwar Riyadh's contact card.
  - Users enter their email to receive a PDF vCard download link.
  - Includes a visual preview of the vCard.
- **QR Code Integration:**
  - The vCard preview includes a QR code linking directly to the "Request a Proposal" page.

## 4. Client Engagement Tools

- **Appointment Scheduling:** A form for clients to book a consultation session, with date and time pickers.
- **Proposal Request Form:** A detailed form for potential clients to submit project requirements and receive a custom proposal.
- **Brochure Download:** A page allowing users to download a PDF of the company's service brochure.
- **Investor & Partnership Page:** Information for potential investors and partners.

## 5. Technology & Infrastructure

- **Framework:** Next.js 15 with App Router.
- **Styling:** Tailwind CSS with ShadCN UI components.
- **AI Engine:** Google Genkit with the Gemini model family.
- **Email Service:** Nodemailer for transactional emails.
- **Sitemap & SEO:** `next-sitemap` is configured for automatic sitemap generation to improve search engine visibility.