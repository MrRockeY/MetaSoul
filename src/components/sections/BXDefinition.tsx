import React from 'react';
import Image from 'next/image';

/**
 * BXDefinition Component
 * Clones the "RE DEFINE THE EXPERIENCE" section with pixel-perfect accuracy.
 * Features: Dark theme, outlined/filled kinetic-style typography, and a staggered grid of brand images.
 */
export default function BXDefinition() {
  return (
    <section 
      id="bx-definition"
      className="bg-[#000000] text-[#ffffff] min-h-screen pt-[150px] pb-[150px] overflow-hidden"
      data-section="bxOpener"
    >
      <div className="container mx-auto px-[8vw]">
        {/* Title Section: RE DEFINE THE EXPERIENCE */}
        <div className="flex flex-col gap-0 mb-[150px]">
          {/* Row 1: RE DEFINE */}
          <div className="flex flex-col md:flex-row items-baseline gap-x-[4vw]">
            <div className="relative group">
              <h2 className="text-[12vw] font-black leading-[0.9] tracking-[-0.05em] uppercase text-transparent stroke-white" style={{ WebkitTextStroke: '1px #ffffff' }}>
                RE
              </h2>
              {/* Optional: Filled layer for animation/hover effect as seen in original code structure */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-[12vw] font-black leading-[0.9] tracking-[-0.05em] uppercase text-white">
                  RE
                </h2>
              </div>
            </div>
            <div className="relative group">
              <h2 className="text-[12vw] font-black leading-[0.9] tracking-[-0.05em] uppercase text-white">
                DEFINE
              </h2>
            </div>
          </div>

          {/* Row 2: THE + Badge */}
          <div className="flex flex-col md:flex-row items-center gap-x-[4vw] md:pl-[6vw]">
            <div className="relative group">
              <h2 className="text-[12vw] font-black leading-[0.9] tracking-[-0.05em] uppercase text-white">
                THE
              </h2>
            </div>
            
            <div className="mt-8 md:mt-0">
               <div className="inline-flex items-center justify-center border border-[#ffffff] rounded-full px-6 py-2">
                 <span className="text-[14px] font-medium lowercase whitespace-nowrap">
                   experience is a baseline for all
                 </span>
               </div>
            </div>
          </div>

          {/* Row 3: EXPERIENCE */}
          <div className="relative group md:self-end">
            <h2 className="text-[12vw] font-black leading-[0.9] tracking-[-0.05em] uppercase text-white">
              EXPERIENCE
            </h2>
          </div>
        </div>

        {/* Brand Experience Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-[100px] md:gap-y-0 mt-[100px]">
          
          {/* Project 1: Dorco Full Image (Left Aligned, Staggered) */}
          <div className="md:col-start-1 md:col-span-5 flex flex-col gap-6 md:mt-[50px]">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#111111]">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f92ebb69-885c-4e2e-9559-c25a70e29db4-15th-plus-ex-com/assets/images/bx_Dorco_FullImage-6.jpg"
                alt="Dorco Brand Experience"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[12px] font-semibold tracking-[0.1em] text-[#888888] uppercase">
                BRAND SYSTEM
              </span>
              <p className="text-[1.5vw] md:text-[18px] font-light leading-snug max-w-[300px]">
                Creating a consistent brand narrative across every blade.
              </p>
            </div>
          </div>

          {/* Project 2: BX Image 01 (Right Aligned, Offset) */}
          <div className="md:col-start-7 md:col-span-5 flex flex-col gap-6 md:-mt-[150px]">
             <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#111111]">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f92ebb69-885c-4e2e-9559-c25a70e29db4-15th-plus-ex-com/assets/images/bx_image_01-11.png"
                alt="BX Project One"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[12px] font-semibold tracking-[0.1em] text-[#888888] uppercase">
                DIGITAL ECOSYSTEM
              </span>
              <p className="text-[1.5vw] md:text-[18px] font-light leading-snug max-w-[300px]">
                Redefining digital touchpoints for modern users.
              </p>
            </div>
          </div>

          {/* Project 3: BX Image 02 (Center-ish, Lower) */}
          <div className="md:col-start-4 md:col-span-6 flex flex-col gap-6 md:mt-[100px]">
            <div className="relative aspect-video w-full overflow-hidden bg-[#111111]">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f92ebb69-885c-4e2e-9559-c25a70e29db4-15th-plus-ex-com/assets/images/bx_image_02-7.png"
                alt="BX Project Two"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              />
            </div>
            <div className="flex flex-col gap-2 items-end text-right">
              <span className="text-[12px] font-semibold tracking-[0.1em] text-[#888888] uppercase">
                INTEGRATED BX
              </span>
              <p className="text-[1.5vw] md:text-[18px] font-light leading-snug max-w-[400px]">
                Harmonizing physical spaces and digital interfaces.
              </p>
            </div>
          </div>

        </div>

        {/* Closing Subtitle Section */}
        <div className="mt-[200px] max-w-[60vw]">
          <div className="flex flex-col gap-4">
            <h3 className="text-[3.5vw] font-normal leading-[1.2] tracking-[0.02em] normal-case text-balance">
              Expertise is not about knowing everything, but about defining the right experience for every moment.
            </h3>
            <div className="inline-flex self-start mt-8">
              <div className="border border-[#ffffff] rounded-full px-8 py-3 hover:bg-white hover:text-black transition-colors cursor-pointer">
                <span className="text-[14px] font-medium uppercase tracking-wider">
                  View our BX philosophy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .stroke-white {
          -webkit-text-stroke: 1px #ffffff;
        }
      `}</style>
    </section>
  );
}