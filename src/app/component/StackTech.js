import CircleProgress from "./CircleProgress";

export default function StackTech() {
  return (
    <div className="section w-full max-w-md sm:max-w-lg md:max-w-4xl flex flex-col items-center justify-start bg-black py-6 px-4 rounded-lg">
      <div className="flex flex-col items-center justify-start mb-6">
        {/* titre principal de la section */}
        <h1 className="section-title text-lg sm:text-3xl md:text-4xl font-bold uppercase tracking-widest text-red-600 neon-text text-center">
          ma stack
        </h1>

        {/* petite description de la section */}
        <p className="text-gray-400 text-center mt-2 max-w-3xl sm:max-w-5xl text-[9px] sm:text-sm md:text-base px-2 sm:px-4 leading-tight">
          technologies que j’ai apprises et utilisées en développement web &
          mobile.
        </p>
      </div>

      {/* liste des technos avec pourcentage */}
      <div className="mt-4 grid grid-cols-3 gap-8 sm:gap-4 md:gap-6 w-full">
        {[
          {
            title: "html & css",
            percentage: 70,
            description: "structure & styles",
          },
          {
            title: "javascript",
            percentage: 75,
            description: "langage principal",
          },
          { title: "react", percentage: 65, description: "ui dynamique" },
          {
            title: "react native",
            percentage: 60,
            description: "apps mobiles",
          },
          { title: "next.js", percentage: 60, description: "optimisation" },
          { title: "node.js", percentage: 50, description: "backend" },
          { title: "express.js", percentage: 50, description: "api & routes" },
          { title: "mongodb", percentage: 60, description: "base nosql" },
          { title: "git & github", percentage: 70, description: "versionning" },
        ].map((tech, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* nom de la techno */}
            <h2 className="text-[9px] sm:text-xs text-gray-300 mb-1">
              {tech.title}
            </h2>
            {/* cercle de progression */}
            <CircleProgress percentage={tech.percentage} />
            {/* petite description */}
            <p className="text-[8px] sm:text-[10px] text-gray-400 mt-1 leading-tight">
              {tech.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
