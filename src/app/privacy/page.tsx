"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="bg-black text-white min-h-screen pt-40 pb-20 container-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/" className="text-accent text-[10px] uppercase tracking-[0.4em] font-black mb-12 block hover:translate-x-2 transition-transform">
            ← Back to Home
          </Link>
          <h1 className="font-display mb-16 uppercase">Privacy <span className="text-accent italic">Policy</span></h1>
          
          <div className="space-y-12 text-muted-foreground font-medium leading-relaxed">
            <section>
              <h2 className="text-white text-xl font-black uppercase tracking-tight mb-6">1. Introduction</h2>
              <p>
                At Apex Digital Agency, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-black uppercase tracking-tight mb-6">2. Data We Collect</h2>
              <p>
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Identity Data (name, username)</li>
                <li>Contact Data (email address, telephone numbers)</li>
                <li>Technical Data (IP address, browser type and version, time zone setting and location)</li>
                <li>Usage Data (information about how you use our website)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-xl font-black uppercase tracking-tight mb-6">3. How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-xl font-black uppercase tracking-tight mb-6">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
