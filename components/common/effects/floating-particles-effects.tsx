const FloatingParticlesEffects = () => {
  return (
    <>
    {/* Floating particles */}
      <div className="inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => {
          const size = 2 + Math.random() * 4;
          const hue = 200 + Math.random() * 60; 
          const opacity = 0.3 + Math.random() * 0.4;
          const duration = 15 + Math.random() * 15;
          
          return (
            <div
              key={i}
              className="absolute rounded-full blur-[2px]"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                background: `hsla(${hue}, 80%, 70%, ${opacity})`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: `blur(${1 + Math.random()}px)`,
                animation: `float ${duration}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 10}s`,
                opacity: 0,
              }}
            />
          );
        })}
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          20% {
            transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 40 - 20}px) scale(1.2);
            opacity: 0.7;
          }
          50% {
            transform: translate(${Math.random() * 80 - 40}px, ${Math.random() * 60 - 30}px) scale(0.8);
            opacity: 0.4;
          }
          80% {
            transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 30 - 15}px) scale(1.1);
            opacity: 0.5;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 30 - 15}px) scale(1.05);
          }
        }

        @keyframes float-medium {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 40 - 20}px) scale(1.1);
          }
        }
      `}</style>
    </>
  );
};

export default FloatingParticlesEffects;
