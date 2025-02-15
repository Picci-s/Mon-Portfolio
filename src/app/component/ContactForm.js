"use client";
//import du hook useState
import { useState } from "react";

//import de emailJS pour recevoir mes mails
import emailjs from "@emailjs/browser";

export default function ContactForm() {

  // définition des states pour gérer le formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false); // etat pour gérer l'affichage du message de confirmation
  const [error, setError] = useState(null); // etat pour afficher un message d'erreur si l'envoi échoue

  // fonction appelée à chaque changement dans les champs du formulaire
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // met à jour l'état avec les valeurs saisies
  };

  // fonction exécutée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // récupération des identifiants EmailJS depuis les variables d'environnement
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // définition des paramètres à envoyer à EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    // envoi de l'email via EmailJS
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setIsSent(true); // message envoyé avec succès
        setTimeout(() => setIsSent(false), 5000); // masque le message de confirmation après 5s
        setFormData({ name: "", email: "", message: "" }); // réinitialise le formulaire
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi :", error);
        setError("Erreur lors de l'envoi. Veuillez réessayer."); // affiche un message d'erreur
      });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-black text-white py-12 px-6 sm:px-12 rounded-lg">
      {/* titre avec effet néon */}
      <div className="flex flex-col items-center justify-start mb-8 text-center">
        <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold uppercase tracking-widest text-red-600 neon-text">
          Me Contacter
        </h1>
        <p className="text-gray-300 mt-4 max-w-2xl text-xs sm:text-base">
          Je suis à la recherche d'une alternance pour continuer à évoluer en tant que développeur. 
          Si mon profil vous intéresse ou si vous souhaitez échanger, n'hésitez pas à me contacter !
        </p>
      </div>

      {/* formulaire */}
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-lg flex flex-col space-y-6 bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg">
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-red-500 focus:outline-none text-xs sm:text-base"
        />

        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-red-500 focus:outline-none text-xs sm:text-base"
        />

        <textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-red-500 focus:outline-none text-xs sm:text-base"
        ></textarea>

        {/* message de confirmation ou d'erreur */}
        {isSent && (
          <p className="text-green-500 text-center font-semibold bg-green-900 py-2 px-4 rounded-lg">
            ✅ Message envoyé avec succès !
          </p>
        )}
        {error && (
          <p className="text-red-500 text-center font-semibold bg-red-900 py-2 px-4 rounded-lg">
            ❌ {error}
          </p>
        )}

        {/* bouton d’envoi */}
        <button
          type="submit"
          className="bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-all text-sm sm:text-base">
          Envoyer
        </button>
      </form>
    </div>
  );
}
