"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CircleProgress = ({ percentage }) => {
  const radius = 50;
  const stroke = 8;
  const circumference = 2 * Math.PI * radius;
  
  // definition de state
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 500);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="relative flex items-center justify-center w-20 sm:w-28 md:w-32">
      <svg width="100%" height="100%" viewBox="0 0 120 120" className="transform -rotate-90">
        {/* cercle de fond */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#222"
          strokeWidth={stroke}
          fill="none"
        />
        {/* cercle animé */}
        <motion.circle
          cx="60"
          cy="60"
          r={radius}
          stroke="red"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (progress / 100) * circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - (progress / 100) * circumference }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]"
        />
      </svg>
      {/* affichage du pourcentage*/}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute text-lg sm:text-xl md:text-2xl font-bold text-red-600"
      >
        {progress}%
      </motion.div>
    </div>
  );
};

export default CircleProgress;
