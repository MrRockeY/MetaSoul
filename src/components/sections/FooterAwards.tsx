import React from 'react';

const awardsData = [
  { year: '2024', name: 'iF Design Award', categories: ['Brand Identity / Gold'], project: 'CU Branding' },
  { year: '2024', name: 'Red Dot Design Award', categories: ['Brand Identity / Best of the Best'], project: 'SK ON Branding' },
  { year: '2023', name: 'Red Dot Design Award', categories: ['Brand Identity / Winner'], project: 'LGU+ Branding' },
  { year: '2023', name: 'iF Design Award', categories: ['Brand Identity / Winner'], project: 'Kurly Branding' },
  { year: '2022', name: 'iF Design Award', categories: ['Communication Design / Gold'], project: 'L.Point' },
  { year: '2022', name: 'Red Dot Design Award', categories: ['App Design / Best of the Best'], project: 'Shinsegae' },
  { year: '2021', name: 'iF Design Award', categories: ['Web / App Design / Gold'], project: 'T-World' },
  { year: '2021', name: 'Red Dot Design Award', categories: ['Brand Identity / Winner'], project: 'Huyndai' },
];

const FooterAwards = () => {
  return (
    <footer className="bg-black text-white px-[8vw] py-[150px] md:py-[200px] font-display">
      <div className="container mx-auto p-0 max-w-none">
        {/* Awards Header */}
        <div className="mb-[60px] md:mb-[100px]">
          <h2 className="text-[12px] font-semibold tracking-[0.1em] text-muted mb-8 uppercase">
            Selected Awards and Honors
          </h2>
          <div className="flex flex-col gap-0">
            <h3 className="text-[10vw] md:text-[8vw] font-black leading-[0.9] tracking-[-0.05em] uppercase m-0">
              Selected
            </h3>
            <h3 className="text-[10vw] md:text-[8vw] font-black leading-[0.9] tracking-[-0.05em] uppercase m-0">
              Awards
            </h3>
            <h3 className="text-[10vw] md:text-[8vw] font-black leading-[0.9] tracking-[-0.05em] uppercase m-0">
              And
            </h3>
            <h3 className="text-[10vw] md:text-[8vw] font-black leading-[0.9] tracking-[-0.05em] uppercase m-0">
              Honors
            </h3>
          </div>
        </div>

        {/* Awards List */}
        <div className="border-t border-[#222]">
          {awardsData.map((award, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-[#222] items-baseline"
            >
              <div className="md:col-span-1 text-[12px] font-semibold tracking-[0.1em] text-muted">
                {award.year}
              </div>
              <div className="md:col-span-4 text-[18px] md:text-[20px] font-medium tracking-tight">
                {award.name}
              </div>
              <div className="md:col-span-4 text-[14px] md:text-[16px] text-muted-foreground">
                {award.categories.join(', ')}
              </div>
              <div className="md:col-span-3 text-[14px] md:text-[16px] text-right hidden md:block italic font-serif">
                {award.project}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-[150px] md:mt-[200px] flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-[600px]">
            <p className="text-[2.5vw] md:text-[1.8vw] leading-[1.4] tracking-tight text-white mb-12">
              We continue to evolve the boundaries of what a brand experience can be. 
              Always listening, always creating, always PLUS X.
            </p>
            <div className="flex gap-8">
              <a href="#" className="metadata text-white hover:opacity-50 transition-opacity">Instagram</a>
              <a href="#" className="metadata text-white hover:opacity-50 transition-opacity">Behance</a>
              <a href="#" className="metadata text-white hover:opacity-50 transition-opacity">LinkedIn</a>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="mb-8">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f92ebb69-885c-4e2e-9559-c25a70e29db4-15th-plus-ex-com/assets/icons/favicon_512-4.png" 
                alt="Plus X Logo" 
                className="w-12 h-12 invert"
              />
            </div>
            <div className="text-right">
              <span className="metadata block mb-2">© 2025 Plus X Creative®</span>
              <span className="metadata text-muted">ALL RIGHTS RESERVED.</span>
            </div>
          </div>
        </div>

        {/* Global Floating Badge Mockup (Matched to UI Style) */}
        <div className="fixed bottom-10 right-10 z-50 pointer-events-none md:pointer-events-auto">
          <div className="badge-label bg-white text-black border-none mix-blend-difference cursor-pointer shadow-2xl">
            reach out
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAwards;