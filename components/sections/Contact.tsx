"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow" />
      <div className="section-label"><span>06</span> CONTACT</div>

      <motion.div className="contact-inner"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}>
        <p className="eyebrow">LET&apos;S CONNECT</p>
        <h2>Have a project or opportunity<br /><em>worth building?</em></h2>
        <a className="contact-button" href="mailto:rizkyresijulian@gmail.com">
          START A CONVERSATION <ArrowUpRight size={18} />
        </a>

        <div className="contact-details">
          <span><Mail size={15} /> rizkyresijulian@gmail.com</span>
          <span><Phone size={15} /> +62 896-5559-1884</span>
          <span><MapPin size={15} /> Cirebon, Jawa Barat</span>
        </div>
      </motion.div>
    </section>
  );
}
