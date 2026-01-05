import React from 'react';

/**
 * HistoryOpener Component
 * 
 * Clones the "REBIRTH FROM THE EXPERIENCE" section from the reference website.
 * This section features large, bold black typography on a light background 
 * with staggered layouts and floating/badge elements.
 */
const HistoryOpener: React.FC = () => {
  return (
    <section 
      data-section="historyOpener" 
      className="bg-white text-black min-h-[120vh] py-[150px] flex flex-col justify-center overflow-hidden"
    >
      <div className="container mx-auto px-[8vw] relative">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* First Row: RE BIRTH */}
          <div className="flex justify-between items-baseline mb-[-2vw]">
            <div className="flex flex-col">
              <h2 className="text-[12vw] font-black leading-[0.85] tracking-[-0.05em] flex flex-col">
                <span className="relative inline-block">RE</span>
                <span className="relative inline-block ml-[4vw]">BIRTH</span>
              </h2>
            </div>
          </div>

          {/* Second Row: FROM + Badge */}
          <div className="flex items-center mt-[-1vw] mb-[2vw]">
            <h2 className="text-[12vw] font-black leading-[0.85] tracking-[-0.05em] mr-[6vw]">
              FROM
            </h2>
            <div className="badge-container translate-y-[2vw]">
              <div className="inline-flex items-center px-5 py-2 border border-black rounded-full mb-1">
                <span className="text-[14px] font-medium lowercase tracking-tight">the refusal to stand still</span>
              </div>
            </div>
          </div>

          {/* Third Row: THE + Badge */}
          <div className="flex justify-end items-center mr-[15vw] mb-[-2vw]">
            <div className="badge-container mr-[4vw] -translate-y-[2vw]">
               <div className="inline-flex items-center px-5 py-2 border border-black rounded-full">
                <span className="text-[14px] font-medium lowercase tracking-tight">what keeps we moving is</span>
              </div>
            </div>
            <h2 className="text-[12vw] font-black leading-[0.85] tracking-[-0.05em]">
              THE
            </h2>
          </div>

          {/* Fourth Row: EXPERIENCE */}
          <div className="flex justify-end">
            <h2 className="text-[12vw] font-black leading-[0.85] tracking-[-0.05em]">
              EXPERIENCE
            </h2>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col space-y-4">
          <div className="flex justify-start">
             <div className="inline-flex items-center px-4 py-1.5 border border-black rounded-full mb-6">
                <span className="text-[12px] font-medium lowercase">what keeps we moving is</span>
              </div>
          </div>
          
          <h2 className="text-[18vw] font-black leading-[0.8] tracking-[-0.05em]">RE</h2>
          <h2 className="text-[18vw] font-black leading-[0.8] tracking-[-0.05em] pl-[10vw]">BIRTH</h2>
          
          <h2 className="text-[18vw] font-black leading-[0.8] tracking-[-0.05em]">FROM</h2>
          
          <div className="flex justify-end">
            <h2 className="text-[18vw] font-black leading-[0.8] tracking-[-0.05em]">THE</h2>
          </div>
          
          <div className="flex justify-end pr-[5vw]">
            <h2 className="text-[18vw] font-black leading-[0.8] tracking-[-0.05em] text-right">EXPERIENCE</h2>
          </div>

          <div className="flex justify-end mt-8">
            <div className="inline-flex items-center px-4 py-1.5 border border-black rounded-full">
              <span className="text-[12px] font-medium lowercase">the refusal to stand still</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        h2 {
           font-family: var(--font-display, "Inter", sans-serif);
        }
        .badge-container span {
           font-family: var(--font-display, "Inter", sans-serif);
        }
      `}</style>
    </section>
  );
};

export default HistoryOpener;