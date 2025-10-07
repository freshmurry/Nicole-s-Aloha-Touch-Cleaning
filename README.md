# Aloha Clean NWI

A visually stunning, SEO-optimized landing page for a hyper-local cleaning service in Northwest Indiana, designed to capture leads and build local trust.

[cloudflarebutton]

Aloha Clean NWI is a hyper-local, visually stunning, and SEO-optimized landing page for a cleaning service in Northwest Indiana. The design is based on an illustrative and whimsical style, using a teal and white color palette derived from the client's branding. The primary goal is to capture leads through a prominent hero section form. The application features sections detailing services (Standard Cleaning, Deep Cleaning, Add-Ons), trust-building elements (testimonials, guarantees), a service area map, and a comprehensive footer. It also includes dedicated, content-rich pages for local SEO targeting, with all leads securely stored using a Cloudflare Durable Object backend.

## Key Features

-   **Hyper-Local SEO:** Optimized content and structure to rank in St. John, Munster, Highland, Schererville, and Crown Point, IN.
-   **Lead Generation:** Prominent lead capture form integrated with a secure Cloudflare Durable Object backend for data persistence.
-   **Visually Stunning Design:** A beautiful, whimsical, and illustrative UI that provides a delightful user experience.
-   **Comprehensive Content Sections:** Clearly defined sections for Services, Trust-Building (testimonials, guarantees), and Service Area.
-   **Content Marketing Ready:** Includes templates for dynamic, content-rich SEO pages to attract organic traffic.
-   **Fully Responsive:** Flawless performance and layout across all devices, from mobile phones to desktops.
-   **Modern Tech Stack:** Built with React, Vite, and Hono on the Cloudflare serverless platform for exceptional performance and scalability.

## Technology Stack

-   **Frontend:** React, Vite, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, React Hook Form, Zod
-   **Backend:** Cloudflare Workers, Hono, Durable Objects
-   **Package Manager:** Bun
-   **Deployment:** Wrangler CLI

## Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

-   [Bun](https://bun.sh/) installed on your machine.
-   A Cloudflare account.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/aloha_clean_nwi.git
    cd aloha_clean_nwi
    ```

2.  **Install dependencies:**
    This project uses Bun as the package manager.
    ```sh
    bun install
    ```

3.  **Authenticate with Cloudflare:**
    Log in to your Cloudflare account to use Wrangler.
    ```sh
    bunx wrangler login
    ```

## Development

To run the application locally, which includes the Vite frontend development server and the Wrangler dev server for the backend worker, use the following command:

```sh
bun dev
```

This will start the development server, typically available at `http://localhost:3000`. The frontend will automatically proxy API requests to the local worker instance.

## Project Structure

-   `src/`: Contains the frontend React application source code.
    -   `pages/`: Top-level page components.
    -   `components/`: Reusable React components, including shadcn/ui components.
    -   `lib/`: Utility functions and API client.
-   `worker/`: Contains the Cloudflare Worker backend source code, built with Hono.
    -   `index.ts`: The main entry point for the worker.
    -   `user-routes.ts`: Application-specific API routes.
    -   `entities.ts`: Data models and logic for interacting with Durable Objects.
-   `shared/`: Contains TypeScript types that are shared between the frontend and backend to ensure type safety.

## Deployment

This project is designed for seamless deployment to Cloudflare Pages.

### One-Click Deploy

You can deploy this application to your Cloudflare account with a single click.

[cloudflarebutton]

### Manual Deployment

To deploy the application manually, run the following command. This will build the frontend application and deploy it along with the worker function to Cloudflare.

```sh
bun deploy
```

Wrangler will handle the entire build and deployment process. Once complete, it will provide you with the URL to your live application.