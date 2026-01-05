import React, { useEffect, useRef } from 'react';

/**
 * ParallaxImage Component
 * 
 * Clones the full-width parallax image section featuring a high-end product shot.
 * This component uses a simple scroll-based parallax effect where the image 
 * moves slightly slower or faster than the scroll to create a sense of depth.
 */
const ParallaxImage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if the section is in or near the viewport
      if (rect.top < viewportHeight && rect.bottom > 0) {
        // Calculate the progress of the element through the viewport
        // 0 when top of element enters bottom of viewport
        // 1 when bottom of element leaves top of viewport
        const distance = viewportHeight + rect.height;
        const currentProgress = (viewportHeight - rect.top) / distance;
        
        // Apply parallax offset: -10% to +10% translation
        const offset = (currentProgress - 0.5) * 20; // range of Move
        imageRef.current.style.transform = `translate3d(0, ${offset}%, 0) scale(1.15)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      data-section="image" 
      ref={containerRef}
      className="relative w-full h-[60vh] md:h-[100vh] overflow-hidden bg-[#ffffff]"
      style={{
        zIndex: 1,
        marginTop: '0px',
        marginBottom: '0px'
      }}
    >
      <div 
        className="w-full h-full relative"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        <img
          ref={imageRef}
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f92ebb69-885c-4e2e-9559-c25a70e29db4-15th-plus-ex-com/assets/images/image-apple-2.jpg"
          alt="Apple Creative Product Shot"
          className="absolute w-full h-full object-cover transition-transform duration-75 ease-out will-change-transform"
          style={{
            minHeight: '120%', // Extra height to allow for vertical movement
            top: '-10%',
            left: 0,
            transform: 'translate3d(0, 0, 0) scale(1.15)',
          }}
        />
      </div>
      
      {/* Visual styling for the transition areas if needed */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent pointer-events-none opacity-20" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none opacity-20" />
    </section>
  );
};

export default ParallaxImage;