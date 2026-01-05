"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsOfService() {
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
          <h1 className="font-display mb-16 uppercase">Terms of <span className="text-accent italic">Service</span></h1>
          
          <div className="space-y-12 text-muted-foreground font-medium leading-relaxed">
            <section>
              <h2 className="text-white text-xl font-black uppercase tracking-tight mb-6">1. Agreement to Terms</h2>
              <p>
                By accessing our website and using our services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-black uppercase tracking-tight mb-6">2. Intellectual Property</h2>
              <p>
                The website and its original content, features, and functionality are owned by Apex Digital Agency and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-black uppercase tracking-tight mb-6">3. Engagement Models</h2>
              <p>
                We offer services on an hourly basis, long-term contracts, and dedicated team models. Specific terms for each engagement will be outlined in separate service agreements signed between Apex and the client.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-black uppercase tracking-tight mb-6">4. Limitation of Liability</h2>
              <p>
                In no event shall Apex Digital Agency, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-black uppercase tracking-tight mb-6">5. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of Australia, without regard to its conflict of law provisions.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
