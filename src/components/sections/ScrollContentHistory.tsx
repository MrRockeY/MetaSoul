import React from 'react';
import Image from 'next/image';

/**
 * ScrollContentHistory Component
 * 
 * Clones the "scrollContent" section with milestone image cards, 
 * bold sub-titles, and metadata labels.
 * 
 * Theme: Dark (Note: Based on design system, this section specifically
 * shifts to a White theme or utilizes light colors for high contrast,
 * but follows the core agency branding).
 */

const milestones = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f92ebb69-885c-4e2e-9559-c25a70e29db4-15th-plus-ex-com/assets/images/history_com2us-3.png",
    title: ["Touch-points keep", "multiplying space, motion,", "sound, and more."],
    label: "NEW TOUCHPOINTS",
    alt: "Com2uS project visual"
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f92ebb69-885c-4e2e-9559-c25a70e29db4-15th-plus-ex-com/assets/images/history_iskra-4.jpg",
    title: ["The rise of new industries", "has expanded our scope."],
    label: "NEW INDUSTRIES",
    alt: "Iskra project visual"
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f92ebb69-885c-4e2e-9559-c25a70e29db4-15th-plus-ex-com/assets/images/history_blurblur_pc-5.png",
    title: ["AI and automation are", "reshaping how we create."],
    label: "NEW WORKFLOWS",
    alt: "AI and automation workflows"
  }
];

const ScrollContentHistory: React.FC = () => {
  return (
    <section 
      data-section="scrollContent" 
      className="bg-white text-black py-[200px]"
    >
      <div className="container mx-auto px-[8vw]">
        {/* Section Header */}
        <div className="mb-[150px] relative max-w-4xl">
          <div className="flex flex-col gap-2">
            <h2 className="text-[3.5vw] font-normal leading-[1.2] tracking-tight text-black uppercase">
              The world
            </h2>
            <h2 className="text-[3.5vw] font-normal leading-[1.2] tracking-tight text-black uppercase">
              has changed,
            </h2>
            <h2 className="text-[3.5vw] font-normal leading-[1.2] tracking-tight text-black uppercase">
              Tremendously.
            </h2>
          </div>
          
          {/* Badge Label - Positioned like the original */}
          <div className="mt-8">
            <div className="inline-flex items-center px-5 py-2 border border-black rounded-full">
              <span className="text-[14px] font-medium lowercase">2020—2025</span>
            </div>
          </div>
        </div>

        {/* Milestone Cards Stack */}
        <div className="flex flex-col gap-[250px]">
          {milestones.map((milestone, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center text-center"
            >
              {/* Image Frame */}
              <div className="w-full max-w-[1280px] aspect-[16/9] relative overflow-hidden bg-[#f5f5f5] mb-12">
                <Image
                  src={milestone.image}
                  alt={milestone.alt}
                  fill
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                  sizes="100vw"
                  priority={index === 0}
                />
              </div>

              {/* Title & Description */}
              <div className="max-w-[1000px] flex flex-col items-center">
                <div className="mb-4">
                  {milestone.title.map((line, lIndex) => (
                    <h3 
                      key={lIndex} 
                      className="text-[3.5vw] font-normal leading-[1.4] tracking-tight text-black uppercase text-center"
                    >
                      {line}
                    </h3>
                  ))}
                </div>
                
                <div className="text-[12px] font-bold tracking-[0.2em] text-[#888888] uppercase mt-4">
                  {milestone.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Closure */}
        <div className="mt-[250px] flex flex-col items-start max-w-4xl">
          <div className="flex flex-col gap-2">
            <h4 className="text-[3.5vw] font-normal leading-[1.2] tracking-tight text-black uppercase">
              We don't
            </h4>
            <h4 className="text-[3.5vw] font-normal leading-[1.2] tracking-tight text-black uppercase">
              stay yesterday
            </h4>
            <h4 className="text-[3.5vw] font-normal leading-[1.2] tracking-tight text-black uppercase">
              where success 
            </h4>
            <h4 className="text-[3.5vw] font-normal leading-[1.2] tracking-tight text-black uppercase">
              happened.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollContentHistory;