# PT Digi Media Komunika - Company Profile Website

This is a Next.js project for the PT Digi Media Komunika company profile, built with Firebase Studio. It features a modern, responsive design, multi-language support (Bahasa Indonesia & English), multi-currency display (IDR & USD), and an AI-powered FAQ section.

## Features

- **Next.js 15 & React 18:** Utilizes the latest features of Next.js with the App Router.
- **ShadCN UI & Tailwind CSS:** For a modern, responsive, and customizable component library.
- **Genkit (Google AI):** Powers the intelligent FAQ assistant.
- **Multi-language & Multi-currency:** Supports Bahasa Indonesia (ID) and English (EN), with currency conversion between IDR and USD.
- **TypeScript:** For robust, type-safe code.
- **Fully Responsive:** Designed to work seamlessly across all devices.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/en/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

Follow these steps to get the project running on your local machine.

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

### 2. Install Dependencies

Install the necessary project dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

This project uses Genkit to connect to the Google AI platform. You will need a Google AI API key.

1.  Create a new file named `.env.local` in the root of your project.
2.  Copy the contents of `.env.template` into your new `.env.local` file.
3.  Obtain an API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
4.  Replace the placeholder in `.env.local` with your actual key:

    ```
    # .env.local
    GOOGLE_API_KEY=your_google_api_key_here
    ```
    **Note:** The `.env.local` file is included in `.gitignore` and should never be committed to your version control system.

### 4. Run the Development Server

Start the Next.js development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser to see the application running.

## Building for Production

To create a production-ready build of your application, run the following command:

```bash
npm run build
```

This command will generate an optimized version of your site in the `.next` directory.

## Deployment on Your Own Hosting

You can deploy this Next.js application to any hosting provider that supports Node.js (e.g., Vercel, Netlify, AWS, DigitalOcean). Here are the general steps:

### 1. Choose a Hosting Provider

- **Vercel (Recommended):** As the creators of Next.js, Vercel provides the most seamless deployment experience. Simply connect your Git repository, and Vercel will handle the build and deployment process automatically.
- **Other Providers (Netlify, AWS Amplify, etc.):** Most modern hosting platforms have built-in support for Next.js. The setup is typically similar to Vercel.
- **Custom Node.js Server:** You can host the application on a traditional VPS or server, as you are doing.

### 2. Configure Environment Variables on the Server

On your hosting provider's dashboard, you must set the same environment variables that you defined in your `.env.local` file. Look for a section called "Environment Variables" or "Secrets" in your project's settings.

-   **Variable:** `GOOGLE_API_KEY`
-   **Value:** `your_google_api_key_here`

This is a critical step. The application will not be able to connect to the AI services without this key.

### 3. Build and Start the Application

If you are using a custom server (like a VPS), you will need to:

1.  Push your code to the server.
2.  Install dependencies: `npm install`
3.  Build the project: `npm run build`
4.  Start the production server: `npm run start`

It's highly recommended to use a process manager like [PM2](https://pm2.keymetrics.io/) to keep your application running continuously.

```bash
# Install PM2 globally
npm install pm2 -g

# Start the application with PM2
pm2 start npm --name "digimediakomunika-app" -- start
```

### 4. Domain and SSL

Finally, configure your custom domain to point to your hosting provider's server IP or CNAME record, and ensure you have an SSL certificate installed for HTTPS. Most modern providers handle SSL automatically.

For your setup, you would configure your domain `digimediakomunika.cloud` to point to your server's IP address, which is `103.247.11.222`.
