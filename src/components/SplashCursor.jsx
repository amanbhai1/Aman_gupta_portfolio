import React, { useEffect, useState } from 'react';

const SplashCursor = () => {
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const id = Date.now();
      const newClick = {
        id,
        x: e.clientX,
        y: e.clientY,
      };
      
      setClicks(prev => [...prev, newClick]);
      
      // Remove the click after animation completes
      setTimeout(() => {
        setClicks(prev => prev.filter(click => click.id !== id));
      }, 1000);
    };

    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      {clicks.map((click) => (
        <div
          key={click.id}
          className="absolute animate-ping rounded-full bg-teal-400 opacity-75"
          style={{
            left: click.x - 10,
            top: click.y - 10,
            width: '20px',
            height: '20px',
            animation: 'splash 1s ease-out forwards',
          }}
        />
      ))}
      <style jsx>{`
        @keyframes splash {
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
      `}</style>
    </div>
  );
};

export default SplashCursor;
