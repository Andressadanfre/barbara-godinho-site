import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = "", size = "default", inverted = false }) => {
  const sizeClasses = {
    small: "text-xl",
    default: "text-2xl",
    large: "text-3xl"
  };

  return (
    <motion.div 
      className={`font-bold ${sizeClasses[size]} ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <span className={inverted ? "text-white" : "text-gradient"}>Bárbara</span>
      <span className={`ml-2 font-light ${inverted ? "text-white/85" : "text-slate-700"}`}>Godinho</span>
      <div className={`text-xs font-normal mt-1 tracking-wider ${inverted ? "text-white/75" : "text-slate-600"}`}>
        CERTIFICADA CNPI
      </div>
    </motion.div>
  );
};

export default Logo;