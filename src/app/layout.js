import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio | Julien Piccirillo",
  description: "Portfolio de Julien Piccirillo, Développeur Web Full-Stack",
  openGraph: {
    title: "Portfolio | Julien Piccirillo",
    description: "Découvrez mes projets et mon parcours en tant que Développeur Web Full-Stack.",
    url: "https://julienpiccirillo.dev",
  },
  twitter: {
    card: "summary",
    title: "Portfolio | Julien Piccirillo",
    description: "Développeur Web Full-Stack, découvrez mes projets et mon expertise.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: "#0a0a0a" }} // Optionnel: Ajoutez un fond de couleur
      >
        {children}
      </body>
    </html>
  );
}
