# My Portfolio – Moeez Raza

> A modern, responsive portfolio website built with Vite + React, showcasing my work as a Full‑Stack Web & Mobile App Developer.

## 🚀 Live Demo

[View live site →](https://moeezraza.netlify.app)

## ✨ Features

- Fully responsive design (mobile, tablet, desktop)
- Dynamic theme switching (light / dark / system)
- Scroll‑based animations & section tracking
- Contact form (Google Sheets integration – no backend hassle)
- Project cards with hover effects
- Skills / tools showcase with icon grid
- Admin area (message viewer)
- Optimized performance & accessibility

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS + custom CSS variables
- **Routing:** React Router DOM
- **State Management:** Context API (scroll observer, theme)
- **Deployment:** [Netlify / Vercel / your platform]
- **Form Handling:** Google Apps Script (no‑backend contact form)

## 📦 Installation & Setup

1. Clone the repository
  ```bash
  git clone https://github.com/moeezraza35/Portfolio.git
  cd Portfolio
  ```

2. Install dependencies
  ```bash
  npm install
  ```

3. Start the development server
  ```bash
  npm run dev
  ```

4. Open [http://localhost:3000](http://localhost:3000) to view it.

## 🧱 Project Structure

```
src/
├── assets/          # images, icons, fonts, styles
├── components/      # reusable UI components
├── context/         # React contexts (theme, scroll)
├── pages/           # page components (Home, About, Contact, Admin)
├── utils/           # helpers, API calls
├── contact.tsx      # Entry point for contact page
└── main.tsx         # entry point for landing page
```

## 📄 Available Scripts

- `npm run dev` – starts dev server with hot reload
- `npm run build` – builds for production
- `npm run preview` – locally preview production build

## 🎨 Customization

- Colors & themes: edit `index.css` CSS variables.
- Personal info: update content inside `pages/` components.
- Profile picture / resume: replace assets in `/public/images`.

## 📬 Contact Form

The contact form submits data to a Google Sheet via a Google Apps Script web app. No PHP or server‑side code required.

## 🧑‍💻 Author

**Moeez Raza**
- [Portfolio](https://moeezraza.netlify.app)
- [GitHub](https://github.com/moeezraza35)
- [LinkedIn](https://linkedin.com/in/moeez-raza-773103282/)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

_If you find any issues or have suggestions, feel free to open an issue or reach out directly._
