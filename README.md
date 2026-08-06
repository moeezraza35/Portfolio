# My Portfolio - Moeez Raza

A modern, responsive developer portfolio built with Next.js and React, showcasing my work as a Full-Stack Web and Mobile App Developer.

## Live Demo

[View live site](https://moeezraza.netlify.app)

## Features

- Fully responsive layout (mobile, tablet, desktop)
- Scroll-based storytelling sections and reveal animations
- Reusable component-driven architecture
- Contact flow with submission confirmation page
- Project, tools, and skills showcase
- SEO metadata with Open Graph and Twitter cards

## Tech Stack

- Framework: Next.js 16 (App Router)
- UI: React 19 + TypeScript
- Styling: Tailwind CSS 4 + custom CSS
- Icons: lucide-react
- Deployment: Netlify
- Form handling: Google Apps Script endpoint

## Routing

This project uses Next.js file-based routing via the App Router.

- No React Router DOM
- Routes are defined by folders in `app/`
- Examples: `/`, `/contact`, `/contact/submit`, `/learn`

## Installation and Setup

1. Clone the repository
   ```bash
   git clone https://github.com/moeezraza35/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the development server
   ```bash
   npm run dev
   ```

4. Open http://localhost:3000

## Project Structure

```text
app/
  layout.tsx            # Root layout and metadata
  page.tsx              # Home page
  styles.css            # Main global stylesheet
  components/           # Reusable UI components
  sections/             # Home page sections
  contact/
    page.tsx            # Contact page
    submit/page.tsx     # Contact success page
  learn/page.tsx        # Learn page

public/                 # Static assets
types/                  # Generated and shared type definitions
utils/                  # Utility helpers
```

## Available Scripts

- `npm run dev` - Start Next.js development server
- `npm run build` - Create production build
- `npm run start` - Run production server
- `npm run lint` - Run ESLint

## Customization

- Site content: update sections and components in `app/sections/` and `app/components/`
- Global styles: update `app/styles.css` and `app/globals.css`
- Static media: replace assets in `public/`

## Contact Form

The contact form sends data to a Google Apps Script web app (spreadsheet-backed), so no dedicated backend server is required.

## Author

Moeez Raza

- Portfolio: https://moeezraza.netlify.app
- GitHub: https://github.com/moeezraza35
- LinkedIn: https://linkedin.com/in/moeez-raza-773103282/

## License

This project is open source and available under the [MIT License](LICENSE.md).
