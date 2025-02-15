"use client";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  // déclaration d'un tableau d'objets contenant les projets
  const projects = [
    {
      title: "Padel Match", // nom du projet
      description: "Application de réservation de tournois de padel.", // description du projet
      image: "/images/padelmatch.png", // image d'illustration du projet
      link: "", // lien vers le site en production (vide si non déployé)
      code: "https://github.com/Picci-s/Padel-Match/blob/main/README.md", // lien vers le code source GitHub
      video:
        "https://drive.google.com/file/d/16ZY4qni8zqjrZv6LZSxanW69vtpLyil1/view?usp=drive_link", //lien vers une démo vidéo du projet
      deployed: false, // indique si le projet est en ligne (true = en ligne, false = non déployé)
    },
    {
      title: "Portfolio",
      description: "Mon portfolio interactif avec React Next.js",
      image: "/images/portfolio.png",
      link: "https://julienpiccirillo.dev",
      code: "https://github.com/Picci-s/Mon-Portfolio",
      deployed: true,
    },
    {
      title: "Recettes Dev",
      description: "Un site de recettes en mode développeur. (En cours)",
      image: "/images/recettesdev.png",
      code: "",
      deployed: false,
    },
  ];

  return (
    <div className="w-full bg-black text-white py-12 px-6 sm:px-12 min-h-[80vh]">
      {/* titre et description */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold uppercase tracking-widest text-red-600 neon-text">
          Mes Projets
        </h1>
        <p className="text-gray-300 mt-4 text-xs sm:text-base max-w-xl mx-auto">
          Voici quelques-uns des projets sur lesquels j'ai travaillé, couvrant
          des aspects frontend et backend. Chacun illustre mes compétences
          techniques et mon approche du développement web.
        </p>
      </div>

      {/* scroll horizontal  */}
      <div className="mt-10 w-full overflow-x-auto scrollbar-hide flex items-center px-4 sm:px-0">
        <div className="flex sm:gap-6 md:gap-6 lg:gap-10 xl:gap-12 2xl:gap-1px px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-[70vw] sm:w-[60vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw] 2xl:w-[18vw] flex-shrink-0">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      {/* section "Prochainement" */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-400">
          Prochainement...
        </h3>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          De nouveaux projets arriveront bientôt !
        </p>
      </div>
    </div>
  );
}
