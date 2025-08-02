import React, { useEffect, useState } from 'react';

const SplashCursor = () => {
  const [splashes, setSplashes] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const id = Date.now();
      const particles = [];

      // Create multiple particles for the splash effect with varied properties
      for (let i = 0; i < 12; i++) {
        const angle = (i * 30) * (Math.PI / 180); // 12 directions for fuller effect
        const distance = 40 + Math.random() * 30; // Varied distance
        particles.push({
          id: `${id}-${i}`,
          x: e.clientX,
          y: e.clientY,
          dx: Math.cos(angle) * distance,
          dy: Math.sin(angle) * distance,
          size: Math.random() * 6 + 3,
          color: `hsl(${174 + Math.random() * 20}, ${60 + Math.random() * 30}%, ${50 + Math.random() * 30}%)`,
          delay: Math.random() * 0.1,
        });
      }

      // Add center burst particle
      particles.push({
        id: `${id}-center`,
        x: e.clientX,
        y: e.clientY,
        dx: 0,
        dy: 0,
        size: 20,
        color: '#5ce1e6',
        delay: 0,
        isCenter: true,
      });

      setSplashes(prev => [...prev, ...particles]);

      // Remove particles after animation
      setTimeout(() => {
        setSplashes(prev => prev.filter(splash => !splash.id.startsWith(id.toString())));
      }, 1000);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes splash-particle {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--dx), var(--dy)) scale(0.2);
            opacity: 0;
          }
        }

        @keyframes splash-center {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          50% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .splash-particle {
          animation: splash-particle 0.8s ease-out forwards;
          box-shadow: 0 0 6px currentColor;
        }

        .splash-center {
          animation: splash-center 0.6s ease-out forwards;
          box-shadow: 0 0 20px currentColor;
        }
      `}</style>

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
        {splashes.map((splash) => (
          <div
            key={splash.id}
            className={`absolute rounded-full ${splash.isCenter ? 'splash-center' : 'splash-particle'}`}
            style={{
              left: splash.x - splash.size / 2,
              top: splash.y - splash.size / 2,
              width: splash.size,
              height: splash.size,
              backgroundColor: splash.color,
              color: splash.color,
              '--dx': `${splash.dx}px`,
              '--dy': `${splash.dy}px`,
              animationDelay: `${splash.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default SplashCursor;
