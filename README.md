# 🕰️ Broken Clock

**Broken Clock** is a minimalist broken clock built with modern technologies to provide a fast, elegant, and content-first experience.

## ✨ Features

- **Minimalist Design**: Focused on readability and high-quality visuals.
- **Content Management**: Powered by Payload CMS 3.0 for intuitive content editing.
- **Responsive Layout**: Optimized for all devices using Tailwind CSS 4.
- **Category System**: Organize stories by travel destination or life topics.
- **Admin Management**: Pre-configured with dual-administrator access.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/)
- **CMS**: [Payload CMS 3.0](https://payloadcms.com/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database**: PostgreSQL (via Payload)

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- A running PostgreSQL instance (for Payload)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/brokenclock.git
   cd brokenclock
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Copy `.env.example` to `.env` and fill in your database and secret keys.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Seeding

To initialize the project with default administrators and sample categories, run:
```bash
npm run seed
```

## 📐 Architecture

- `/src/app`: Next.js App Router for frontend and API routes.
- `/src/collections`: Payload CMS collection definitions.
- `/src/payload.config.ts`: Main configuration for Payload.
- `/public`: Static assets (logos, images).

## 📄 License

This project is licensed under the MIT License.

