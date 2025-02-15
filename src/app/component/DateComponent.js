"use client";
import { useState, useEffect } from "react";

export default function DateComponent() {
  const [today, setToday] = useState("");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateDateFormat = () => {
      const screenWidth = window.innerWidth;
      setIsDesktop(screenWidth >= 768); // Vérifie si l'écran est desktop
      if (screenWidth >= 768) {
        setToday(
          new Date().toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        );
      }
    };

    updateDateFormat(); // initialisation
    window.addEventListener("resize", updateDateFormat); // ecoute du resize

    return () => window.removeEventListener("resize", updateDateFormat);
  }, []);

  if (!isDesktop) return null; // ne retourne rien si c'est mobile

  return <p className="font-bold">| le {today}</p>;
}
