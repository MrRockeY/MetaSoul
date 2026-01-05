import Loader from "../components/ui/Loader";
import type { Metadata } from "next";
import "./globals.css";

import CustomCursor from "@/components/ui/CustomCursor";
import Navigation from "@/components/ui/Navigation";

import BackToTopButton from "../components/ui/BackToTopButton";

export const metadata: Metadata = {
  title: "APEX Digital Agency | Premium Australian Web & Design Services",
  description: "Australian-registered digital agency providing premium web development, graphic design, and social media marketing services. In-house expert teams with 5+ years experience. Enterprise-grade results at 30% lower cost.",
};



function Footer() {
  return (
    <footer className="py-20 md:py-32 bg-black border-t border-white/5">
      <div className="container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24 mb-24 md:mb-32">
          <div className="md:col-span-2">
            <h3 className="text-4xl font-black tracking-tighter mb-8 md:mb-10">APEX<span className="text-accent">.</span></h3>
            <p className="text-muted-foreground max-w-sm mb-10 md:mb-12 font-medium leading-relaxed">
              Australian-registered agency for high-end digital execution. 
              Elite professionals. In-house only.
            </p>
            <div className="flex flex-wrap gap-4">
              {["LINKEDIN", "TWITTER", "INSTAGRAM"].map(s => (
                <a key={s} href="#" className="px-5 md:px-6 py-3 border border-white/10 text-[9px] font-black tracking-[0.2em] hover:border-accent hover:text-accent transition-all interactive">
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-black text-accent mb-8 md:mb-10">Capabilities</h4>
            <ul className="space-y-4 md:space-y-6 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground">
              <li className="hover:text-white transition-colors interactive"><a href="/#services">Web Development</a></li>
              <li className="hover:text-white transition-colors interactive"><a href="/#services">Graphic Design</a></li>
              <li className="hover:text-white transition-colors interactive"><a href="/#services">Social Media</a></li>
              <li className="hover:text-white transition-colors interactive"><a href="/#services">Strategy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-black text-accent mb-8 md:mb-10">Legal & HQ</h4>
            <div className="space-y-6">
              <ul className="space-y-4 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                <li className="hover:text-white transition-colors interactive">
                  <a href="/privacy">Privacy Policy</a>
                </li>
                <li className="hover:text-white transition-colors interactive">
                  <a href="/terms">Terms of Service</a>
                </li>
              </ul>
              <div>
                <p className="text-sm font-black mb-2">Sydney, Australia</p>
                <p className="text-[11px] font-bold text-muted-foreground mb-4">hello@apex.com.au</p>
                <p className="text-[9px] text-muted-foreground/50 font-black uppercase tracking-widest">ABN: 12 345 678 901</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <span className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.5em]">© 2024 APEX DIGITAL AGENCY</span>
          <span className="text-[9px] font-black text-accent uppercase tracking-[0.5em]">AUSTRALIA REGISTERED BUSINESS</span>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <html lang="en">
      <body>
        <Loader />
        <div className="noise-overlay" />
        <CustomCursor />
        <Navigation />
        {children}
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
