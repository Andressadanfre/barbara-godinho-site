import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = "", size = "default" }) => {
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
      <span className="text-gradient">Bárbara</span>
      <span className="text-slate-700 ml-2 font-light">Godinho</span>
      <div className="text-xs font-normal text-slate-600 mt-1 tracking-wider">
        ANALISTA CNPI
      </div>
    </motion.div>
  );
};

export default Logo;