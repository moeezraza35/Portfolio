import type { Metadata } from "next";
import Footer from "./components/footer";
import "./styles.css";

export const metadata: Metadata = {
  title: "Moeez Raza | Full-Stack & Mobile App Developer",
  description: "Moeez Raza builds high-performance web apps with React, FastAPI, Next, and Go, and cross-platform mobile apps with React Native. Explore my portfolio of scalable, clean-code projects.",
  keywords: "full stack developer, mobile app developer, react, golang, fastapi, django, react native, next js, sql, mongodb, portfolio",
  authors: [{ name: "Moeez Raza" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://moeezraza.netlify.app/",
  },
  openGraph: {
    type: "website",
    url: "https://moeezraza.netlify.app/",
    title: "Moeez Raza | Full-Stack & Mobile Developer",
    description: "Explore the work of a software engineer specializing in React, Go, FastAPI, and React Native. Clean code, Linux hosting, and modern architectures.",
    images: [
      {
        url: "https://moeezraza.netlify.app/images/banner.png",
        alt: "Moeez Raza portfolio homepage showcasing web and mobile development projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://moeezraza.netlify.app/",
    title: "Moeez Raza | Full-Stack & Mobile Developer",
    description: "High-performance web (React/Go/FastAPI) and mobile (React Native) development portfolio.",
    images: [
      {
        url: "https://moeezraza.netlify.app/images/banner.png",
        alt: "Moeez Raza portfolio homepage",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
