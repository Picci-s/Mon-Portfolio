"use client";

export default function WelcomeScreen({ onEnter }) {
  // fonction qui joue le son Netflix et exécute `onEnter` après 1.5s
  const playNetflixSound = () => {
    const audio = new Audio("/netflix-sound.mp3");
    audio.play();
    setTimeout(onEnter, 1500);
  };

  return (
    <div className="relative h-screen w-screen bg-black text-white flex flex-col items-center justify-center">
      {/* vidéo de fond en boucle avec effet de transparence */}
      <video
        className="absolute w-full h-full object-cover opacity-30"
        autoPlay
        loop
        muted
        playsInline
        preload="auto">
        <source src="/netflix-bg.mp4" type="video/mp4" />
      </video>

      {/* contenu principal */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 space-y-6">
        {/* titre principal avec police Netflix et effet néon */}
        <h1 className="netflix-font neon-text-h1 text-2xl sm:text-5xl md:text-7xl font-bold uppercase tracking-widest text-red-600">
          Bienvenue sur mon Portfolio
        </h1>

        {/* sous-titre  */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300">
          Développeur Web Full-Stack | React | Next.js | Node.js || Junior
        </p>

        {/* Bouton avec effet au survol */}
        <button
          onClick={playNetflixSound}
          className="px-3 py-1 lg:px-6 lg:py-3 bg-red-600 text-white text-lg sm:text-xl rounded-lg font-bold uppercase tracking-wide hover:bg-red-700 hover:scale-110 focus:ring-4 focus:ring-red-500">
          Entrer
        </button>
      </div>
    </div>
  );
}
