import React from 'react';
import Image from 'next/image';

/**
 * UXSection Component
 * Clones the UX/UI focus section which features interactive interface mockups 
 * and clean details on "RE FRAME BEAUTY AS FUNCTION".
 * 
 * Theme: Dark
 * Assets prioritized: ux_image_1-28.png, ux_image_2-29.png, ux_image_5-30.png
 */

const UXSection: React.FC = () => {
  return (
    <section 
      className="bg-[#000000] text-[#ffffff] min-h-screen relative overflow-hidden flex flex-col items-center"
      data-section="ux-focus"
    >
      {/* Top Header Label - Badge Style */}
      <div className="mt-32 mb-16 px-[8vw] w-full flex justify-start">
        <div className="badge-label border-[#222222] text-[#ffffff] opacity-80 hover:opacity-100 transition-opacity cursor-default">
          re-frame beauty as function
        </div>
      </div>

      {/* Main Large Typography Title */}
      <div className="container mx-auto px-[8vw] mb-32">
        <div className="flex flex-col space-y-2">
          <div className="relative">
            <h2 className="font-hero text-[#ffffff]">
              RE_FRAME
            </h2>
          </div>
          <div className="relative flex items-baseline gap-4">
            <h2 className="font-hero text-[#ffffff]">
              BEAUTY
            </h2>
            <div className="metadata text-[#888888] mb-4">
              [ UX/UI FOCUS ]
            </div>
          </div>
          <div className="relative">
            <h2 className="font-hero text-[#ffffff]">
              AS
            </h2>
          </div>
          <div className="relative">
            <h2 className="font-hero text-[#ffffff]">
              FUNCTION
            </h2>
          </div>
        </div>
      </div>

      {/* Interactive Mockups / Image Grid */}
      <div className="w-full px-[8vw] grid grid-cols-12 gap-8 mb-[200px]">
        {/* Left Side: Staggered mockups */}
        <div className="col-span-12 md:col-span-10 lg:col-span-8 flex flex-col md:flex-row items-end gap-12">
          {/* Mockup 1: Smaller vertical frame */}
          <div className="w-full md:w-1/2 relative aspect-[3/4] bg-[#111111] overflow-hidden border border-[#222222] group">
            <div className="absolute inset-0 p-8 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-700 ease-out">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f92ebb69-885c-4e2e-9559-c25a70e29db4-15th-plus-ex-com/assets/images/ux_image_1-28.png"
                alt="UX Interface Mockup 1"
                width={600}
                height={800}
                className="object-contain w-full h-full shadow-2xl"
                priority
              />
            </div>
            <div className="absolute bottom-4 left-4 metadata text-[10px] text-[#888888]">
              01 — INTERFACE ARCHITECTURE
            </div>
          </div>

          {/* Mockup 2: Larger feature frame */}
          <div className="w-full md:w-full lg:w-[120%] relative aspect-[4/5] bg-[#111111] overflow-hidden border border-[#222222] group shadow-xl z-10">
            <div className="absolute inset-0 p-10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-1000 ease-out">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f92ebb69-885c-4e2e-9559-c25a70e29db4-15th-plus-ex-com/assets/images/ux_image_2-29.png"
                alt="UX Interface Mockup 2"
                width={800}
                height={1000}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="absolute bottom-4 left-4 metadata text-[10px] text-[#888888]">
              02 — VISUAL HIERARCHY & FLOW
            </div>
          </div>
        </div>

        {/* Right Side / Explanatory Text */}
        <div className="col-span-12 md:col-span-4 lg:col-span-4 flex flex-col justify-end">
          <div className="metadata text-[#888888] mb-6 tracking-[0.2em]">
            SYSTEM DESIGN
          </div>
          <p className="font-subtitle text-[#ffffff] text-balance mb-12">
            Functionality is the highest form of beauty. We architect digital ecosystems where interaction feels like intuition.
          </p>
          
          {/* Mockup 3: Detail view */}
          <div className="w-full relative aspect-square bg-[#111111] overflow-hidden border border-[#222222] group">
            <div className="absolute inset-0 p-6 flex items-center justify-center transform group-hover:rotate-1 transition-transform duration-500">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f92ebb69-885c-4e2e-9559-c25a70e29db4-15th-plus-ex-com/assets/images/ux_image_5-30.png"
                alt="UX Detail View"
                width={500}
                height={500}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Spacer with Divider */}
      <div className="w-full flex justify-center mb-32">
        <div className="w-[1px] h-32 bg-gradient-to-b from-[#222222] to-transparent"></div>
      </div>

      {/* Section Footer / Transition Line */}
      <div className="w-full container px-[8vw] pb-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t border-[#222222] pt-12">
          <div className="font-serif italic text-3xl md:text-5xl text-[#888888]">
            Experience design is not <br /> what it looks like, <br /> but how it works.
          </div>
          <div className="flex flex-col items-end text-right">
            <span className="metadata text-[#555555]">PROPRIETARY METHOD</span>
            <span className="metadata text-[#ffffff] text-lg font-bold">PX-SYSTEM™</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .font-hero {
          font-size: clamp(80px, 12vw, 240px);
          font-weight: 900;
          line-height: 0.85;
          letter-spacing: -0.06em;
          text-transform: uppercase;
        }
        .badge-label {
          font-size: 14px;
          font-weight: 500;
          text-transform: lowercase;
          padding: 0.5rem 1.25rem;
          border: 1px solid currentColor;
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .metadata {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .font-subtitle {
          font-size: clamp(20px, 3vw, 36px);
          font-weight: 400;
          line-height: 1.3;
          letter-spacing: 0.01em;
        }
      `}</style>
    </section>
  );
};

export default UXSection;