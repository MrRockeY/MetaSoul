import React from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'COM2US',
    description: 'NEW TOUCHPOINTS',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f92ebb69-885c-4e2e-9559-c25a70e29db4-15th-plus-ex-com/assets/images/bx_image_03-8.png',
    size: 'large', // Masonry hint
    text: 'Touch-points keep multiplying space, motion, sound, and more.',
  },
  {
    id: 2,
    title: 'ISKRA',
    description: 'NEW INDUSTRIES',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f92ebb69-885c-4e2e-9559-c25a70e29db4-15th-plus-ex-com/assets/images/bx_image_04-12.png',
    size: 'medium',
    text: 'The rise of new industries has expanded our scope.',
  },
  {
    id: 3,
    title: 'WORKFLOW',
    description: 'NEW WORKFLOWS',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f92ebb69-885c-4e2e-9559-c25a70e29db4-15th-plus-ex-com/assets/images/bx_image_5-13.png',
    size: 'medium',
    text: 'AI and automation are reshaping how we create.',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <div className={`flex flex-col mb-[150px] md:mb-[250px] last:mb-0 w-full max-w-[1280px] mx-auto`}>
      {/* Image Container with frame effect */}
      <div className="relative overflow-hidden group">
        <div className="aspect-[16/9] w-full bg-[#111] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={1920}
            height={1080}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="mt-10 flex flex-col items-start px-[8vw]">
        <div className="flex flex-col gap-2">
            {project.text.split(',').map((line, i) => (
              <h3 key={i} className="text-[3.5vw] font-normal lowercase tracking-[0.02em] leading-[1.4] text-white">
                {line.trim()}{i < project.text.split(',').length - 1 ? ',' : ''}
              </h3>
            ))}
        </div>
        
        <div className="mt-6 flex flex-col space-y-2">
            <span className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#888888]">
              {project.description}
            </span>
        </div>
      </div>
    </div>
  );
};

const ProjectShowcase = () => {
  return (
    <section className="bg-black py-[150px] md:py-[250px] overflow-hidden">
      <div className="container overflow-visible">
        {/* Section Header with Badge */}
        <div className="mb-[150px] px-[8vw]">
          <div className="flex flex-col gap-1 mb-8">
            <h2 className="text-[3.5vw] font-normal lowercase tracking-[0.02em] leading-[1.4] text-white">
              The world
            </h2>
            <h2 className="text-[3.5vw] font-normal lowercase tracking-[0.02em] leading-[1.4] text-white">
              has changed,
            </h2>
            <h2 className="text-[3.5vw] font-normal lowercase tracking-[0.02em] leading-[1.4] text-white">
              Tremendously.
            </h2>
          </div>
          
          <div className="inline-flex items-center justify-center border border-white/20 rounded-full px-5 py-2">
            <span className="text-[14px] font-medium text-white lowercase">2020—2025</span>
          </div>
        </div>

        {/* Project List */}
        <div className="flex flex-col w-full">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Closing Headline */}
        <div className="mt-[200px] px-[8vw] max-w-[900px]">
          <div className="flex flex-col gap-2">
            <h2 className="text-[3.5vw] font-normal lowercase tracking-[0.02em] leading-[1.4] text-white">
              We don't
            </h2>
            <h2 className="text-[3.5vw] font-normal lowercase tracking-[0.02em] leading-[1.4] text-white">
              stay yesterday
            </h2>
            <h2 className="text-[3.5vw] font-normal lowercase tracking-[0.02em] leading-[1.4] text-white">
              where success
            </h2>
            <h2 className="text-[3.5vw] font-normal lowercase tracking-[0.02em] leading-[1.4] text-white">
              happened.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;