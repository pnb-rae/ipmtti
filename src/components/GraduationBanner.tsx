import { GraduationCap } from "lucide-react";
import { useState } from "react";

const GraduationBanner = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div 
      className="bg-gradient-to-r from-accent via-primary to-accent text-white overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      role="region"
      aria-live="polite"
      aria-label="Graduation announcement"
    >
      {/* Fade overlays on both edges */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, hsl(var(--primary)) 0%, transparent 100%)'
        }}
      />
      <div 
        className="absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to left, hsl(var(--primary)) 0%, transparent 100%)'
        }}
      />
      
      <div className="py-2.5 px-4 relative">
        <div className="flex">
          <div className={`flex items-center space-x-8 whitespace-nowrap ${isPaused ? '' : 'animate-scroll'}`}>
            <div className="flex items-center space-x-3">
              <GraduationCap className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              <span className="text-xs md:text-sm font-semibold">
                🎓 Graduation Ceremony – Friday November, 28th • 8:00 AM to 2:00 PM • MAIN CAMPUS GROUNDS 🎓 Join us in celebrating our graduates' success!
              </span>
              <GraduationCap className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center space-x-3">
              <GraduationCap className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              <span className="text-xs md:text-sm font-semibold">
                🎓 Graduation Ceremony – Friday November, 28th • 8:00 AM to 2:00 PM • MAIN CAMPUS GROUNDS 🎓 Join us in celebrating our graduates' success!
              </span>
              <GraduationCap className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            </div>
            {/* Third duplicate for extra smoothness */}
            <div className="flex items-center space-x-3">
              <GraduationCap className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              <span className="text-xs md:text-sm font-semibold">
                🎓 Graduation Ceremony – Friday November, 28th • 8:00 AM to 2:00 PM • MAIN CAMPUS GROUNDS 🎓 Join us in celebrating our graduates' success!
              </span>
              <GraduationCap className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
          will-change: transform;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none !important;
          }
        }
        
        /* Same speed on mobile as desktop */
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 40s linear infinite !important;
          }
        }
        
        /* Pause animation when not in viewport on mobile */
        @media (max-width: 768px) and (prefers-reduced-motion: no-preference) {
          .animate-scroll {
            animation-play-state: running;
          }
        }
      `}</style>
    </div>
  );
};

export default GraduationBanner;
