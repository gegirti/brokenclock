# 🕰️ Broken Clock

**Broken Clock** is a minimalist, real-time analog and digital clock.

## ✨ Features

- **Watchface Gallery**: Switch among five original faces: Noir, Paper, Pixel, Orbit, and Chrono.
- **Responsive Layout**: Optimized for all devices using Tailwind CSS 4.
- **Offset Time**: On each load, analog hands and digital time begin 59 seconds to 11:59:59 ahead of the viewer's local time, then advance normally.
- **Failure Engine**: Timed display faults distort the face without changing its canonical timeline. See `/failures` for the complete field guide.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🚀 Getting Started

### Prerequisites

- Node.js 20+

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

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📐 Architecture

- `/src/app`: Next.js App Router and clock UI.
- `/public`: Static assets (logos, images).

## Design references

The gallery is implemented from scratch with CSS and React; it does not include third-party code, artwork, or fonts. Its broad design directions were informed by these open-source watchface projects:

- [Google Watch Face Format](https://github.com/google/watchface) (Apache-2.0)
- [M8 pixel watchface](https://github.com/rdnt/m8) (MIT)
- [Watchface No. 1](https://github.com/markusressel/Watchface-No.-1) (MIT)
- [Obsidian Pebble watchface](https://github.com/stefanheule/obsidian) (Apache-2.0)

## 📄 License

This project is licensed under the MIT License.
