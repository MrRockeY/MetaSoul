import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGsapContext } from '../../hooks/use-gsap-context';

/**
 * HeroCover Component
 * 
 * A high-impact dark theme cover section featuring large kinetic typography 
 * "BEYOND DESIGN INTO EXPERIENCE" with split-text reveal animations.
 * 
 * Based on the design system:
 * - Theme: Dark (#000000 background)
 * - Typography: 12vw, 900 weight, Sans-Serif (Inter)
 * - Spacing: Minimalist, heavy white space (8vw margins)
 */
const HeroCover: React.FC = () => {
  const scope = useGsapContext();

  useEffect(() => {
    gsap.timeline({
      defaults: { ease: 'power3.out', duration: 1.2 },
      delay: 0.5,
    }).fromTo(
      '.title-inner h1, .title-inner h2',
      { y: '100%', autoAlpha: 0 },
      { y: '0%', autoAlpha: 1, stagger: 0.1, duration: 1.5, ease: 'power4.out' }
    );
  }, []);

  return (
    <section 
      ref={scope}
      data-section="cover" 
      className="relative w-full min-h-screen bg-black flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: 'rgb(0, 0, 0)' }}
    >
      <div className="container mx-auto px-[8vw]">
        {/* Desktop View Titles */}
        <div className="hidden md:block">
          {/* First Row: BEYOND DESIGN */}
          <div className="overflow-hidden mb-[-1.5vw]">
            <div className="title-inner flex">
              <h1 
                className="font-hero text-white tracking-[-0.06em] leading-[0.85] uppercase"
                style={{ fontSize: '12vw', fontWeight: 900 }}
              >
                BEYOND DESIGN
              </h1>
            </div>
          </div>

          {/* Second Row: INTO EXPERIENCE */}
          <div className="overflow-hidden">
            <div className="title-inner flex">
              <h2 
                className="font-hero text-white tracking-[-0.06em] leading-[0.85] uppercase"
                style={{ fontSize: '12vw', fontWeight: 900 }}
              >
                INTO EXPERIENCE
              </h2>
            </div>
          </div>
        </div>

        {/* Mobile View Titles (Staggered for verticality) */}
        <div className="block md:hidden space-y-4">
          <div className="flex flex-col">
            <div className="overflow-hidden">
              <h1 className="text-[18vw] font-black text-white leading-[0.85] tracking-tighter uppercase">
                BEYOND
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="text-[18vw] font-black text-white leading-[0.85] tracking-tighter uppercase">
                DESIGN
              </h1>
            </div>
          </div>
          
          <div className="flex flex-col mt-8">
            <div className="overflow-hidden">
              <h2 className="text-[18vw] font-black text-white leading-[0.85] tracking-tighter uppercase">
                INTO
              </h2>
            </div>
            <div className="overflow-hidden">
              <h2 className="text-[18vw] font-black text-white leading-[0.85] tracking-tighter uppercase">
                EXPERI
              </h2>
            </div>
            <div className="overflow-hidden">
              <h2 className="text-[18vw] font-black text-white leading-[0.85] tracking-tighter uppercase">
                ENCE
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient for depth transition to hero video if needed */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-black to-transparent pointer-events-none opacity-50" />
      
      <style jsx global>{`
        @keyframes revealUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        .title-inner-text {
          display: inline-block;
          animation: revealUp 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }

        /* Responsive typography adjustments */
        @media (max-width: 768px) {
          .font-hero {
            font-size: 18vw;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroCover;