import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';

interface Service {
  id: number;
  name: string;
  orbitRadius: number;
  duration: number;
  planetSize: number;
}

const services: Service[] = [
  {
    id: 1,
    name: 'Web Dev',
    orbitRadius: 110,
    duration: 15,
    planetSize: 60,
  },
  {
    id: 2,
    name: 'Data Science',
    orbitRadius: 140,
    duration: 20,
    planetSize: 60,
  },
  {
    id: 3,
    name: 'AI/ML',
    orbitRadius: 170,
    duration: 25,
    planetSize: 60,
  },
  {
    id: 4,
    name: 'VLSI',
    orbitRadius: 200,
    duration: 30,
    planetSize: 60,
  },
  {
    id: 5,
    name: 'Embedded',
    orbitRadius: 230,
    duration: 35,
    planetSize: 60,
  }
];

export default function SolarSystem() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full h-[500px] md:h-[500px] flex items-center justify-center overflow-visible">
      {/* Solar Glow Background */}
      <div
        className="absolute w-[200px] h-[200px] rounded-full opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(255, 107, 53, 0.3) 0%, transparent 70%)',
          animation: 'glow-pulse 3s ease-in-out infinite',
        }}
      />

      {/* Central Sun - Orange with "2000+ Projects" */}
      <motion.div
        className="absolute z-10 w-[150px] h-[150px] rounded-full flex flex-col items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
          boxShadow: '0 0 60px rgba(255, 107, 53, 0.6)',
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="text-center relative z-10">
          <div className="text-3xl md:text-4xl font-bold text-white">
            2,000<span className="text-2xl">+</span>
          </div>
          <div className="text-sm text-white/90 font-medium">Projects</div>
        </div>
      </motion.div>

      {/* Orbital Rings */}
      {services.map((service, index) => (
        <div
          key={`orbit-${service.id}`}
          className="absolute rounded-full"
          style={{
            width: `${service.orbitRadius * 2}px`,
            height: `${service.orbitRadius * 2}px`,
            border: '1px solid rgba(255, 107, 53, 0.2)',
          }}
        />
      ))}

      {/* Orbiting Planets */}
      {services.map((service) => {
        const isHovered = hoveredService === service.id;

        return (
          <motion.div
            key={service.id}
            className="absolute"
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
            {/* Planet */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 cursor-pointer"
              animate={{
                rotate: prefersReducedMotion ? 0 : -360,
              }}
              transition={{
                duration: isHovered ? service.duration * 2 : service.duration,
                repeat: Infinity,
                ease: 'linear',
              }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
            >
              <motion.div
                className="relative rounded-full flex items-center justify-center"
                style={{
                  width: `${service.planetSize}px`,
                  height: `${service.planetSize}px`,
                  background: 'rgba(26, 31, 58, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255, 107, 53, 0.3)',
                }}
                whileHover={{
                  scale: 1.2,
                  borderColor: '#ff6b35',
                  boxShadow: '0 0 20px rgba(255, 107, 53, 0.5)',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Planet Glow */}
                <div
                  className="absolute w-20 h-20 rounded-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(255, 107, 53, 0.2) 0%, transparent 70%)',
                  }}
                />

                {/* Planet Label */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-gray-300">
                  {service.name}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Add keyframes for glow-pulse animation */}
      <style>{`
        @keyframes glow-pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}

