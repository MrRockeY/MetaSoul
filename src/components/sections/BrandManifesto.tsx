import React from 'react';

/**
 * BrandManifesto Component
 * 
 * Clones the typography-driven manifesto section with high-impact serif fonts
 * and a structured grid layout. Features specific keywords as per design instructions.
 * 
 * Theme: Dark (implied by the surrounding context and high-level design transitions, 
 * but this specific sub-section uses a light visual style as a 'high-impact' contrast 
 * within the overall dark theme flow, as seen in the screenshots).
 */

const BrandManifesto: React.FC = () => {
  return (
    <section 
      data-section="introManifesto" 
      className="relative w-full overflow-hidden bg-background py-[150px] md:py-[250px]"
    >
      <div className="container mx-auto px-[8vw]">
        <div className="flex flex-col gap-0 md:gap-4">
          
          {/* Row 1: PLUS */}
          <div className="flex w-full justify-start items-center overflow-hidden">
            <h2 className="font-serif text-[12vw] md:text-[8vw] font-light leading-[1.1] uppercase tracking-tight text-foreground/90">
              PLUS
            </h2>
          </div>

          {/* Row 2: Experience, Curiosity, Inquisitive */}
          <div className="flex w-full flex-col md:flex-row items-baseline md:justify-between">
            <h2 className="font-serif text-[12vw] md:text-[8vw] font-light leading-[1.1] text-foreground/90">
              Experience
            </h2>
            <div className="flex flex-col items-end md:items-start ml-auto md:ml-0">
              <h2 className="font-serif text-[12vw] md:text-[8vw] font-light leading-[1.1] text-foreground/90">
                Curiosity
              </h2>
              <h2 className="font-serif text-[12vw] md:text-[8vw] font-light leading-[1.1] text-foreground/90">
                Inquisitive
              </h2>
            </div>
          </div>

          {/* Row 3: Empathetic, Creatively, Rational */}
          <div className="flex w-full flex-col md:flex-row items-baseline md:gap-[10vw]">
            <h2 className="font-serif text-[12vw] md:text-[8vw] font-light leading-[1.1] text-foreground/90">
              Empathetic
            </h2>
            <div className="flex flex-col">
              <h2 className="font-serif text-[12vw] md:text-[8vw] font-light leading-[1.1] text-foreground/90">
                Creatively
              </h2>
              <h2 className="font-serif text-[12vw] md:text-[8vw] font-light leading-[1.1] text-foreground/90">
                Rational
              </h2>
            </div>
          </div>

          {/* Row 4: Long-lasting, Optimal, Articulate */}
          <div className="flex w-full flex-col md:flex-row items-baseline md:justify-between mt-4 md:mt-0">
             <h2 className="font-serif text-[12vw] md:text-[8vw] font-light leading-[0.9] md:leading-[1.1] text-foreground/90">
              Long-<span className="hidden md:inline">lasting</span>
              <br className="md:hidden" />
              <span className="md:hidden">lasting</span>
            </h2>
            <div className="flex flex-col items-end md:items-start text-right md:text-left ml-auto md:ml-0">
              <h2 className="font-serif text-[12vw] md:text-[8vw] font-light leading-[1.1] text-foreground/90">
                Optimal
              </h2>
              <h2 className="font-serif text-[12vw] md:text-[8vw] font-light leading-[1.1] text-foreground/90">
                Articulate
              </h2>
            </div>
          </div>

          {/* Row 5: Consistency, Intuitive */}
          <div className="flex w-full flex-col md:flex-row items-baseline justify-end md:gap-[12vw] mt-4 md:mt-0 text-right md:text-left">
            <h2 className="font-serif text-[12vw] md:text-[8vw] font-light leading-[0.9] md:leading-[1.1] text-foreground/90">
              Consis-<br className="md:hidden" />tency
            </h2>
            <h2 className="font-serif text-[12vw] md:text-[8vw] font-light leading-[1.1] text-foreground/90">
              Intuitive
            </h2>
          </div>

        </div>
      </div>

      <style jsx global>{`
        .font-serif {
          font-family: var(--font-serif), serif;
        }
        
        /* Subtle reveal animation for text elements */
        @keyframes revealUp {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .main-title {
          animation: revealUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default BrandManifesto;