import React, { useEffect, useState } from 'react';

const SplashCursor = () => {
  const [splashes, setSplashes] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const id = Date.now();
      const particles = [];

      // Create multiple particles for the splash effect
      for (let i = 0; i < 8; i++) {
        particles.push({
          id: `${id}-${i}`,
          x: e.clientX,
          y: e.clientY,
          angle: (i * 45) * (Math.PI / 180), // 8 directions
          size: Math.random() * 8 + 4,
          color: `hsl(${180 + Math.random() * 40}, 70%, 60%)`, // Teal variations
        });
      }

      setSplashes(prev => [...prev, ...particles]);

      // Remove particles after animation
      setTimeout(() => {
        setSplashes(prev => prev.filter(splash => !splash.id.startsWith(id.toString())));
      }, 800);
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
            transform: translate(var(--dx), var(--dy)) scale(0);
            opacity: 0;
          }
        }

        .splash-particle {
          animation: splash-particle 0.8s ease-out forwards;
        }
      `}</style>

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
        {splashes.map((splash) => (
          <div
            key={splash.id}
            className="absolute rounded-full splash-particle"
            style={{
              left: splash.x - splash.size / 2,
              top: splash.y - splash.size / 2,
              width: splash.size,
              height: splash.size,
              backgroundColor: splash.color,
              '--dx': `${Math.cos(splash.angle) * 60}px`,
              '--dy': `${Math.sin(splash.angle) * 60}px`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default SplashCursor;
