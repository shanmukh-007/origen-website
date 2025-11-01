import { motion } from 'framer-motion';
import { useMemo } from 'react';

export default function StarryBackground() {
  // Generate random stars (memoized to prevent re-generation on re-renders)
  const stars = useMemo(() => 
    Array.from({ length: 100 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 2,
    })), []
  );

  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-gray-900 via-blue-950 to-black overflow-hidden">
      {/* Animated stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-purple-950/30" />
    </div>
  );
}

