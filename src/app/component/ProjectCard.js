"use client";

//import du componsoant react Images
import Image from "next/image";
// import des icones
import { FaPlay, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({
  title,
  description,
  image,
  link,    // declaration des props reutilisables
  code,
  video,
  deployed,
}) {
  return (
    <div className="relative w-[90%] sm:max-w-[85%] md:max-w-md lg:w-72 xl:w-80 2xl:xl:w-80 min-h-[350px] sm:min-h-[350px] md:min-h-[380px] bg-gray-900 rounded-lg shadow-lg overflow-hidden group flex flex-col">
      {/* image */}
      <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 flex items-center justify-center bg-black">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="group-hover:scale-105 transition-transform duration-300"
        />

        {/* bouton Play au centre */}
        {video && (
          <a
            href={video}
            target="_blank"
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
              <FaPlay className="text-red-600 text-2xl md:text-3xl" />
            </div>
          </a>
        )}
      </div>

      {/* contenu du projet */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-base sm:text-lg font-bold text-white text-center">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 text-center min-h-[60px] md:min-h-[80px] flex items-center justify-center">
          {description}
        </p>

        {/* boutons d'action */}
        <div className="flex justify-center mt-auto text-xs sm:text-sm gap-4 pb-4">
          {/* voir Code */}
          {code && (
            <a
              href={code}
              target="_blank"
              className="flex items-center text-white hover:text-red-500 transition">
              <FaGithub className="mr-2" /> Code
            </a>
          )}

          {/* voir le site si déployé */}
          {deployed ? (
            <a
              href={link}
              target="_blank"
              className="flex items-center text-white hover:text-red-500 transition">
              <FaExternalLinkAlt className="mr-2" /> Voir le site
            </a>
          ) : (
            <span className="text-gray-500 italic">Non déployé</span>
          )}
        </div>
      </div>
    </div>
  );
}
