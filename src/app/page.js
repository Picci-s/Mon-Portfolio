"use client";

// import des hook react
import { useState, useEffect } from "react";

//import de mes components
import Modal from "./component/Modal";
import StackTech from "./component/StackTech";
import ContactForm from "./component/ContactForm";
import ProjectsSection from "./component/ProjectsSection";
import WelcomeScreen from "./component/WelcomeScreen";

// import dynamique pour éviter le chargement immédiat des composants lourds
import dynamic from "next/dynamic";

// import des components des bibliotheques react
import Image from "next/image";
import { FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

const DateComponent = dynamic(() => import("./component/DateComponent"), {
  ssr: false,
});

export default function Home() {
  // utilsation de state
  const [isEntered, setIsEntered] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  // utilisation d'objet pour definir les sections
  const sections = [
    { id: "stack", title: "Ma Stack", component: <StackTech /> },
    { id: "projects", title: "Mes Projets", component: <ProjectsSection /> },
    { id: "contact", title: "Me Contacter", component: <ContactForm /> },
  ];

  if (!isEntered) {
    return <WelcomeScreen onEnter={() => setIsEntered(true)} />;
  }

  // jsx
  return (
    <div className="relative w-full min-h-screen bg-black text-white flex flex-col justify-center items-center scrollbar-hide">
      {/* header avec liens vers LinkedIn et GitHub */}
      <header className="fixed top-0 left-0 w-full bg-black/80 text-white py-2 md:py-4 px-4 md:px-6 flex items-center justify-between z-50">
        {/* logo + Titre + Date  */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo-netflix.png"
            alt="Logo"
            width={40}
            height={40}
            className="w-8 sm:w-10 md:w-12"
          />
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-red-600">
            Mon Portfolio
          </h1>
          <DateComponent />
        </div>

        {/* icônes des réseaux sociaux */}
        <div className="flex gap-3 sm:gap-4 md:gap-6">
          {/* linkedIn */}
          <div className="relative group">
            <a
              href="https://www.linkedin.com/in/julien-piccirillo-1a133513b/"
              target="_blank"
              className="text-white hover:text-red-500 transition-all text-xl sm:text-2xl">
              <FaLinkedin />
            </a>
            <span className="absolute top-full right-[60%] transform translate-x-1/2 mt-1 sm:mt-2 w-max bg-gray-800 text-white text-xs sm:text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              LinkedIn
            </span>
          </div>

          {/* gitHub */}
          <div className="relative group">
            <a
              href="https://github.com/Picci-s"
              target="_blank"
              className="text-white hover:text-red-500 transition-all text-xl sm:text-2xl">
              <FaGithub />
            </a>
            <span className="absolute top-full right-[60%] transform translate-x-1/2 mt-1 sm:mt-2 w-max bg-gray-800 text-white text-xs sm:text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              GitHub
            </span>
          </div>

          {/* téléphone */}
          <div className="relative group">
            <a
              href="tel:+33789601588"
              className="text-white hover:text-red-500 transition-all text-xl sm:text-2xl">
              <FaPhone />
            </a>
            <span className="absolute top-full right-[40%] transform translate-x-1/3 mt-1 sm:mt-2 w-max bg-gray-800 text-white text-xs sm:text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Appeler Julien
            </span>
          </div>
        </div>
      </header>

      <div
        className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center px-4 sm:px-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), black), url('/images/background.webp') center/cover no-repeat",
        }}>
        {/* contenu texte */}
        <div className="w-full md:w-1/2 flex flex-col justify-center md:items-start text-center md:text-left xl:ml-6">
          <h2 className="section-title text-4xl sm:text-5xl md:text-5xl xl:text-7xl md:tracking-wide font-bold uppercase tracking-widest text-red-600 neon-text">
            Qui suis-je ?
          </h2>
          <h4 className="text-3xl sm:text-4xl md:text-4xl xl:text-6xlfont-bold text-white mt-4">
            Julien Piccirillo
          </h4>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-md sm:max-w-xl mt-6">
            Ancien responsable logistique, j'ai choisi de me reconvertir dans le
            développement web pour relever de nouveaux défis et donner une
            nouvelle direction à ma carrière. Diplômé en développement, je suis
            toujours en quête de nouvelles opportunités pour monter en
            compétences et évoluer dans ce domaine.
          </p>
          <a
            href="/cv.pdf"
            download
            className="mt-6 bg-red-600 px-4 sm:px-5 md:px-5 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-bold rounded-lg hover:bg-red-700 transition-all max-w-xs sm:max-w-sm mx-auto md:mx-0">
            Télécharger mon CV
          </a>
        </div>

        <div className="w-full md:w-1/2 flex justify-center mt-16 md:mt-0">
          <div className="relative w-48 sm:w-64 md:w-72 xl:w-96">
          <div className="absolute -inset-4 sm:-inset-6 rounded-3xl bg-red-500 opacity-60 blur-[20px]"></div>
            <Image
              src="/images/avatar.png"
              alt="Julien Piccirillo"
              width={500}
              height={800}
              className="relative z-10 rounded-3xl border-4 border-red-600 shadow-xl "
            />
          </div>
        </div>
      </div>

      {/* sections en mode Netflix */}
      <div className="w-full flex flex-col items-center py-16 bg-black">
        <h2 className="section-title text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-widest text-red-600 neon-text text-center z-50">
          Explorer
        </h2>

        {/* container avec scroll */}
        <div className="w-full overflow-x-auto md:overflow-visible flex xl:justify-center px-4 sm:px-6 mt-12 scrollbar-hide">
          <div className="flex md:grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mx-auto">
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="relative min-w-[50vw] sm:min-w-[40vw] w-auto md:min-w-0 
          md:w-52 h-32 sm:h-44 md:h-52 lg:w-60 xl:w-56 xl:h-52 bg-gray-800 rounded-lg flex 
          items-center justify-center text-white text-base sm:text-lg md:text-xl font-bold 
          cursor-pointer hover:scale-105 hover:bg-gray-700 transition-transform"
                style={{
                  backgroundImage: `url('/images/${section.id}-bg.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                onClick={() => setActiveModal(section.id)}>
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                <span className="relative z-10 neon-text text-center text-sm sm:text-lg md:text-2xl">
                  {section.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* modal */}
      {activeModal && (
        <Modal isOpen={true} onClose={() => setActiveModal(null)}>
          <div className="w-full flex flex-col items-center justify-center flex-grow px-4 ">
            {sections.find((s) => s.id === activeModal).component}
          </div>
          <button
            onClick={() => setActiveModal(null)}
            className="mt-4 px-4 py-2 sm:px-6 sm:py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all text-sm sm:text-base">
            Fermer
          </button>
        </Modal>
      )}
    </div>
  );
}
