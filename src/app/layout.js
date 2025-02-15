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
  title: "Mon Portfolio",
  description: "Portfolio de Julien Piccirillo, Développeur Web Full-Stack",
  openGraph: {
    title: "Mon Portfolio",
    description: "Mon portfolio de Développeur Web",
    url: "https://mon-portfolio.com",
    images: ["https://mon-portfolio.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mon Portfolio",
    description: "Portfolio de Julien Piccirillo",
    image: "https://mon-portfolio.com/twitter-image.jpg",
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
