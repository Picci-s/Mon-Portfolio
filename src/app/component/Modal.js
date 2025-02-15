"use client";
//import de motion pour gérer l'animation
import { motion } from "framer-motion";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-md z-50 w-screen p-4 ">
      {/* contenu de la modale agrandi et mieux ajusté */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.85,
          boxShadow: "0px 0px 50px rgba(255, 0, 0, 0.1)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          boxShadow: "0px 0px 50px rgba(255, 0, 0, 0.6)",
        }}
        exit={{
          opacity: 0,
          scale: 0.85,
          boxShadow: "0px 0px 50px rgba(255, 0, 0, 0.1)",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="bg-gray-900 text-white rounded-lg pt-4 sm:p-6 w-full max-w-lg sm:max-w-2xl md:max-w-4xl lg:max-w-4xl xl:max-w-6xl h-auto max-h-[85vh] 2xl:max-h-[90vh] mx-auto shadow-lg relative flex flex-col overflow-hidden">
        {/* bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute top-1 right-1 neon-text text-red-600 text-2xl sm:text-3xl opacity-80">
          ✖
        </button>

        {/* contenu dynamique  */}
        <div className="w-full flex flex-col items-center flex-grow overflow-y-auto scrollbar-hide p-3 sm:p-6 md:p-8">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
