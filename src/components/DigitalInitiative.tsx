
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Leader {
  name: string;
  title: string;
  email: string;
}

interface DigitalInitiativeProps {
  name: string;
  logoSrc: string;
  leaders: Leader[];
  description: string;
  path: string;
}

const DigitalInitiative: React.FC<DigitalInitiativeProps> = ({
  name,
  logoSrc,
  leaders,
  description,
  path
}) => {
  return (
    <motion.div
      className="h-[320px] perspective"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <Link to={path} className="block h-full w-full">
        <div className="flip-card w-full h-full">
          {/* Front side */}
          <div className="flip-card-inner shadow-lg rounded-lg bg-theme-darkGray p-6 flex flex-col items-center justify-center text-center hover-glow">
            <motion.div 
              className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center p-4 mb-4 overflow-hidden"
              whileHover={{ rotate: 10 }}
            >
              <img 
                src={logoSrc} 
                alt={`${name} logo`} 
                className="w-full h-full object-contain"
              />
            </motion.div>
            <h3 className="text-lg font-bold text-white mb-2">{name}</h3>
          </div>
          
          {/* Back side */}
          <div className="flip-card-inner flip-card-back rounded-lg bg-theme-darkGray p-5 flex flex-col hover-glow">
            <h3 className="text-lg font-bold text-theme-orange mb-3">{name}</h3>
            <p className="text-white/70 text-sm mb-3 flex-grow">{description}</p>
            
            <div 
              className="mt-auto inline-block bg-theme-gray hover:bg-theme-orange text-white py-2 px-4 rounded transition-colors duration-300 text-center text-sm"
            >
              Learn More
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default DigitalInitiative;
