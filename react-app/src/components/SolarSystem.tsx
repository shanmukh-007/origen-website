import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import {
  FaCode,
  FaBrain,
  FaCloud,
  FaMobileAlt,
  FaChartBar,
  FaBullhorn,
  FaShieldAlt,
  FaPalette
} from 'react-icons/fa';

interface Service {
  id: number;
  name: string;
  icon: JSX.Element;
  color: string;
  orbitRadius: number;
  duration: number;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    name: 'Web Development',
    icon: <FaCode className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-600',
    orbitRadius: 180,
    duration: 20,
    description: 'Modern web applications with cutting-edge technologies'
  },
  {
    id: 2,
    name: 'AI & ML',
    icon: <FaBrain className="w-6 h-6" />,
    color: 'from-purple-500 to-fuchsia-600',
    orbitRadius: 220,
    duration: 25,
    description: 'Intelligent solutions powered by machine learning'
  },
  {
    id: 3,
    name: 'Cloud Computing',
    icon: <FaCloud className="w-6 h-6" />,
    color: 'from-cyan-400 to-blue-500',
    orbitRadius: 160,
    duration: 18,
    description: 'Scalable cloud infrastructure and services'
  },
  {
    id: 4,
    name: 'Mobile Dev',
    icon: <FaMobileAlt className="w-6 h-6" />,
    color: 'from-teal-400 to-cyan-500',
    orbitRadius: 200,
    duration: 22,
    description: 'Native and cross-platform mobile applications'
  },
  {
    id: 5,
    name: 'Data Science',
    icon: <FaChartBar className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-600',
    orbitRadius: 240,
    duration: 28,
    description: 'Data-driven insights and analytics'
  },
  {
    id: 6,
    name: 'Digital Marketing',
    icon: <FaBullhorn className="w-6 h-6" />,
    color: 'from-fuchsia-500 to-purple-600',
    orbitRadius: 170,
    duration: 19,
    description: 'Strategic digital marketing campaigns'
  },
  {
    id: 7,
    name: 'Cybersecurity',
    icon: <FaShieldAlt className="w-6 h-6" />,
    color: 'from-blue-500 to-purple-600',
    orbitRadius: 210,
    duration: 24,
    description: 'Comprehensive security solutions'
  },
  {
    id: 8,
    name: 'UI/UX Design',
    icon: <FaPalette className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-600',
    orbitRadius: 190,
    duration: 21,
    description: 'Beautiful and intuitive user experiences'
  }
];

export default function SolarSystem() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full h-[480px] md:h-[640px] lg:h-[720px] flex items-center justify-center overflow-hidden scale-90 sm:scale-100">
      {/* Central Logo Element */}
      <motion.div
        className="absolute z-10 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 border-4 border-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,0.15)]"
        animate={{
          scale: [1, 1.03, 1],
          opacity: [1, 0.95, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Stylized "O" Logo */}
          <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 bg-clip-border"></div>
            {/* Inner circle */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
            {/* Lightning bolt accent */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                O
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Orbital Rings (visual guides) */}
      {[160, 180, 200, 220, 240].map((radius, index) => (
        <div
          key={index}
          className="absolute rounded-full border border-cyan-400/10"
          style={{
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
          }}
        />
      ))}

      {/* Orbiting Services */}
      {services.map((service, index) => {
        const angle = (index / services.length) * 360;
        const isHovered = hoveredService === service.id;

        return (
          <motion.div
            key={service.id}
            className="absolute transform-gpu will-change-transform"
            style={{
              width: `${service.orbitRadius * 2}px`,
              height: `${service.orbitRadius * 2}px`,
            }}
            animate={{
              rotate: prefersReducedMotion ? 0 : 360,
            }}
            transition={{
              duration: isHovered ? service.duration * 2 : service.duration,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 cursor-pointer"
              style={{
                transform: `translateX(-50%) rotate(-${angle}deg)`,
              }}
              initial={{ rotate: -angle }}
              animate={{ rotate: isHovered ? -angle : -angle }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
            >
              <motion.div
                className={`relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg shadow-cyan-400/20 border border-cyan-400/20 backdrop-blur-[1px]`}
                whileHover={{ scale: 1.3 }}
                animate={{
                  boxShadow: isHovered
                    ? '0 0 40px rgba(147, 51, 234, 0.8)'
                    : '0 0 20px rgba(147, 51, 234, 0.4)',
                }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
                
                {/* Service Label */}
                <motion.div
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs md:text-sm font-semibold text-gray-100 bg-gray-900/70 border border-cyan-400/20 px-3 py-1 rounded-full"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.name}
                </motion.div>

                {/* Detailed Info Card on Hover */}
                {isHovered && (
                  <motion.div
                    className="absolute top-full mt-12 left-1/2 -translate-x-1/2 w-48 md:w-56 bg-gray-900/90 backdrop-blur-sm text-white p-4 rounded-lg shadow-2xl border border-cyan-400/20 z-50"
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                        {service.icon}
                      </div>
                      <h3 className="font-bold text-sm">{service.name}</h3>
                    </div>
                    <p className="text-xs text-gray-300">{service.description}</p>
                    <button className="mt-3 w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white text-xs py-2 px-4 rounded-lg transition-all">
                      Learn More
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}

    </div>
  );
}

